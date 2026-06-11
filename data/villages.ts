export interface PillarSejarah {
  asalNama: string;
  topografi: string;
  transSulawesi: string;
  linimasa: string[];
}

export interface PillarKomoditas {
  kelapa: string;
  cengkeh: string;
  palawija: string;
  peranOrganisasi: string; // peran Poktan & BUMDES
  daftarKomoditas: string[];
}

export interface PillarBudaya {
  mapalus: string;
  pengucapanSyukur: string;
  kesenian: string; // Kolintang, tari Kabasaran, alat Sui/Patola
  nilaiAdat: string[];
}

export interface PillarInovasi {
  alihFungsiLahan: string; // tantangan alih fungsi lahan
  digitalisasi: string;    // sosmed, pemasaran digital
  inovasiUmkm: string;     // produk UMKM, biogas
  programKerja: string[];
}

export interface Village {
  slug: string;
  name: string;
  tagline: string;
  sejarah: PillarSejarah;
  komoditas: PillarKomoditas;
  budaya: PillarBudaya;
  inovasi: PillarInovasi;
}

export const villages: Village[] = [
  {
    slug: "kaasar",
    name: "Kaasar",
    tagline: "Wanua Tuha Tonsea, Berakar Sejarah, Berdaya Agraris, Menuju Masa Depan",
    sejarah: {
      asalNama: "Desa Kaasar dikenal luas sebagai 'Wanua Tuha' (desa induk atau desa tertua) yang menjadi cikal bakal terbentuknya pemukiman di wilayah Kauditan. Secara historis, desa ini adalah salah satu titik awal pemukiman para Dotu (leluhur) etnis Minahasa dari sub-etnis Tonsea di kawasan tersebut.",
      topografi: "Memiliki kontur tanah dataran rendah yang berangsur-angsur menjadi perbukitan menuju lereng Gunung Klabat. Tanah vulkanisnya sangat subur dengan sumber air pegunungan yang melimpah, menjadikannya kawasan pertanian yang sangat ideal.",
      transSulawesi: "Terletak strategis dekat dengan jalur poros utama transportasi logistik Kecamatan Kauditan, dengan konsentrasi pemukiman warga terpusat di tengah desa mengikuti jalur jalan utama.",
      linimasa: [
        "Masa Pra-Kolonial: Menerapkan sistem ladang berpindah sebagai sumber kehidupan utama masyarakat.",
        "Era Kolonial Belanda: Mengembangkan perkebunan menetap dengan kelapa dan cengkeh sebagai komoditas unggulan.",
        "Era Modern: Mempertahankan identitas dan fungsinya sebagai desa penyangga pertanian utama di Kecamatan Kauditan."
      ]
    },
    komoditas: {
      kelapa: "Perkebunan kelapa diolah secara tradisional menjadi kopra, yang kemudian disuplai langsung ke pabrik pengolahan minyak kelapa di Kota Bitung.",
      cengkeh: "Panen raya cengkeh terjadi tiap 2-3 tahun sekali. Penjualan cengkeh kering kepada pengepul besar di Manado menjadi puncak perputaran ekonomi warga desa.",
      palawija: "Budidaya tanaman buah-buahan lokal seperti rambutan, lansat, dan durian, serta jagung pipil dan sayur-sayuran segar di lahan hortikultura rakyat.",
      peranOrganisasi: "Kelompok Tani (Poktan) tergolong sangat aktif dengan rasa kekeluargaan yang erat khas desa tua. Badan Usaha Milik Desa (BUMDes) dipersiapkan untuk menyediakan sarana produksi tani demi memotong rantai tengkulak.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Rambutan", "Lansat", "Durian", "Jagung", "Sayuran"]
    },
    budaya: {
      mapalus: "Tradisi gotong royong Mapalus tanpa upah tetap terjaga erat, terutama dipraktikkan saat musim panen cengkeh, mendirikan rumah warga, dan pembukaan lahan pertanian baru.",
      pengucapanSyukur: "Dirayakan setahun sekali dengan nuansa religius yang kental sebagai bentuk terima kasih kepada Sang Pencipta (Opo Empung), sekaligus ajang berkumpulnya keluarga besar dari rantau.",
      kesenian: "Pelestarian kesenian musik Kolintang kayu, musik tiup bambu tradisional, dan tarian perang Kabasaran. Alat tani tradisional seperti Sui (pengupas kelapa) dan Patola (parang khas) masih eksis.",
      nilaiAdat: ["Mapalus", "Pengucapan Syukur (Opo Empung)", "Musik Kolintang", "Musik Bambu", "Tari Kabasaran", "Alat Tradisional Sui & Patola"]
    },
    inovasi: {
      alihFungsiLahan: "Menghadapi tantangan berupa penyakit cacar daun dan penggerek batang cengkeh, ketergantungan penjemuran pada cuaca matahari, serta minimnya minat pemuda desa yang lebih memilih bekerja di sektor industri perkotaan.",
      digitalisasi: "Anak muda desa memanfaatkan internet dan media sosial untuk memantau harga komoditas terkini secara online guna menghindari penipuan harga oleh tengkulak.",
      inovasiUmkm: "Pengembangan konsep agrowisata sejarah dan budaya berbasis cagar alam serta penjualan hasil kebun secara langsung (direct-to-consumer) via pemasaran online.",
      programKerja: ["Pengendalian Hama Cengkeh Terpadu", "Pemberdayaan Petani Muda", "Penguatan BUMDes Pemasok Saprotan", "Rintisan Agrowisata Sejarah & Budaya"]
    }
  },
  {
    slug: "kaima",
    name: "Kaima",
    tagline: "Desa Cagar Budaya Waruga dan Pelopor Pertanian Modern",
    sejarah: {
      asalNama: "Leluhur Desa Kaima memiliki kekerabatan erat dengan Desa Treman dan berasal dari pemukiman purba nomaden di Walantakan. Pada tahun 1775 dibentuk 'Wanua Kaima' secara resmi dipimpin oleh Dotu Wuaten Pangemanan sebagai Hukum Tua pertamanya.",
      topografi: "Secara bertahap berpindah dari area berawa di Keléwér ke bukit Keraris, menyusuri tebing sungai Tengedwatu, hingga menetap di kawasan subur Kaima yang sangat cocok untuk perkebunan kelapa dan pala.",
      transSulawesi: "Sejarah infrastruktur mencatat pada masa Hukum Tua Wangke Pangemanan (1817-1850) diresmikan jalan raya penghubung Manado - Kema pada tahun 1820 yang melintasi wilayah desa.",
      linimasa: [
        "Tahun 1525: Rombongan Dotu Lengkong Wulur tiba di wilayah berawa Keléwér.",
        "Tahun 1546: Berpindah ke tebing sungai Tengedwatu mencari lokasi bebas malaria.",
        "Tahun 1775: Permufakatan para tua-tua meresmikan Wanua Kaima dipimpin Ukung Tu'a Wuaten Pangemanan.",
        "Abad ke-19: Masuknya misionaris Kristen mengawali transisi tradisi penguburan dari situs Waruga ke makam modern."
      ]
    },
    komoditas: {
      kelapa: "Penanaman kelapa rakyat mulai dianjurkan secara meluas sejak tahun 1888 oleh Hukum Tua Kemby Zakarias Pangemanan.",
      cengkeh: "Perkebunan kelapa dikombinasikan dengan perkebunan cengkih dan pala di areal utara serta selatan desa.",
      palawija: "Pengenalan bibit unggul buah-buahan seperti mangga cekalang, sawo, kedondong, karet, kopi, dan kayu jati yang dibawa oleh Hukum Tua Ibrahim Talete dari Jawa pada tahun 1855.",
      peranOrganisasi: "Pemerintahan adat dan tokoh masyarakat (musyawarah para tua-tua) berperan aktif membagi zona perkebunan dan pertanian sawah basah untuk ketahanan pangan.",
      daftarKomoditas: ["Kelapa", "Pala", "Padi Sawah", "Cengkeh", "Buah-buahan (Mangga, Sawo)", "Kayu Jati"]
    },
    budaya: {
      mapalus: "Prinsip kebersamaan dan musyawarah adat yang kuat dalam pengambilan keputusan penting kemasyarakatan.",
      pengucapanSyukur: "Tradisi tahunan syukuran hasil panen (Thanksgiving) dan toleransi keagamaan yang tinggi menjunjung nilai-nilai keimanan warga.",
      kesenian: "Kelestarian situs cagar budaya makam batu kuno Minahasa (Waruga). Tradisi lisan sejarah nenek moyang diwariskan secara turun-temurun.",
      nilaiAdat: ["Musyawarah Adat", "Pengucapan Syukur", "Cagar Budaya Waruga", "Toleransi Keagamaan"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan historis berupa serangan penyakit malaria, serta tantangan modern dalam menjaga integritas situs cagar budaya Waruga dari kerusakan lingkungan.",
      digitalisasi: "Sejarah mencatat inovasi administrasi sejak tahun 1901 di mana Hukum Tua Josephus Nelwan merintis pemilihan kepala desa demokratis pertama menggunakan kertas suara bertuliskan nama calon.",
      inovasiUmkm: "Penerapan sistem irigasi sawah basah modern dan agrowisata berbasis situs cagar budaya sejarah leluhur Tonsea.",
      programKerja: ["Teknologi Sawah Irigasi Kaki Gunung Klabat", "Sertifikasi dan Penataan Cagar Budaya Waruga", "Pemilihan Hukum Tua Demokratis", "Pengembangan Kebun Hortikultura Buah Introduksi"]
    }
  },
  {
    slug: "karegesan",
    name: "Karegesan",
    tagline: "Desa Agraris yang Produktif, Berbudaya, dan Berdaya Saing",
    sejarah: {
      asalNama: "Awalnya pemukiman ini dikenal dengan nama Kaweruan Wangko. Seiring waktu berubah menjadi Karegesan yang memiliki arti harfiah 'tempat yang berangin', karena kondisi geografis desa yang terbuka dan sering ditiup angin kencang.",
      topografi: "Desa Karegesan terletak di kaki lereng Gunung Klabat bagian timur dengan tanah pertanian subur yang menjadi penopang utama ekonomi masyarakat.",
      transSulawesi: "Akses logistik yang lancar menghubungkan hasil panen Karegesan langsung ke pasar regional terdekat seperti Kauditan, Airmadidi, dan Kota Manado.",
      linimasa: [
        "Masa Awal: Penduduk murni bergantung pada hasil pertanian mentah (padi dan kelapa).",
        "Perkembangan: Mulai membudidayakan pala dan kenari secara luas di sekitar pemukiman.",
        "Era Hilirisasi: Tumbuhnya industri rumah tangga lokal pengolahan manisan pala dan sirup pala khas Karegesan."
      ]
    },
    komoditas: {
      kelapa: "Tanaman kelapa rakyat yang luas dan dapat dipanen sepanjang tahun guna memasok industri kopra.",
      cengkeh: "Ditanam di dataran tinggi lereng Klabat sebagai komoditas emas tahunan warga.",
      palawija: "Budidaya tanaman pala, kenari, jagung, dan padi sawah. Pala adalah komoditas dengan nilai ekonomi tertinggi di desa ini.",
      peranOrganisasi: "Kelompok Tani (Poktan) berperan sebagai wadah berbagi informasi pupuk, teknik budidaya cengkih/pala, serta mempererat kerjasama antarpetani.",
      daftarKomoditas: ["Pala", "Kelapa", "Kenari (Halua Kenari)", "Jagung", "Padi"]
    },
    budaya: {
      mapalus: "Gotong royong Mapalus diterapkan dalam pembersihan kebun pala secara bergiliran serta saling membantu saat pelaksanaan hajatan sosial warga.",
      pengucapanSyukur: "Tradisi ibadah syukuran hasil panen komoditas perkebunan tahunan sebagai sarana mempererat kerukunan antarwarga.",
      kesenian: "Pelestarian kesenian daerah seperti alat musik Kolintang, musik bambu, tari Kabasaran, serta tarian adat Minahasa lainnya.",
      nilaiAdat: ["Mapalus", "Ibadah Syukuran Hasil Bumi", "Musik Kolintang", "Musik Bambu", "Seni Tari Daerah"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa fluktuasi harga cengkih dan pala di pasar, perubahan cuaca ekstrem yang mengganggu penjemuran, serta berkurangnya minat generasi muda di sektor agraris.",
      digitalisasi: "Pemanfaatan media sosial oleh UMKM lokal untuk mempromosikan produk olahan pangan khas Karegesan secara mandiri.",
      inovasiUmkm: "Hilirisasi buah pala menjadi sirup pala manis, manisan buah pala kering, serta pembuatan kuliner halua kenari khas Minahasa.",
      programKerja: ["Hilirisasi Olahan Buah Pala UMKM", "Pemasaran Produk Desa via Media Sosial", "Rintisan Agrowisata Kebun Pala Rakyat", "Penyuluhan Petani Muda Karegesan"]
    }
  },
  {
    slug: "kauditan-1",
    name: "Kauditan I",
    tagline: "Bersatu, Bekerja, Maju Bersama Kauditan I",
    sejarah: {
      asalNama: "Kauditan merupakan nama desa keenam setelah sebelumnya mengalami perpindahan pemukiman (Tuwaa, Matani, Karondoran, Kawangkoan, Temboan). Diambil dari bahasa Tonsea 'Ma-Udit' atau 'Maudit-uditan' yang berarti bersatu dan berusaha sungguh-sungguh.",
      topografi: "Berperan sebagai Ibu Kota Kecamatan Kauditan. Berada di ketinggian ±400 mdpl kaki Gunung Klabat dengan tanah subur dari sedimentasi vulkanik tuff lapili dan aluvial.",
      transSulawesi: "Dilintasi secara langsung oleh jalan nasional Trans Manado-Bitung, memberikan aksesibilitas logistik yang sangat tinggi bagi perdagangan desa.",
      linimasa: [
        "Tahun 1645: Pemukiman awal di Tuwaa dilanda wabah sampar parah, memaksa leluhur berpindah lokasi.",
        "Abad 17-20: Bergantung sepenuhnya pada pertanian tradisional (padi, kelapa kopra, cengkeh).",
        "Era Modern: Struktur mata pencaharian bergeser ke sektor jasa, perdagangan, UMKM, logistik, dan ASN."
      ]
    },
    komoditas: {
      kelapa: "Kelapa diolah tradisional menjadi kopra, kelapa parut, serta minyak kelapa kampung murni (klentik) bernilai jual tinggi.",
      cengkeh: "Panen tahunan cengkih terjadi pada bulan Juli - September, menjadi motor ekonomi musiman warga.",
      palawija: "Tanaman pangan padi sawah/ladang, jagung hibrida, pisang, pepaya California, langsat, durian, dan sayuran umbi.",
      peranOrganisasi: "Kelompok Tani aktif mengorganisasi bantuan pupuk, bibit, dan penyuluhan pertanian. BUMDes memfasilitasi permodalan dan membantu mempromosikan produk lokal.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Padi Sawah", "Jagung", "Pisang (Keripik Pisang)", "Pepaya", "Langsat & Durian"]
    },
    budaya: {
      mapalus: "Gotong royong Mapalus (arisan tenaga kerja tanpa upah) dan 'Sumembong' (saling menolong sukarela tanpa pamrih saat kedukaan, pernikahan, atau musibah).",
      pengucapanSyukur: "Tradisi thanksgiving Minahasa yang berakar dari ritual agraris kuno 'Mupuk Im Bene' (syukuran panen padi) kepada Sang Pencipta.",
      kesenian: "Musik Kolintang, musik tiup bambu, serta Tari Maengket yang menggambarkan siklus bertanam padi hingga syukuran rumah baru.",
      nilaiAdat: ["Mapalus", "Sumembong", "Tari Maengket", "Musik Kolintang & Musik Bambu", "Syukuran Mupuk Im Bene"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa anomali pergeseran musim hujan/kemarau, ketidakstabilan harga kopra di tingkat pabrik, serta kelangkaan tenaga kerja muda.",
      digitalisasi: "Mengadopsi konsep 'Digital Village' dengan pemanfaatan media sosial (Facebook Marketplace, Instagram) untuk memperluas jangkauan pasar hasil tani.",
      inovasiUmkm: "Pengolahan minyak kelapa kampung premium, kerajinan anyaman bambu khas, serta pembuatan pupuk organik mandiri kelompok tani.",
      programKerja: ["Digital Village System Administrasi & Promosi", "Pemasaran Hasil Tani Online Tanpa Tengkulak", "Pengolahan Pupuk Organik Komunal", "Agrowisata Sawah Gunung Klabat"]
    }
  },
  {
    slug: "kauditan-2",
    name: "Kauditan II",
    tagline: "Desa Agraris, Berbudaya, dan Berdaya Saing",
    sejarah: {
      asalNama: "Dimekarkan secara administratif dari Desa Kauditan induk guna mengoptimalkan pelayanan publik. Secara etimologi lokal erat dengan pembagian wilayah adat Taranak sub-etnis Tonsea.",
      topografi: "Berada di dataran bergelombang dengan tanah vulkanis subur di bawah lereng Gunung Klabat bagian timur.",
      transSulawesi: "Diapit oleh jalur Trans Manado-Bitung, memberikan keunggulan aksesibilitas distribusi pertanian ke pelabuhan Bitung.",
      linimasa: [
        "Era Kolonial: Dikenal sebagai kawasan subur penghasil kelapa dan rempah cengkih.",
        "Era Orde Baru: Bergeser dari pertanian subsisten ke arah perkebunan komersial skala besar.",
        "Era Modern: Lahan pertanian mulai terkonversi menjadi pemukiman warga, namun identitas penghasil kopi & palawija bertahan."
      ]
    },
    komoditas: {
      kelapa: "Kawasan perkebunan kelapa produktif, dengan pengolahan kopra menggunakan fufu (pengasapan tradisional) langsung di kebun.",
      cengkeh: "Panen raya cengkih tahunan yang sangat dipengaruhi oleh intensitas musim kemarau.",
      palawija: "Tanaman palawija jagung hibrida, singkong (ubi kayu), pisang goroho, serta kopi lokal.",
      peranOrganisasi: "Kelompok Tani aktif memfasilitasi akses pupuk bersubsidi dan bantuan bibit. BUMDes dalam tahap pengembangan untuk menyerap hasil bumi warga.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Jagung", "Singkong (Ubi Kayu)", "Pisang", "Minyak Kelapa Kampung"]
    },
    budaya: {
      mapalus: "Gotong royong Mapalus diterapkan untuk membersihkan kebun, memanen cengkih bersama, serta memelihara fasilitas pemukiman.",
      pengucapanSyukur: "Tradisi thanksgiving tahunan dengan memasak kuliner adat (nasi jaha, dodol) dan open house menjamu kerabat luar daerah.",
      kesenian: "Musik Kolintang, musik tiup bambu, tari Kabasaran, serta pemeliharaan alat tradisional penunjang tani seperti Sui dan Patola.",
      nilaiAdat: ["Mapalus", "Pengucapan Syukur", "Musik Kolintang & Musik Bambu", "Alat Tradisional Sui & Patola", "Wisata Proses Kopra Fufu"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa fluktuasi harga kopra dan cengkeh dunia, kelangkaan pupuk bersubsidi, dan kecenderungan pemuda memilih profesi non-agraris di kota.",
      digitalisasi: "Pemanfaatan media sosial (Facebook & WhatsApp Group) untuk transaksi jual-beli hasil kebun lokal secara mandiri.",
      inovasiUmkm: "Inovasi pengemasan produk turunan kelapa dan singkong secara higienis agar dapat menjangkau pasar ritel modern.",
      programKerja: ["E-Commerce Produk Olahan Pertanian", "Peningkatan Peran BUMDes Penyerap Hasil Tani", "Penyuluhan Manajemen Pupuk Organik", "Edukasi Agrowisata Kopra Tradisional"]
    }
  },
  {
    slug: "kawiley",
    name: "Kawiley",
    tagline: "Desa Agraris Produktif, Berbudaya, dan Berdaya Saing",
    sejarah: {
      asalNama: "Nama 'Kawiley' berakar dari bahasa Tonsea, diambil dari nama jenis pepohonan, keunikan kondisi alam, atau nama tokoh leluhur (Taranak) pembuka pemukiman purba di kawasan tersebut.",
      topografi: "Terletak dekat jalan poros Manado-Bitung dengan kontur tanah landai hingga bergelombang. Memiliki tanah vulkanis subur dan cadangan air tanah melimpah.",
      transSulawesi: "Keberadaan jalur Trans Manado-Bitung memudahkan distribusi hasil perikanan dan perkebunan menuju pasar induk kota terdekat.",
      linimasa: [
        "Masa Pra-Kolonial: Pemukiman kecil dengan sistem pertanian subsisten ladang tradisional.",
        "Era Kolonial Belanda: Mulai bertransformasi menjadi kawasan perkebunan kelapa menetap.",
        "Era Modern: Berada di dekat koridor industri logistik namun tetap tangguh mempertahankan identitas agrarisnya."
      ]
    },
    komoditas: {
      kelapa: "Kopra kelapa dipanen setiap 3-4 bulan sekali, dikeringkan melalui metode pengasapan tradisional (fufu) di kebun rakyat.",
      cengkeh: "Budidaya cengkih di dataran tinggi yang pemetikan serta penjemurannya sangat bergantung pada cuaca kemarau.",
      palawija: "Tanaman jagung hibrida, pisang Goroho, singkong, cabai/rica, serta budidaya ikan air tawar di kolam warga.",
      peranOrganisasi: "Kelompok Tani menyalurkan bibit dan pupuk. BUMDes memfasilitasi ketersediaan saprotan agar petani mendapat harga wajar di bawah pasar.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Jagung", "Pisang (Goroho)", "Singkong", "Sayuran", "Cabai/Rica"]
    },
    budaya: {
      mapalus: "Gotong royong sosial Mapalus yang kuat dalam kegiatan duka cita (kematian), pesta pernikahan warga, serta pembukaan lahan pertanian.",
      pengucapanSyukur: "Tradisi thanksgiving tahunan menyajikan hidangan khas Minahasa dari hasil panen kebun sendiri secara kekeluargaan.",
      kesenian: "Musik Kolintang, musik bambu, tari Kabasaran, serta alat adat Sui (pengupas kelapa) dan Patola (parang khas Tonsea).",
      nilaiAdat: ["Mapalus", "Pengucapan Syukur", "Musik Kolintang & Musik Bambu", "Tarian Kabasaran", "Alat Tradisional Sui & Patola", "Agrowisata Panen & Fufu Kopra"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa cuaca basah ekstrem yang menghambat penjemuran cengkih/kopra, fluktuasi harga pupuk, serta berkurangnya pemuda desa yang berminat bertani.",
      digitalisasi: "Petani menggunakan smartphone untuk memantau harga komoditas pasar terkini dan berdagang sayur/ikan via WhatsApp & Facebook.",
      inovasiUmkm: "Pengembangan sistem pemesanan sayur organik pre-order (PO) online, serta pembuatan produk kerajinan anyaman kelapa.",
      programKerja: ["Pemasaran Online Produk UMKM & Perikanan", "Sistem Database Digital Informasi Harga", "Kemitraan Saprotan Murah BUMDes", "Paket Agrowisata Edukasi Kebun Kelapa"]
    }
  },
  {
    slug: "lembean",
    name: "Lembean",
    tagline: "Desa Agraris, Pusat Musik Kolintang, Bangkit Bersama",
    sejarah: {
      asalNama: "Dahulu pemukiman ini dikenal dengan nama Wanua Dembean. Sekitar tahun 1955 secara resmi berganti nama menjadi Desa Lembean yang disahkan oleh pemerintah daerah.",
      topografi: "Terletak di dataran berbukit sejuk dengan lahan pertanian subur seluas ±1.200 Ha yang mencakup area perkebunan kelapa, persawahan, dan pemukiman.",
      transSulawesi: "Berjarak ±5 km dari pusat kecamatan Kauditan dan ±22 km dari Airmadidi, terkoneksi dengan jalur transportasi darat yang memadai.",
      linimasa: [
        "Masa Awal: Penduduk menggantungkan hidup sepenuhnya pada pertanian ladang kelapa.",
        "Tahun 1950-an: Ditetapkan secara resmi menjadi Desa Lembean, bertepatan dengan pembangunan RS Hermana Lembean.",
        "Era Budaya: Dikenal secara nasional sebagai salah satu pusat pelestarian dan industri pembuatan musik Kolintang kayu di Minahasa."
      ]
    },
    komoditas: {
      kelapa: "Hasil kelapa diolah terpadu menjadi kopra, santan kelapa, minyak goreng, gula kelapa, dan anyaman kerajinan batok.",
      cengkeh: "Tanaman cengkih dan pala tumbuh subur sebagai penopang ekonomi perkebunan utama warga.",
      palawija: "Pemasok utama buah pepaya California ke pasar tradisional dan modern di Manado, Bitung, hingga luar daerah Sulawesi Utara.",
      peranOrganisasi: "Kelompok Tani bekerja sama melakukan peremajaan pohon cengkih tua dan melatih pemuda menerapkan teknik pertanian organik.",
      daftarKomoditas: ["Pepaya", "Kelapa (Kopra, Gula Kelapa)", "Pala (Minyak Atsiri/Pala Khas)", "Jagung", "Hortikultura (Cabai, Tomat, Sayuran)"]
    },
    budaya: {
      mapalus: "Solidaritas Mapalus menjadi pondasi sosial masyarakat dalam kerja bakti desa dan tolong-menolong duka kematian warga.",
      pengucapanSyukur: "Ibadah syukur tahunan atas kelimpahan buah pepaya, cengkih, dan pala yang dirayakan bersama seluruh warga.",
      kesenian: "Pusat kesenian Kolintang. Grup Kolintang legendaris 'Kadoodan' berasal dari Lembean dan berprestasi hingga tingkat nasional.",
      nilaiAdat: ["Musik Kolintang (Grup Kadoodan)", "Tari Maengket", "Mapalus", "Ibadah Syukuran Hasil Panen"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa kelangkaan tenaga kerja tani akibat urbanisasi generasi muda, serta kebutuhan modernisasi alat pertanian hortikultura.",
      digitalisasi: "Pemanfaatan website desa, media sosial, dan e-commerce untuk mempromosikan produk anyaman kayu dan musik Kolintang khas Lembean.",
      inovasiUmkm: "Pengolahan manisan pepaya kering, dodol pepaya, minyak atsiri pala, minyak VCO kelapa, serta pembuatan kerajinan alat musik Kolintang kayu.",
      programKerja: ["Sanggar Pelatihan Musik Kolintang Terpadu", "Agrowisata Edukasi Kebun Pepaya California", "Hilirisasi Olahan Pepaya & Kelapa UMKM", "Digital Marketing Kerajinan Musik Kolintang"]
    }
  },
  {
    slug: "paslaten",
    name: "Paslaten",
    tagline: "Bersatu Membangun Desa, Maju Bersama Masyarakat",
    sejarah: {
      asalNama: "Kata 'Paslaten' dalam adat Minahasa melambangkan tempat pemurnian, penyaringan, atau penyucian, menggambarkan komitmen leluhur untuk membangun komunitas sosial yang rukun dan bersih.",
      topografi: "Memiliki luas wilayah ±1.406 Ha (14,06 Km²) di perbukitan lereng Klabat. Tanah vulkanis subur yang sangat ideal untuk tanaman pangan dan perkebunan aren liar.",
      transSulawesi: "Akses jalan tani dikembangkan secara intensif untuk menunjang mobilisasi hasil panen dari 6 wilayah Jaga (Dusun).",
      linimasa: [
        "Masa Awal: Pemukiman agraris kecil penghasil kelapa dan cengkih di pedalaman Kauditan.",
        "Tahun 2024: Berkembang menjadi desa definitif mandiri dengan populasi mencapai 2.302 Jiwa.",
        "Era Digital: Peluncuran website pelayanan publik digital terintegrasi untuk seluruh warga desa."
      ]
    },
    komoditas: {
      kelapa: "Kelapa rakyat dan pemanfaatan nira pohon enau (aren) liar untuk pembuatan gula aren murni cetak secara tradisional.",
      cengkeh: "Budidaya cengkih rakyat, pala, kopi robusta, dan perkebunan hortikultura sayuran.",
      palawija: "Tanaman jagung pipil, cabai rawit (rica), dan tomat di lahan pertanian darat.",
      peranOrganisasi: "Kelompok Tani aktif membagi pupuk bersubsidi dan berkoordinasi dalam pengadaan benih unggul cengkih untuk warga.",
      daftarKomoditas: ["Kelapa", "Cengkeh", "Pala", "Kopi", "Tanaman Hortikultura"]
    },
    budaya: {
      mapalus: "Masyarakat memiliki solidaritas gotong royong Mapalus yang solid, menjadi kekuatan utama pembangunan prasarana desa secara swadaya.",
      pengucapanSyukur: "Ibadah syukur komunal tahunan atas panen cengkih dan aren yang diisi dengan pesta adat makan bersama.",
      kesenian: "Pelestarian kesenian tari adat Tonsea, tarian perang Kabasaran, serta kerukunan kehidupan umat beragama.",
      nilaiAdat: ["Gotong Royong (Mapalus)", "Kerukunan Masyarakat", "Kekeluargaan Adat Tonsea"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan dalam memelihara kelestarian pohon enau (aren) liar dari penebangan liar, serta keterbatasan akses permodalan bagi petani kecil.",
      digitalisasi: "Penerapan sistem pelayanan digital terpadu melalui website resmi **paslaten.online** (layanan surat pengantar mandiri, data statistik, galeri potensi desa, dan pengaduan warga).",
      inovasiUmkm: "Standardisasi produk gula aren cetak lokal dan gula semut organik siap ekspor yang diproduksi secara higienis oleh UMKM desa.",
      programKerja: ["Website Layanan Surat Pengantar paslaten.online", "Sistem Pengaduan Masyarakat Digital", "Peningkatan Prasarana Jalan Tani Desa", "Modernisasi Data Statistik Kependudukan"]
    }
  },
  {
    slug: "treman",
    name: "Treman",
    tagline: "Rondoren Wo Wangunen Um Banua",
    sejarah: {
      asalNama: "Memiliki kekerabatan sejarah erat dengan Kaima. Didirikan tahun 1525 oleh rombongan asal Walantakan dipimpin Dotu Lengkong menyusuri kali Sawangen. HUT Desa ditetapkan tanggal 31 Maret 1685 di Tongkeina (Minawanua).",
      topografi: "Terletak membujur dari barat ke timur di lereng Gunung Klabat dengan kemiringan 5° pada ketinggian 265 mdpl. Suhu udara sejuk berkisar 22-23°C.",
      transSulawesi: "Aksesibilitas darat memadai menghubungkan perkebunan Treman dengan wilayah Kaima di sebelah barat dan Kawiley di sebelah timur.",
      linimasa: [
        "Tahun 1525: Rombongan tiba pertama kali di Kelewer namun tidak mendapat restu adat Opo Empung.",
        "Tahun 1561: Menetap di Tongkeina yang dinamakan Tareuman ('tempat permohonan dikabulkan').",
        "Tahun 1685: Pembentukan pemerintahan militer pertama dipimpin Hulubalang Tonaas.",
        "Tahun 1698: Pemilihan Hukum Tua secara resmi pertama kali dengan terpilihnya Dotu Lengkong."
      ]
    },
    komoditas: {
      kelapa: "Lahan perkebunan kelapa mencakup areal luas, dikelola terstruktur oleh kelompok tani.",
      cengkeh: "Budidaya cengkih dan pala di bawah naungan kelompok tani tanaman keras di lereng-lereng Klabat.",
      palawija: "Tanaman jagung, cabai rawit, tomat, padi sawah di dataran rendah, serta buah-buahan musiman.",
      peranOrganisasi: "Kelompok tani dibagi spesifik berdasarkan bidang (tanaman keras, palawija, sawah, buah) untuk menjamin produktivitas hasil panen.",
      daftarKomoditas: ["Kelapa", "Pala", "Cengkih", "Jagung", "Cabai & Tomat", "Padi Sawah", "Buah-buahan"]
    },
    budaya: {
      mapalus: "Budaya gotong royong Mapalus tercermin kuat dalam moto desa 'Rondoren Wo Wangunen Um Banua' (Saling Menjaga dan Membangun Negeri).",
      pengucapanSyukur: "Ritual syukur panen kuno 'Mupuk Im Bene' diwariskan dalam bentuk ibadah gereja dan makan bersama adat tahunan.",
      kesenian: "Situs kubur batu kuno waruga Dotu Lengkong, bekas benteng pertahanan tebing, serta kerajinan bambu unik berduri melingkar.",
      nilaiAdat: ["Rondoren Wo Wangunen Um Banua", "Kuburan Waruga Dotu Lengkong", "Ritual Adat Opo Empung", "Gotong Royong Pertanian Kelompok Tani"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan dalam memulihkan 7% lahan kritis/tandus dan memanfaatkan 14% padang ilalang luas agar bernilai guna bagi peternakan.",
      digitalisasi: "Pengembangan sistem database manajemen kelompok tani terpadu berdasarkan pembagian sektor komoditas.",
      inovasiUmkm: "Pengembangan paket wisata pendakian Gunung Klabat via basecamp Treman serta agrowisata sejarah situs waruga Dotu Lengkong.",
      programKerja: ["Agrowisata Sejarah Situs Waruga Dotu Lengkong", "Pengelolaan Lahan Kritis Hijauan Pakan Ternak", "Sistem Informasi Kelompok Tani Treman", "Pengembangan Jalur Ekologis Lereng Gunung Klabat"]
    }
  },
  {
    slug: "tumaluntung",
    name: "Tumaluntung",
    tagline: "Desa Kaya Sejarah, Budaya, dan Alam",
    sejarah: {
      asalNama: "Didirikan sekitar tahun 1665 oleh rombongan perpindahan dipimpin Dotu Rotti dan istrinya Karagian. Menetap di dekat air terjun yang berbunyi 'teng-teng-teng' (Matalenteng). Nama ini kemudian diubah menjadi Mataluntung, dan pada 1725 berganti menjadi Tumaluntung.",
      topografi: "Memiliki luas wilayah mencapai 24 km² (2.400 Ha) terletak tepat di lereng bawah Gunung Klabat, gunung tertinggi di Pulau Sulawesi.",
      transSulawesi: "Lokasi strategis di sebelah barat berbatasan langsung dengan koridor kota Airmadidi, mempermudah akses logistik pergudangan.",
      linimasa: [
        "Tahun 1665: Rombongan Dotu Rotti dan Karagian berpindah dari Kadimbatu ke utara.",
        "Tahun 1668: Menemukan mata air legendaris Doud Tumetenden dipandu burung Celepuk.",
        "Tahun 1725: Nama Mataluntung secara resmi diubah menjadi Tumaluntung.",
        "Era Modern: Menjadi salah satu kawasan industri pergudangan dan pemukiman terbesar di Kauditan."
      ]
    },
    komoditas: {
      kelapa: "Kawasan kelapa produktif di zona hijau lereng Klabat yang mensuplai bahan baku kopra industri.",
      cengkeh: "Budidaya cengkih dan pala di areal dataran tinggi perkebunan desa.",
      palawija: "Pertanian padi sawah basah, jagung pipil hibrida, serta sayuran hortikultura dataran tinggi.",
      peranOrganisasi: "Kelompok Tani bekerja sama mengelola pintu air irigasi persawahan kaki lereng Gunung Klabat bersama dinas terkait.",
      daftarKomoditas: ["Kelapa", "Cengkeh", "Padi Sawah", "Jagung", "Sayur-sayuran"]
    },
    budaya: {
      mapalus: "Kerjasama sosial gotong royong warga terpelihara baik dalam pengelolaan mata air dan situs budaya bersama.",
      pengucapanSyukur: "Syukuran panen tahunan dirayakan meriah bertepatan dengan tradisi adat leluhur Minahasa.",
      kesenian: "Situs waruga kuno (makam batu dipahat dengan motif profesi leluhur, jasad didudukkan seperti posisi bayi dalam kandungan). Legenda mata air Doud Tumetenden dan mitologi burung Celepuk.",
      nilaiAdat: ["Situs Waruga Tumaluntung", "Legenda Ular Hitam Teken ni Opo", "Legenda Mata Air Doud Tumetenden", "Kesenian Budaya Minahasa"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan dalam mengamankan cagar budaya Waruga dari pencurian barang antik di dalamnya, serta menjaga kebersihan mata air Doud Tumetenden dari limbah.",
      digitalisasi: "Adopsi pemasaran digital untuk kerajinan replika waruga batu pahat dan promosi paket agrowisata budaya.",
      inovasiUmkm: "Pembuatan kerajinan replika batu pahat waruga, arang briket kelapa, serta pengelolaan wisata air terjun Matalenteng.",
      programKerja: ["Revitalisasi Cagar Budaya Waruga Tumaluntung", "Perlindungan Kawasan Mata Air Doud Tumetenden", "Pemasaran Briket Kerajinan Batu Pahat Replika Waruga", "Agrowisata Air Terjun Matalenteng"]
    }
  },
  {
    slug: "watudambo",
    name: "Watudambo",
    tagline: "Desa Agraris Berbudaya, Bangkit Bersama Menuju Masa Depan",
    sejarah: {
      asalNama: "Nama 'Watudambo' berasal dari bahasa daerah Tonsea yang berarti 'Batu Panjang', merujuk pada situs batu besar berukuran panjang ±9 m, lebar 6 m, dan tinggi 4 m yang berada di sebelah barat laut desa.",
      topografi: "Wilayah agraris dengan kombinasi topografi perbukitan dan dataran rendah subur yang ideal untuk perkebunan pala dan kelapa.",
      transSulawesi: "Terletak sangat strategis di jalur utama Trans Manado-Bitung (Km 28), menjadi gerbang perbatasan penting wilayah.",
      linimasa: [
        "Tahun 1865: Petani dari Desa Treman mulai membuka lahan pertanian baru yang mulanya disebut 'Untepan'.",
        "Tahun 1888: Kesatuan masyarakat tani terbentuk resmi dengan diangkatnya Kepala Jaga Hermanus Koloay.",
        "Tahun 2008: Pemekaran wilayah secara administratif melahirkan Desa Watudambo II di sebelah utara."
      ]
    },
    komoditas: {
      kelapa: "Kelapa diolah rakyat menjadi kopra melalui pengasapan dan penjemuran, sebagian dibuat minyak kelapa murni.",
      cengkeh: "Tanaman pala (dipisahkan biji dan fuli lalu dijemur) serta cengkih menjadi andalan perkebunan utama.",
      palawija: "Jagung pipil pakan ternak dipasok ke sektor industri peternakan ayam petelur/daging di Minahasa.",
      peranOrganisasi: "Kelompok Tani (Poktan) berperan menyediakan alat pascapanen. BUMDes bertindak sebagai off-taker menyerap hasil tani agar harga jual warga stabil.",
      daftarKomoditas: ["Jagung (Pakan Ternak)", "Pala (Fuli)", "Kopra (Kelapa)", "Minyak Kelapa", "Pala Bubuk", "Tepung Jagung"]
    },
    budaya: {
      mapalus: "Tradisi gotong royong Mapalus diwariskan turun-temurun sejak pembukaan lahan hutan Untepan tahun 1865.",
      pengucapanSyukur: "Tradisi syukur hasil bumi tahunan dengan menggelar ibadah syukur gereja dan pesta kuliner bagi tamu lintas daerah.",
      kesenian: "Seni tarian perang Kabasaran, kesenian musik Kolintang, serta musik tiup bambu tradisional.",
      nilaiAdat: ["Mapalus", "Pengucapan Syukur", "Tari Kabasaran", "Musik Kolintang", "Agrowisata Budaya Minahasa"]
    },
    inovasi: {
      alihFungsiLahan: "Tantangan berupa fluktuasi harga cengkih/pala di tingkat eksportir, ketergantungan pada tengkulak, serta minimnya minat pemuda menggeluti dunia pertanian.",
      digitalisasi: "Peluncuran website resmi desa sebagai media transparansi informasi publik dan promosi produk kerajinan desa.",
      inovasiUmkm: "Pengolahan tepung jagung fermentasi untuk pakan ternak alternatif, pembuatan pala bubuk bumbu instan, dan kerajinan kelapa.",
      programKerja: ["Smart Farming Pelatihan Petani Muda", "UMKM Pengolahan Tepung Jagung & Pala Bubuk", "Pengembangan Website Desa & E-Commerce", "Penguatan BUMDes sebagai Off-Taker Hasil Tani"]
    }
  },
  {
    slug: "watudambo-2",
    name: "Watudambo 2",
    tagline: "Desa Agraris Transisi, Produktif, dan Berdaya Saing",
    sejarah: {
      asalNama: "Berasal dari legenda 'Watu Dambo' yang merujuk pada batu besar yang berhimpit atau bertumpuk, melambangkan kesepakatan damai adat antara suku-suku Tonsea (Taranak) di masa lampau agar tidak terjadi konflik perebutan lahan.",
      topografi: "Desa Watudambo 2 berada di daerah perbukitan sedang kaki Gunung Klabat bagian timur laut. Memiliki tanah vulkanik hitam yang subur dan dialiri sungai-sungai kecil berair jernih.",
      transSulawesi: "Dilewati oleh poros jalan arteri utama Trans Sulawesi yang menghubungkan Kota Manado dan Bitung, mempermudah distribusi hasil tani ke kota.",
      linimasa: [
        "Masa Kolonial: Wilayah perkebunan kelapa rakyat murni (Kopra).",
        "Tahun 1970-an: Pembangunan jalan pos Trans-Minahasa membuka isolasi geografi.",
        "Akhir Abad ke-20: Pemekaran desa secara administratif dari Watudambo induk.",
        "Era Modern: Mulai bertransformasi menjadi desa agraris transisi dengan hadirnya industri pengolahan menengah, peternakan modern, serta perumahan komersial."
      ]
    },
    komoditas: {
      kelapa: "Perkebunan kelapa rakyat mencakup hampir 60% wilayah hijau desa. Kelapa diolah menjadi kopra jemur matahari, arang tempurung kelapa, serta minyak kelapa kasar (CNO) skala rumahan.",
      cengkeh: "Menjadi komoditas primadona tahunan. Tanaman cengkeh ditanam di lereng-lereng perbukitan dan menjadi penyumbang pendapatan terbesar petani saat panen raya tiba.",
      palawija: "Petani aktif menanam jagung pipil hibrida, pepaya California, dan sayuran. Desa ini terkenal sebagai pemasok utama Pepaya California berkualitas tinggi ke minimarket modern di wilayah Sulawesi Utara.",
      peranOrganisasi: "Kelompok Tani (Poktan) berperan sebagai penyalur pupuk bersubsidi dan penyuluh teknologi irigasi tetes. Sementara Badan Usaha Milik Desa (BUMDES) bertindak sebagai distributor untuk membeli pepaya California dan komoditas warga agar tidak terjebak harga tengkulak.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Pepaya California", "Jagung Hibrida", "Peternakan Babi & Sapi"]
    },
    budaya: {
      mapalus: "Tradisi gotong royong Minahasa 'Mapalus' masih dipraktikkan secara aktif, baik berupa pengerjaan kebun bersama secara bergiliran, bantuan sosial kematian (dana duka), hingga pembangunan fasilitas umum dan rumah ibadah.",
      pengucapanSyukur: "Tradisi tahunan khas Minahasa (Thanksgiving lokal) yang digelar setelah musim panen. Warga menyajikan makanan khas seperti dodol, nasi jaha dalam bambu bakar, serta sayur pangi untuk dinikmati bersama tamu dari luar wilayah secara gratis.",
      kesenian: "Pelestarian alat musik kayu Kolintang, tari adat Kabasaran sebagai bentuk penghormatan menyambut tamu, dan eksistensi kelompok musik tiup bambu tradisional 'Sui' atau 'Patola' yang diwariskan antargenerasi.",
      nilaiAdat: ["Mapalus (Gotong Royong)", "Kabasaran", "Musik Kolintang & Musik Bambu (Sui/Patola)", "Pengucapan Syukur"]
    },
    inovasi: {
      alihFungsiLahan: "Menghadapi tantangan berat akibat alih fungsi lahan kelapa dan cengkeh menjadi perumahan subsidi dan pergudangan industri logistik, imbas dari dibukanya gerbang Tol Manado-Bitung yang berdekatan dengan desa.",
      digitalisasi: "Adopsi pemasaran digital melalui akun sosial media BUMDES dan pembentukan admin informasi desa berbasis WhatsApp Group per jaga (dusun) untuk mempermudah pelayanan administrasi surat pengantar.",
      inovasiUmkm: "Pengolahan serat pisang Abaka menjadi kerajinan anyaman bernilai jual tinggi, pembuatan arang briket kelapa siap ekspor, serta pembangunan instalasi reaktor biogas komunal dari limbah kotoran ternak peternakan warga untuk energi memasak alternatif gratis.",
      programKerja: ["Reaktor Biogas Komunal", "Kerajinan Serat Abaka", "Pemasaran Produk BUMDES Digital", "Sistem Informasi Desa WhatsApp Jaga"]
    }
  }
];
