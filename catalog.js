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
          { id: "shukr_01", title: "What is Shukr?", title_tr: "Şükür nedir?" },
          { id: "shukr_02", title: "The Gratitude of the Prophets", title_tr: "Peygamberlerin şükrü" },
          { id: "shukr_03", title: "Shukr and Sabr Together", title_tr: "Şükür ve sabır bir arada" },
          { id: "shukr_04", title: "Living with Shukr Today", title_tr: "Bugün şükürle yaşamak" }
        ]},
        { id: "tawakkul", title: "Tawakkul: Trust in Allah", title_tr: "Tevekkül", lessons: [
          { id: "tawakkul_01", title: "What is Tawakkul?", title_tr: "Tevekkül nedir?" },
          { id: "tawakkul_02", title: "The Trust of the Prophets", title_tr: "Peygamberlerin tevekkülü" },
          { id: "tawakkul_03", title: "Tawakkul in Hard Times", title_tr: "Zor zamanlarda tevekkül" },
          { id: "tawakkul_04", title: "Living with Tawakkul Today", title_tr: "Bugün tevekkülle yaşamak" }
        ]},
        { id: "ihsan", title: "Ihsan: Excellence", title_tr: "İhsan", lessons: [
          { id: "ihsan_01", title: "What is Ihsan?", title_tr: "İhsan nedir?" },
          { id: "ihsan_02", title: "The Excellence of the Prophets", title_tr: "Peygamberlerin ihsanı" },
          { id: "ihsan_03", title: "Ihsan to People and Creation", title_tr: "İnsanlara ve tüm canlılara ihsan" },
          { id: "ihsan_04", title: "Living with Ihsan Today", title_tr: "Bugün ihsanla yaşamak" }
        ]},
        { id: "ikhlas", title: "Ikhlas: Sincerity", title_tr: "İhlas", lessons: [
          { id: "ikhlas_01", title: "What is Ikhlas?", title_tr: "İhlas nedir?" },
          { id: "ikhlas_02", title: "The Sincerity of the Prophets", title_tr: "Peygamberlerin ihlası" },
          { id: "ikhlas_03", title: "Sincerity in Secret Deeds", title_tr: "Gizli iyilik ve ihlas" },
          { id: "ikhlas_04", title: "Living with Ikhlas Today", title_tr: "Bugün ihlasla yaşamak" }
        ]},
        { id: "tawbah", title: "Tawbah: Returning to Allah", title_tr: "Tevbe", lessons: [
          { id: "tawbah_01", title: "What is Tawbah?", title_tr: "Tevbe nedir?" },
          { id: "tawbah_02", title: "The Repentance of the Prophets", title_tr: "Peygamberlerin tevbesi" },
          { id: "tawbah_03", title: "The Door of Tawbah Is Open", title_tr: "Tevbe kapısı açıktır" },
          { id: "tawbah_04", title: "Living with Tawbah Today", title_tr: "Bugün tevbeyle yaşamak" }
        ]},
        { id: "qanaah", title: "Qana'ah: Contentment", title_tr: "Kanaat", lessons: [
          { id: "qanaah_01", title: "What is Qana'ah?", title_tr: "Kanaat nedir?" },
          { id: "qanaah_02", title: "The Contentment of the Prophets", title_tr: "Peygamberlerin kanaati" },
          { id: "qanaah_03", title: "Contentment and Comparing", title_tr: "Kıyaslamak ve kanaat" },
          { id: "qanaah_04", title: "Living with Qana'ah Today", title_tr: "Bugün kanaatle yaşamak" }
        ]},
        { id: "taqwa", title: "Taqwa: Mindfulness of Allah", title_tr: "Takva", lessons: [
          { id: "taqwa_01", title: "What is Taqwa?", title_tr: "Takva nedir?" },
          { id: "taqwa_02", title: "The Taqwa of the Prophets", title_tr: "Peygamberlerin takvası" },
          { id: "taqwa_03", title: "Taqwa Opens a Way Out", title_tr: "Takva ve kurtuluş" },
          { id: "taqwa_04", title: "Living with Taqwa Today", title_tr: "Bugün takvayla yaşamak" }
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
          { id: "daily_01", title: "My Morning Routine", title_tr: "Sabah rutinim" },
          { id: "daily_02", title: "At the Market", title_tr: "Pazarda" },
          { id: "daily_03", title: "Family and Neighbours", title_tr: "Aile ve komşular" },
          { id: "daily_04", title: "At the Doctor's", title_tr: "Doktorda" }
        ]},
        { id: "travel", title: "Travel", title_tr: "Seyahat", lessons: [
          { id: "travel_01", title: "At the Airport", title_tr: "Havalimanında" },
          { id: "travel_02", title: "At the Hotel", title_tr: "Otelde" },
          { id: "travel_03", title: "Directions and Transport", title_tr: "Yol tarifi ve ulaşım" },
          { id: "travel_04", title: "Eating Out and Emergencies", title_tr: "Dışarıda yemek ve acil durumlar" }
        ]},
        { id: "work", title: "Work & School", title_tr: "İş ve Okul", lessons: [
          { id: "work_01", title: "Fluent, Conversational, Basic", title_tr: "Akıcı, Orta, Başlangıç" },
          { id: "work_02", title: "Project Halo", title_tr: "Halo Projesi" },
          { id: "work_03", title: "Sent", title_tr: "Gönderildi" },
          { id: "work_04", title: "Last Copy", title_tr: "Son Nüsha" }
        ]},
        { id: "stories", title: "Short Stories", title_tr: "Kısa Hikâyeler", lessons: [
          { id: "stories_01", title: "The Very Big Order", title_tr: "Kocaman Sipariş" },
          { id: "stories_02", title: "The Glitter Bucket", title_tr: "Sim Kovası" },
          { id: "stories_03", title: "The Door With a Nose", title_tr: "Burunlu Kapı" },
          { id: "stories_04", title: "The Little One with the Pencil", title_tr: "Kalemli Minik" }
        ]}
      ]
    }
  ]
};
