// Good Deeds - site agaci (icindekiler).
// Yapi: Bolum (track) -> Ana baslik (section) -> Ders (lesson)
// Ders "id"si, lessons/ klasorundeki dosya adinin seviye eki olmadan halidir:
//   lessons/sabr_01_a2.json + sabr_01_b1.json  ->  id: "sabr_01"
// Sesi uretilmis dersler otomatik "hazir" olur; digerleri "Yakinda" gorunur.
// Yeni baslik/ders eklemek icin bu dosyayi duzenlemek yeterli.
window.CATALOG = {
  tracks: [
    {
      id: "faith",
      icon: "☪",
      title: "Faith & Values",
      title_tr: "İnanç ve Değerler",
      desc: "İslami kavramlar ve ahlak üzerine dersler",
      sections: [
        { id: "sabr", title: "Understanding Sabr", title_tr: "Sabrı Anlamak", lessons: [
          { id: "sabr_01", title: "What is Sabr?", title_tr: "Sabır nedir?" },
          { id: "sabr_02", title: "The Patience of Our Prophet", title_tr: "Peygamberimizin sabrı" },
          { id: "sabr_03", title: "The Patience of Prophets Ayyub and Yusuf", title_tr: "Hz. Eyyûb ve Hz. Yusuf'un sabrı" },
          { id: "sabr_04", title: "Living with Sabr Today", title_tr: "Bugün sabırla yaşamak" }
        ]},
        { id: "shukr", title: "Shukr: Gratitude", title_tr: "Şükür", lessons: [
          { id: "shukr_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "shukr_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "shukr_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "shukr_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]},
        { id: "tawakkul", title: "Tawakkul: Trust in Allah", title_tr: "Tevekkül", lessons: [
          { id: "tawakkul_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "tawakkul_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "tawakkul_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "tawakkul_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]},
        { id: "ihsan", title: "Ihsan: Excellence", title_tr: "İhsan", lessons: [
          { id: "ihsan_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "ihsan_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "ihsan_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "ihsan_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]}
      ]
    },
    {
      id: "everyday",
      icon: "☀",
      title: "Everyday English",
      title_tr: "Günlük İngilizce",
      desc: "Günlük hayattan konularla genel İngilizce",
      sections: [
        { id: "daily", title: "Daily Life", title_tr: "Günlük Hayat", lessons: [
          { id: "daily_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "daily_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "daily_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "daily_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]},
        { id: "travel", title: "Travel", title_tr: "Seyahat", lessons: [
          { id: "travel_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "travel_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "travel_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "travel_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]},
        { id: "work", title: "Work & School", title_tr: "İş ve Okul", lessons: [
          { id: "work_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "work_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "work_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "work_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]},
        { id: "stories", title: "Short Stories", title_tr: "Kısa Hikâyeler", lessons: [
          { id: "stories_01", title: "Lesson 1", title_tr: "Ders 1" },
          { id: "stories_02", title: "Lesson 2", title_tr: "Ders 2" },
          { id: "stories_03", title: "Lesson 3", title_tr: "Ders 3" },
          { id: "stories_04", title: "Lesson 4", title_tr: "Ders 4" }
        ]}
      ]
    }
  ]
};
