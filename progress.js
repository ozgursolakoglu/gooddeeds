// Good Deeds - e-posta ile giris (Supabase) ve ilerleme kaydi.
// Giris yapilmamissa ilerleme yalnizca bu tarayicida (localStorage) tutulur.
(() => {
  const cfg = window.GD_CONFIG || {};
  const sb = (cfg.supabaseUrl && cfg.supabaseKey && window.supabase)
    ? window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey)
    : null;

  const LS_KEY = "gd_progress";
  const cache = {};            // lesson_id -> {last, completed, quiz, total}
  const pending = new Set();   // sunucuya gonderilecek ders id'leri
  const listeners = [];
  let user = null, timer = null;

  const readLocal = () => { try { return JSON.parse(localStorage.getItem(LS_KEY)) || {}; } catch { return {}; } };
  const writeLocal = () => { try { localStorage.setItem(LS_KEY, JSON.stringify(cache)); } catch {} };
  const emit = () => listeners.forEach(f => { try { f(); } catch (e) { console.error(e); } });

  async function loadAll() {
    const local = readLocal();
    for (const k of Object.keys(cache)) delete cache[k];
    Object.assign(cache, local);
    if (sb && user) {
      const { data, error } = await sb.from("progress").select("*");
      if (error) { console.warn("Ilerleme okunamadi:", error.message); }
      else {
        const onServer = new Set();
        for (const r of data) {
          onServer.add(r.lesson_id);
          cache[r.lesson_id] = { last: r.last_sentence, completed: r.completed, quiz: r.quiz_score, total: r.quiz_total };
        }
        // Giristen once bu tarayicida yapilan ilerlemeyi hesaba aktar
        for (const id of Object.keys(local)) if (!onServer.has(id)) pending.add(id);
        writeLocal();
        if (pending.size) flush();
      }
    }
    emit();
  }

  function queue(id) {
    pending.add(id);
    writeLocal();
    clearTimeout(timer);
    timer = setTimeout(flush, 3000);
  }

  async function flush() {
    clearTimeout(timer);
    if (!sb || !user || !pending.size) return;
    const rows = [...pending].map(id => ({
      user_id: user.id, lesson_id: id,
      last_sentence: cache[id]?.last || 0,
      completed: !!cache[id]?.completed,
      quiz_score: cache[id]?.quiz ?? null,
      quiz_total: cache[id]?.total ?? null,
      updated_at: new Date().toISOString()
    }));
    pending.clear();
    const { error } = await sb.from("progress").upsert(rows);
    if (error) { console.warn("Ilerleme kaydedilemedi:", error.message); rows.forEach(r => pending.add(r.lesson_id)); }
  }
  addEventListener("pagehide", flush);
  document.addEventListener("visibilitychange", () => { if (document.hidden) flush(); });

  window.GD = {
    get: id => cache[id],
    isCompleted: id => !!cache[id]?.completed,
    onChange: f => listeners.push(f),
    sentence(id, i, total) {
      if (i < 0) return;
      const p = (cache[id] ||= {});
      if (p.last === i) return;
      p.last = i;
      if (i >= total - 1 && !p.completed) { p.completed = true; emit(); }
      queue(id);
    },
    quiz(id, score, total) {
      const p = (cache[id] ||= {});
      p.quiz = score; p.total = total;
      queue(id);
    }
  };

  // ---------- Giris arayuzu ----------
  const box = document.getElementById("auth");
  if (!sb || !box) { loadAll(); return; }

  const modal = document.createElement("div");
  modal.id = "authModal";
  modal.innerHTML = `
    <div class="am-card ui" role="dialog" aria-modal="true" aria-labelledby="amTitle">
      <button class="am-x" aria-label="Kapat">×</button>
      <h3 id="amTitle">Giriş yap / Kayıt ol</h3>
      <p class="am-sub">E-posta adresinizi yazın, size bir giriş bağlantısı gönderelim. Şifre gerekmez.</p>
      <form id="amForm">
        <input type="email" id="amEmail" required placeholder="ornek@eposta.com" autocomplete="email">
        <label class="am-chk"><input type="checkbox" id="amKvkk" required>
          <span><a href="gizlilik.html" target="_blank">Aydınlatma metnini</a> okudum; verilerimin bu metinde belirtilen şekilde işlenmesini ve yurt dışındaki sunuculara aktarılmasını kabul ediyorum.</span></label>
        <label class="am-chk"><input type="checkbox" id="amMarketing">
          <span>Yeni dersler ve duyurular hakkında e-posta almak istiyorum. (İsteğe bağlı)</span></label>
        <button type="submit" id="amSend">Giriş bağlantısı gönder</button>
      </form>
      <p class="am-msg" id="amMsg"></p>
    </div>`;
  document.body.appendChild(modal);
  const open = () => { modal.classList.add("open"); document.getElementById("amEmail").focus(); };
  const close = () => modal.classList.remove("open");
  modal.querySelector(".am-x").onclick = close;
  modal.addEventListener("click", e => { if (e.target === modal) close(); });

  document.getElementById("amForm").onsubmit = async e => {
    e.preventDefault();
    const btn = document.getElementById("amSend"), msg = document.getElementById("amMsg");
    btn.disabled = true; msg.textContent = "Gönderiliyor…"; msg.className = "am-msg";
    const now = new Date().toISOString();
    const { error } = await sb.auth.signInWithOtp({
      email: document.getElementById("amEmail").value.trim(),
      options: {
        emailRedirectTo: location.origin + location.pathname,
        data: {
          kvkk_accepted_at: now,
          marketing_consent: document.getElementById("amMarketing").checked,
          marketing_consent_at: document.getElementById("amMarketing").checked ? now : null
        }
      }
    });
    btn.disabled = false;
    if (error) { msg.textContent = "Gönderilemedi: " + error.message; msg.className = "am-msg err"; }
    else { msg.textContent = "E-postanıza bir giriş bağlantısı gönderdik. Gelen kutunuzu (ve gereksiz klasörünü) kontrol edin."; msg.className = "am-msg ok"; }
  };

  function render() {
    if (user) {
      box.innerHTML = `<span class="who" title="${user.email}">${user.email}</span><button id="outBtn">Çıkış</button>`;
      document.getElementById("outBtn").onclick = async () => { await flush(); await sb.auth.signOut(); };
    } else {
      box.innerHTML = `<button id="inBtn">Giriş yap</button>`;
      document.getElementById("inBtn").onclick = open;
    }
  }

  sb.auth.onAuthStateChange((_event, session) => {
    const changed = (session?.user?.id || null) !== (user?.id || null);
    user = session?.user || null;
    render();
    if (user) close();
    if (changed) setTimeout(loadAll, 0);
  });
  sb.auth.getSession().then(({ data }) => { user = data.session?.user || null; render(); loadAll(); });
})();
