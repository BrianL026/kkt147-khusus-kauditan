export interface Village {
  slug: string;
  name: string;
  hukumTua: string;
  population: number;
  area: string;
  description: string;
  longDescription: string;
  history: string;
  vision: string;
  mission: string[];
  potentials: string[];
  facilities: string[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}

export const villages: Village[] = [
  {
    slug: "kaasar",
    name: "Kaasar",
    hukumTua: "Fenny Katuuk",
    population: 3120,
    area: "8.5 km²",
    description: "Desa Kaasar dikenal dengan lahan pertanian yang subur serta kebersamaan masyarakatnya yang menjunjung tinggi nilai gotong royong (Mapalus).",
    longDescription: "Desa Kaasar merupakan salah satu pusat pertanian penting di Kecamatan Kauditan. Berbatasan langsung dengan wilayah perkebunan yang subur, desa ini menghasilkan berbagai komoditas pangan seperti padi, jagung, dan kelapa. Kehidupan sosial masyarakatnya kental dengan adat Minahasa dan kegiatan keagamaan yang aktif.",
    history: "Desa Kaasar didirikan pada pertengahan abad ke-19 oleh sekelompok petani dari wilayah pedalaman Minahasa yang mencari tanah subur untuk pertanian. Seiring berjalannya waktu, Kaasar berkembang menjadi desa mandiri dengan pemerintahan adat yang kuat.",
    vision: "Terwujudnya Desa Kaasar yang Mandiri, Sejahtera, dan Berbudaya Berdasarkan Nilai Gotong Royong.",
    mission: [
      "Meningkatkan kualitas infrastruktur pertanian dan jalan desa.",
      "Mengoptimalkan pelayanan publik berbasis teknologi informasi.",
      "Melestarikan adat istiadat Minahasa khususnya budaya Mapalus.",
      "Mendorong usaha mikro, kecil, dan menengah (UMKM) berbasis potensi lokal."
    ],
    potentials: ["Pertanian Padi", "Perkebunan Kelapa", "Kerajinan Bambu", "Olahan Kuliner Tradisional"],
    facilities: ["SD Negeri Kaasar", "Puskesmas Pembantu", "Gereja GMIM", "Masjid Al-Ikhlas", "Lapang Olahraga"],
    contact: {
      phone: "+62 811-4321-001",
      email: "pemdes.kaasar@minut.go.id",
      address: "Jl. Raya Kaasar, Jaga III, Desa Kaasar, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "kaima",
    name: "Kaima",
    hukumTua: "Bernadus Tuwaidan",
    population: 2890,
    area: "7.2 km²",
    description: "Desa Kaima memiliki kekayaan cagar budaya Waruga dan potensi hortikultura yang sangat menonjol di Minahasa Utara.",
    longDescription: "Kaima adalah desa bersejarah yang menyimpan berbagai peninggalan purbakala Minahasa berupa Waruga (makam batu kuno). Selain sebagai destinasi wisata budaya, Kaima dikenal sebagai penghasil buah-buahan segar dan tanaman hias yang menyuplai kebutuhan kota Manado dan Bitung.",
    history: "Nama Kaima diambil dari istilah lokal yang merujuk pada ketenangan air sungai di wilayah tersebut. Desa ini memiliki peranan penting dalam sejarah suku Minahasa di wilayah Tonsea, terbukti dengan banyaknya peninggalan situs sejarah budaya.",
    vision: "Kaima yang Maju, Lestari Budayanya, dan Unggul dalam Hortikultura.",
    mission: [
      "Mengembangkan pariwisata budaya berbasis cagar alam dan situs Waruga.",
      "Meningkatkan kapasitas petani hortikultura melalui pelatihan pertanian modern.",
      "Menjamin kelestarian lingkungan hidup dan tata air desa.",
      "Menyediakan akses layanan kesehatan dan pendidikan yang berkualitas untuk semua."
    ],
    potentials: ["Wisata Budaya Waruga", "Tanaman Hias & Hortikultura", "Agrowisata", "Anyaman Serat Alam"],
    facilities: ["SD Inpres Kaima", "Kantor Desa Kaima", "Balai Pertemuan", "Gereja Katolik St. Antonius", "Gereja GMIM Kaima"],
    contact: {
      phone: "+62 811-4321-002",
      email: "pemdes.kaima@minut.go.id",
      address: "Jl. Trans Manado-Bitung, Jaga II, Desa Kaima, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "karegesan",
    name: "Karegesan",
    hukumTua: "Meydi Singal",
    population: 2450,
    area: "6.8 km²",
    description: "Desa Karegesan dikenal dengan industri pengolahan kayu dan kelapa tradisional, serta budidaya tanaman rempah.",
    longDescription: "Desa Karegesan terletak di kaki gunung klabat bagian timur, memberikan keuntungan geografis berupa udara yang sejuk dan tanah yang subur untuk cengkih dan pala. Industri rumah tangga pengolahan sabut kelapa dan perkayuan menjadi andalan ekonomi warga setempat.",
    history: "Didirikan oleh para perintis perkebunan cengkih pada masa kolonial Belanda, Karegesan tumbuh dari sebuah pemukiman perkebunan kecil menjadi desa definitif yang berdaulat.",
    vision: "Karegesan Sejahtera, Mandiri, dan Berwawasan Lingkungan.",
    mission: [
      "Meningkatkan produktivitas perkebunan cengkih dan pala rakyat.",
      "Mengembangkan hilirisasi produk turunan kelapa.",
      "Membangun sarana olahraga dan rekreasi bagi generasi muda.",
      "Peningkatan tata kelola pemerintahan desa yang bersih dan transparan."
    ],
    potentials: ["Perkebunan Cengkih & Pala", "Industri Kerajinan Kayu", "Olahan Sabut Kelapa", "Peternakan Sapi"],
    facilities: ["SMP Negeri 2 Kauditan", "Puskesmas Pembantu Karegesan", "Gereja GPdI", "Gereja GMIM"],
    contact: {
      phone: "+62 811-4321-003",
      email: "pemdes.karegesan@minut.go.id",
      address: "Raya Karegesan-Lembean, Jaga I, Desa Karegesan, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "kauditan-1",
    name: "Kauditan I",
    hukumTua: "Royke Karundeng",
    population: 4230,
    area: "9.1 km²",
    description: "Pusat pemerintahan dan ekonomi Kecamatan Kauditan yang dinamis dengan akses perdagangan strategis.",
    longDescription: "Kauditan I merupakan gerbang utama Kecamatan Kauditan yang dilewati oleh jalan arteri nasional penghubung Manado dan Bitung. Sebagai pusat administrasi, desa ini menjadi motor penggerak sektor jasa, perdagangan, dan UMKM dengan fasilitas umum terlengkap di kecamatan.",
    history: "Kauditan I merupakan wilayah induk sejarah dari pembagian Desa Kauditan. Pemukiman ini tumbuh pesat sejak dibukanya jalan pos Trans-Minahasa pada masa lalu, menjadikannya titik singgah penting perdagangan.",
    vision: "Kauditan I Terdepan dalam Pelayanan, Perdagangan, dan Kesejahteraan Masyarakat.",
    mission: [
      "Meningkatkan kualitas pelayanan administrasi publik yang cepat dan ramah.",
      "Mendukung penataan pasar tradisional desa yang bersih dan modern.",
      "Meningkatkan keamanan dan ketertiban lingkungan desa.",
      "Mengembangkan program pemberdayaan ekonomi kreatif bagi pemuda."
    ],
    potentials: ["Perdagangan & Jasa", "Industri Kuliner", "Pusat Distribusi Logistik", "Kemitraan UMKM"],
    facilities: ["Kantor Camat Kauditan", "Puskesmas Kauditan", "Pasar Tradisional Kauditan", "SMA Negeri 1 Kauditan", "Gereja GMIM Sentrum"],
    contact: {
      phone: "+62 811-4321-004",
      email: "pemdes.kauditan1@minut.go.id",
      address: "Jl. Trans Manado-Bitung, Jaga IV, Desa Kauditan I, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "kauditan-2",
    name: "Kauditan II",
    hukumTua: "Jantje Londa",
    population: 3850,
    area: "8.3 km²",
    description: "Desa dengan potensi pertanian perkotaan, pelestarian seni musik bambu, dan pemukiman yang tertata.",
    longDescription: "Kauditan II berbatasan langsung dengan Kauditan I, menyajikan perpaduan wilayah pemukiman semi-perkotaan dengan kawasan hijau perkebunan kelapa. Desa ini sangat aktif dalam pelestarian seni budaya Tonsea, khususnya kelompok musik tiup bambu tradisional yang sering berprestasi nasional.",
    history: "Dimekarkan dari Desa Kauditan induk untuk mengoptimalkan pelayanan pemerintahan akibat pertumbuhan jumlah penduduk yang pesat di wilayah lingkar luar pos perdagangan.",
    vision: "Kauditan II yang Harmonis, Berbudaya, Kreatif, dan Sejahtera.",
    mission: [
      "Membangun infrastruktur pemukiman yang teratur dan bebas banjir.",
      "Memfasilitasi pengembangan seni budaya musik bambu dan tari tradisional.",
      "Meningkatkan program kesehatan ibu, anak, dan lansia.",
      "Mendorong program pemanfaatan pekarangan rumah untuk ketahanan pangan."
    ],
    potentials: ["Musik Bambu Tradisional", "Pertanian Urban", "Kuliner Khas Tonsea", "Industri Rumah Tangga Kue Basah"],
    facilities: ["SD Inpres Kauditan II", "Balai Desa Modern", "Lapangan Olahraga", "Gereja Advent", "Gereja GMIM"],
    contact: {
      phone: "+62 811-4321-005",
      email: "pemdes.kauditan2@minut.go.id",
      address: "Jl. Stadion Mini Kauditan, Jaga III, Desa Kauditan II, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "kawiley",
    name: "Kawiley",
    hukumTua: "Vicky Luntungan",
    population: 2680,
    area: "7.0 km²",
    description: "Desa Kawiley menonjol dalam pengembangan peternakan unggas dan perikanan air tawar rakyat.",
    longDescription: "Desa Kawiley didukung oleh sumber mata air yang melimpah dari pegunungan di sekitarnya. Hal ini menjadikan Kawiley sebagai sentra budidaya ikan air tawar seperti mujair dan mas, disamping usaha peternakan ayam petelur yang menyuplai pasar regional.",
    history: "Didirikan di sepanjang aliran sungai purba, Kawiley sejak dahulu dikenal oleh musafir lintas Tonsea sebagai tempat beristirahat karena airnya yang bersih dan melimpah ruah.",
    vision: "Mewujudkan Kawiley sebagai Sentra Pangan Protein Hewani dan Mandiri Ekonomi.",
    mission: [
      "Modernisasi sarana dan prasarana irigasi kolam perikanan.",
      "Menjalin kemitraan dengan industri pakan ternak untuk menekan biaya produksi petani.",
      "Meningkatkan kebersihan saluran air desa.",
      "Mengembangkan wisata kuliner bakar ikan air tawar khas desa."
    ],
    potentials: ["Perikanan Air Tawar", "Peternakan Ayam Petelur", "Wisata Kuliner Air Tawar", "Tanaman Pangan"],
    facilities: ["BBI (Balai Benih Ikan) Wilayah", "SD Negeri Kawiley", "Puskesmas Pembantu", "Gereja GMIM Kawiley"],
    contact: {
      phone: "+62 811-4321-006",
      email: "pemdes.kawiley@minut.go.id",
      address: "Jl. Perikanan Darat, Jaga I, Desa Kawiley, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "lembean",
    name: "Lembean",
    hukumTua: "Deisy Senduk",
    population: 3410,
    area: "9.5 km²",
    description: "Desa Lembean terkenal dengan fasilitas kesehatannya yang bersejarah serta iklim perkebunan yang sejuk.",
    longDescription: "Desa Lembean terletak di dataran tinggi yang berbatasan langsung dengan Kecamatan Airmadidi. Lembean memiliki nilai historis dan sosial yang tinggi berkat keberadaan Rumah Sakit Hermana Lembean yang telah melayani masyarakat Minahasa sejak puluhan tahun lalu.",
    history: "Nama Lembean berasal dari kata 'Lembe' yang berarti batas. Desa ini secara historis merupakan daerah perbatasan adat Tonsea yang kemudian berkembang pesat dengan berdirinya misi pelayanan kesehatan kristen pada awal abad ke-20.",
    vision: "Lembean Sehat, Cerdas, Sejahtera, dan Berdaya Saing Tinggi.",
    mission: [
      "Meningkatkan sinergi desa dengan fasilitas kesehatan setempat.",
      "Mengembangkan sektor agrowisata buah dingin (avokad dan durian).",
      "Meningkatkan kualitas jalan penghubung antar desa.",
      "Menyediakan beasiswa bagi siswa berprestasi dari keluarga kurang mampu."
    ],
    potentials: ["Agrowisata Avokad & Durian", "Jasa Kesehatan & Kos-kosan", "Peternakan Babi", "Pohon Enau (Bahan Gula Merah)"],
    facilities: ["Rumah Sakit Hermana Lembean", "SD & SMP Katolik Lembean", "Gereja GMIM Immanuel Lembean", "Gereja Katolik Stella Maris"],
    contact: {
      phone: "+62 811-4321-007",
      email: "pemdes.lembean@minut.go.id",
      address: "Jl. Raya Lembean, Jaga V, Desa Lembean, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "paslaten",
    name: "Paslaten",
    hukumTua: "Ferry Kalesaran",
    population: 2150,
    area: "6.0 km²",
    description: "Desa asri dengan adat Minahasa yang masih kental, penghasil gula aren murni berkualitas tinggi.",
    longDescription: "Paslaten merupakan desa dengan populasi terkecil di Kecamatan Kauditan, namun memiliki tingkat kerukunan dan keasrian lingkungan yang sangat baik. Pohon-pohon enau tumbuh subur di wilayah hutan desa, menjadikan Paslaten produsen utama gula aren cetak dan gula semut berkualitas ekspor.",
    history: "Kata Paslaten memiliki makna tempat pemurnian atau penyaringan. Nama ini menggambarkan komitmen pendiri desa untuk membangun komunitas sosial yang bersih dari pengaruh buruk luar.",
    vision: "Paslaten Indah, Rukun, Mandiri, dan Sentra Produk Aren Terbaik.",
    mission: [
      "Melakukan standardisasi dan sertifikasi produk gula aren desa.",
      "Meningkatkan kelestarian hutan adat dan perlindungan pohon enau.",
      "Mengoptimalkan peran Posyandu dan Posbindu di setiap jaga.",
      "Pembangunan drainase terpadu di kawasan pemukiman penduduk."
    ],
    potentials: ["Gula Aren Tradisional", "Gula Semut Organik", "Wisata Hutan Bambu", "Seni Tari Kabasaran"],
    facilities: ["Balai Desa Paslaten", "Pustu Paslaten", "Gereja GMIM Paslaten", "Gereja GPdI Kemenangan"],
    contact: {
      phone: "+62 811-4321-008",
      email: "pemdes.paslaten@minut.go.id",
      address: "Jl. Pohon Aren, Jaga II, Desa Paslaten, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "treman",
    name: "Treman",
    hukumTua: "Jeane Sompie",
    population: 3280,
    area: "8.0 km²",
    description: "Desa wisata sejarah dengan panorama kaki Gunung Klabat dan hamparan cengkih yang melimpah.",
    longDescription: "Desa Treman terletak persis di lereng Gunung Klabat bagian timur laut. Keindahan lanskap alamnya menjadikannya primadona agrowisata pendakian gunung. Komoditas cengkih Treman dikenal memiliki kadar minyak tinggi yang disukai industri rokok kretek dan farmasi.",
    history: "Treman didirikan oleh para pemburu dan pencari getah damar dari pesisir Tonsea yang kemudian menetap karena terpesona oleh keindahan alam kaki Gunung Klabat dan kesegaran air pegunungannya.",
    vision: "Treman Desa Wisata Gunung yang Mandiri, Sejahtera, dan Berbudaya Tonsea.",
    mission: [
      "Mengembangkan jalur pendakian Gunung Klabat via Treman secara profesional.",
      "Meningkatkan pengelolaan kelompok sadar wisata (Pokdarwis) desa.",
      "Mendukung peremajaan tanaman cengkih tua milik warga.",
      "Meningkatkan fasilitas sanitasi pemukiman warga desa."
    ],
    potentials: ["Basecamp & Guide Gunung Klabat", "Perkebunan Cengkih", "Produksi Kopi Gunung", "Home Stay Tradisional"],
    facilities: ["Basecamp Pendakian Klabat", "SD Inpres Treman", "Gereja Katolik Treman", "Gereja GMIM Treman"],
    contact: {
      phone: "+62 811-4321-009",
      email: "pemdes.treman@minut.go.id",
      address: "Jl. Gunung Klabat, Jaga III, Desa Treman, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "tumaluntung",
    name: "Tumaluntung",
    hukumTua: "Richard Kamagi",
    population: 3980,
    area: "10.2 km²",
    description: "Desa terluas yang berkembang pesat sebagai kawasan industri ramah lingkungan dan perumahan modern.",
    longDescription: "Tumaluntung adalah wilayah terluas di Kecamatan Kauditan yang mengalami transformasi pesat. Berdekatan dengan koridor tol Manado-Bitung, desa ini menjadi primadona investasi perumahan subsidi dan komersial, serta industri pergudangan dengan tetap menjaga zona hijau pertanian.",
    history: "Berasal dari kata 'Tuma' dan 'Luntung' yang merujuk pada tanaman merambat berakar kuat. Desa ini dikenal tangguh dalam sejarah pertahanan wilayah saat masa pergolakan daerah.",
    vision: "Tumaluntung Modern, Berinvestasi Tinggi, dan Tetap Lestari Hijau.",
    mission: [
      "Mempermudah perizinan investasi usaha lokal yang berwawasan lingkungan.",
      "Membangun infrastruktur jalan utama beraspal beton berkualitas tinggi.",
      "Menyediakan ruang terbuka hijau (RTH) dan taman bermain anak.",
      "Meningkatkan keterampilan tenaga kerja lokal melalui balai latihan kerja desa."
    ],
    potentials: ["Kawasan Pergudangan & Logistik", "Perumahan & Properti", "Pertanian Jagung Modern", "Kerajinan Batu Alam"],
    facilities: ["Kantor Desa Tumaluntung", "Stadion Olahraga Desa", "Puskesmas Pembantu Tumaluntung", "Gereja Katolik", "Gereja GMIM"],
    contact: {
      phone: "+62 811-4321-010",
      email: "pemdes.tumaluntung@minut.go.id",
      address: "Jl. Raya Tumaluntung, Jaga VI, Desa Tumaluntung, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "watudambo",
    name: "Watudambo",
    hukumTua: "Merry Rambing",
    population: 3350,
    area: "8.9 km²",
    description: "Desa Watudambo kaya akan potensi kelapa terpadu dan terletak strategis di perbatasan Kecamatan.",
    longDescription: "Watudambo merupakan gerbang timur Kecamatan Kauditan yang berbatasan langsung dengan Kota Bitung. Posisi strategis ini menjadikannya pusat perlintasan logistik barang. Industri kelapa terpadu skala menengah seperti pabrik minyak kelapa kasar (CNO) berada di kawasan ini.",
    history: "Watudambo dinamai dari legenda 'Watu Dambo' atau batu besar bertumpuk yang dipercaya menjadi tempat keramat para leluhur Minahasa sebagai penanda kesepakatan damai antar suku Tonsea.",
    vision: "Watudambo Maju, Sebagai Pusat Pengolahan Kelapa dan Gerbang Perbatasan yang Asri.",
    mission: [
      "Mengembangkan hilirisasi produk kelapa (arang batok, minyak kelapa, sabut).",
      "Meningkatkan estetika dan kebersihan gerbang masuk desa.",
      "Meningkatkan kemitraan industri kelapa dengan petani kelapa lokal.",
      "Mengadakan pelayanan administrasi malam hari secara berkala."
    ],
    potentials: ["Pabrik Minyak Kelapa", "Kerajinan Arang Tempurung", "Perdagangan Lintas Batas", "Pariwisata Religi"],
    facilities: ["Pos Polisi Perbatasan", "SD Negeri 1 Watudambo", "Gereja GMIM Watudambo", "Masjid Watudambo", "Puskesmas Pembantu"],
    contact: {
      phone: "+62 811-4321-011",
      email: "pemdes.watudambo@minut.go.id",
      address: "Jl. Raya Manado-Bitung Km. 28, Jaga IV, Desa Watudambo, Kec. Kauditan, Minahasa Utara"
    }
  },
  {
    slug: "watudambo-2",
    name: "Watudambo II",
    hukumTua: "Ida Rotty",
    population: 2980,
    area: "7.8 km²",
    description: "Desa Watudambo II unggul dalam agribisnis buah pepaya, peternakan babi, dan pemanfaatan energi terbarukan biogas.",
    longDescription: "Watudambo II dimekarkan dari Watudambo induk dan berkembang pesat sebagai salah satu desa mandiri energi di Sulawesi Utara berkat keberadaan instalasi biogas kotoran ternak berskala kelompok tani. Selain itu, desa ini merupakan pemasok utama pepaya jenis California untuk minimarket di Sulawesi Utara.",
    history: "Dimekarkan secara resmi pada akhir abad ke-20 untuk mempercepat laju pembangunan di wilayah utara Watudambo yang memiliki konsentrasi peternakan dan perkebunan hortikultura yang intensif.",
    vision: "Watudambo II Desa Mandiri Energi, Unggul Agribisnis Pepaya, dan Asri Terpelihara.",
    mission: [
      "Memperluas jaringan instalasi biogas ramah lingkungan ke rumah tangga.",
      "Memfasilitasi pemasaran kelompok tani pepaya langsung ke pasar modern.",
      "Meningkatkan pemeliharaan jalan usaha tani desa.",
      "Mengembangkan program pengelolaan sampah terpadu (Bank Sampah)."
    ],
    potentials: ["Pepaya California", "Peternakan Babi & Sapi", "Instalasi Biogas Mandiri", "Kerajinan Tangan Serat Pisang Abaka"],
    facilities: ["Balai Penelitian Pertanian Desa", "Gedung Serbaguna Desa", "SD GMIM Watudambo II", "Gereja GMIM Watudambo II", "Gereja Katolik"],
    contact: {
      phone: "+62 811-4321-012",
      email: "pemdes.watudambo2@minut.go.id",
      address: "Jl. Trans Raya Watudambo II, Jaga III, Desa Watudambo II, Kec. Kauditan, Minahasa Utara"
    }
  }
];
