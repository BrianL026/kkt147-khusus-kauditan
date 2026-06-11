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
    slug: "watudambo-2",
    name: "Watudambo 2",
    tagline: "Desa Agraris Transisi, Produktif, dan Berdaya Saing",
    sejarah: {
      asalNama: "Berasal dari kata legenda 'Watu Dambo' yang merujuk pada batu besar yang berhimpit atau bertumpuk. Menurut tetua adat, batu bertumpuk ini berfungsi sebagai penanda kesepakatan damai adat antara suku-suku Tonsea (Taranak) di masa lampau agar tidak terjadi konflik perebutan lahan.",
      topografi: "Desa Watudambo 2 berada di daerah perbukitan sedang kaki Gunung Klabat bagian timur laut. Memiliki tanah vulkanik hitam yang subur, berhawa sejuk, serta dialiri sungai-sungai kecil berair jernih yang bersumber langsung dari mata air pegunungan.",
      transSulawesi: "Dilewati oleh poros jalan arteri utama Trans Sulawesi yang menghubungkan Kota Manado dan Bitung. Keberadaan jalur transporasi ini memicu percepatan pembangunan pemukiman, mempermudah distribusi hasil tani, sekaligus memicu pergeseran gaya hidup ke arah perdagangan modern.",
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
      palawija: "Petani aktif menanam jagung pipil hibrida dan ubi kayu. Selain itu, desa ini terkenal sebagai pemasok utama Pepaya California berkualitas tinggi ke minimarket modern di wilayah Sulawesi Utara.",
      peranOrganisasi: "Kelompok Tani (Poktan) berperan sebagai penyalur pupuk bersubsidi dan penyuluh teknologi irigasi tetes. Sementara Badan Usaha Milik Desa (BUMDES) bertindak sebagai distributor untuk membeli pepaya California dan komoditas warga agar tidak terjebak harga tengkulak.",
      daftarKomoditas: ["Kelapa (Kopra)", "Cengkeh", "Pepaya California", "Jagung Hibrida", "Peternakan Babi & Sapi"]
    },
    budaya: {
      mapalus: "Tradisi gotong royong Minahasa 'Mapalus' masih dipraktikkan secara aktif, baik berupa pengerjaan kebun bersama secara bergiliran, bantuan sosial kematian (dana duka), hingga pembangunan fasilitas umum dan rumah ibadah.",
      pengucapanSyukur: "Tradisi tahunan khas Minahasa (Thanksgiving lokal) yang digelar setelah musim panen. Warga menyajikan makanan khas seperti dodol, nasi jaha dalam bambu bakar, serta sayur pangi untuk dinikmati bersama tamu dari luar wilayah secara gratis.",
      kesenian: "Pelestarian alat musik kayu Kolintang, tari adat Kabasaran sebagai bentuk penghormatan menyambut tamu, dan eksistensi kelompok musik tiup bambu tradisional 'Sui' atau 'Patola' yang diwariskan antargenerasi.",
      nilaiAdat: ["Mapalus (Gotong Royong)", "Kabasaran", "Musik Kolintang & Tiup Bambu (Sui/Patola)", "Pengucapan Syukur"]
    },
    inovasi: {
      alihFungsiLahan: "Menghadapi tantangan berat akibat alih fungsi lahan kelapa dan cengkeh menjadi perumahan subsidi dan pergudangan industri logistik, imbas dari dibukanya gerbang Tol Manado-Bitung yang berdekatan dengan desa.",
      digitalisasi: "Adopsi pemasaran digital melalui akun sosial media BUMDES dan pembentukan admin informasi desa berbasis WhatsApp Group per jaga (dusun) untuk mempermudah pelayanan administrasi surat pengantar.",
      inovasiUmkm: "Pengolahan serat pisang Abaka menjadi kerajinan anyaman bernilai jual tinggi, pembuatan arang briket kelapa siap ekspor, serta pembangunan instalasi reaktor biogas komunal dari limbah kotoran ternak peternakan warga untuk energi memasak alternatif gratis.",
      programKerja: ["Reaktor Biogas Komunal", "Kerajinan Serat Abaka", "Pemasaran Produk BUMDES Digital", "Sistem Informasi Desa WhatsApp Jaga"]
    }
  },
  // Placeholders for the remaining 11 villages
  {
    slug: "desa-2",
    name: "Desa 2 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-3",
    name: "Desa 3 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-4",
    name: "Desa 4 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-5",
    name: "Desa 5 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-6",
    name: "Desa 6 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-7",
    name: "Desa 7 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-8",
    name: "Desa 8 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-9",
    name: "Desa 9 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-10",
    name: "Desa 10 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-11",
    name: "Desa 11 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  },
  {
    slug: "desa-12",
    name: "Desa 12 Placeholder",
    tagline: "Desa Unggul, Sejahtera, dan Berkelanjutan",
    sejarah: { asalNama: "", topografi: "", transSulawesi: "", linimasa: [] },
    komoditas: { kelapa: "", cengkeh: "", palawija: "", peranOrganisasi: "", daftarKomoditas: [] },
    budaya: { mapalus: "", pengucapanSyukur: "", kesenian: "", nilaiAdat: [] },
    inovasi: { alihFungsiLahan: "", digitalisasi: "", inovasiUmkm: "", programKerja: [] }
  }
];
