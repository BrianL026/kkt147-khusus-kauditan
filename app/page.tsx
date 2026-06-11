import React from "react";
import { villages } from "@/data/villages";
import VillageList from "@/components/VillageList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Ruler, Sprout, Landmark, Sparkles, Navigation } from "lucide-react";

export default function Home() {
  // Calculate aggregate stats
  const totalVillages = villages.length;
  const totalPopulation = 38420; // Estimasi total penduduk kecamatan
  const subdistrictArea = "95.3 km²"; // Typical total size for Kauditan

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Simple stylized emblem */}
            <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm shadow-emerald-500/20">
              K
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                PORTAL KAUDITAN
              </span>
              <span className="hidden sm:inline-block text-[10px] ml-2 font-semibold text-slate-400 uppercase tracking-widest">
                Minahasa Utara
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-slate-600 dark:text-slate-350">
            <a href="#profil" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Profil</a>
            <a href="#desa" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Daftar Desa</a>
            <a href="#peta" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Peta &amp; Geografis</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Glowing Gradients */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-slate-900 text-white">
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="h-3 w-3" />
            Website Profil Desa Terpadu
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Selamat Datang di Portal Resmi <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Kecamatan Kauditan</span>
          </h1>
          <p className="text-base md:text-xl text-slate-350 max-w-3xl mx-auto leading-relaxed">
            Menyajikan data profil, sejarah, potensi komoditas unggulan, serta sarana prasarana dari 12 desa mandiri di wilayah Kecamatan Kauditan, Kabupaten Minahasa Utara, Sulawesi Utara.
          </p>
          <div className="pt-4 flex justify-center gap-4">
            <a href="#desa" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-sm transition-all shadow-lg shadow-emerald-600/20 cursor-pointer">
              Jelajahi Desa
            </a>
            <a href="#profil" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-sm transition-all border border-slate-750 cursor-pointer">
              Profil Kecamatan
            </a>
          </div>
        </div>
      </section>

      {/* Aggregate Stats Section */}
      <section className="-translate-y-8 container max-w-7xl mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 shadow-md md:p-8">
          
          <div className="flex items-center gap-4 p-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-700 dark:text-emerald-400 shrink-0">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-450 uppercase font-semibold">Total Desa</div>
              <div className="text-3xl font-extrabold text-slate-855 dark:text-white mt-0.5">{totalVillages}</div>
              <div className="text-xs text-slate-400">Desa Definitif</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border-t sm:border-t-0 sm:border-x border-slate-100 dark:border-slate-850">
            <div className="h-12 w-12 rounded-xl bg-teal-100 dark:bg-teal-950/80 flex items-center justify-center text-teal-700 dark:text-teal-400 shrink-0">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-450 uppercase font-semibold">Estimasi Penduduk</div>
              <div className="text-3xl font-extrabold text-slate-855 dark:text-white mt-0.5">
                {totalPopulation.toLocaleString("id-ID")}
              </div>
              <div className="text-xs text-slate-400">Jiwa Tersebar</div>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border-t sm:border-t-0">
            <div className="h-12 w-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center text-blue-700 dark:text-blue-400 shrink-0">
              <Ruler className="h-6 w-6" />
            </div>
            <div>
              <div className="text-xs text-slate-450 uppercase font-semibold">Luas Wilayah</div>
              <div className="text-3xl font-extrabold text-slate-855 dark:text-white mt-0.5">{subdistrictArea}</div>
              <div className="text-xs text-slate-400 font-medium text-slate-450">Kaki Gunung Klabat</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-8 space-y-20 flex-grow">
        
        {/* Profile / Intro Section */}
        <section id="profil" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-4">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Mengenal Lebih Dekat <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Kecamatan Kauditan
              </span>
            </h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
              <p>
                Kecamatan Kauditan merupakan salah satu wilayah administratif penting di Kabupaten Minahasa Utara, Sulawesi Utara. Terletak secara geografis di bawah lereng Gunung Klabat bagian timur, wilayah ini dianugerahi tanah vulkanik yang sangat subur, menjadikannya pusat perkebunan cengkih, pala, kelapa, serta hortikultura.
              </p>
              <p>
                Kecamatan ini dilewati oleh jalur utama Trans Manado-Bitung dan terkoneksi langsung dengan Tol Manado-Bitung, menjadikannya gerbang logistik dan perdagangan yang vital. Desa-desa di Kauditan dikenal memiliki harmoni sosial yang tinggi, cagar budaya sejarah seperti makam purbakala Waruga, dan adat istiadat Tonsea yang terpelihara dengan baik melalui semangat gotong royong (Mapalus).
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-900/10">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                  <Sprout className="h-4 w-4 text-emerald-500" />
                  Agribisnis Unggul
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sentra kelapa terpadu, cengkih, pala, pepaya California, dan gula aren cetak.
                </p>
              </div>
              <div className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 bg-slate-50/50 dark:bg-slate-900/10">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                  <Landmark className="h-4 w-4 text-teal-500" />
                  Cagar Budaya &amp; Wisata
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Situs cagar budaya Waruga Tonsea di Kaima dan jalur pendakian Gunung Klabat di Treman.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  Gerbang Logistik
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-slate-500 leading-relaxed">
                Terletak strategis antara Kota Manado (pusat pemerintahan provinsi) dan Kota Bitung (pelabuhan internasional/kawasan ekonomi khusus).
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500" />
                  Seni Musik Tiup Bambu
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-slate-500 leading-relaxed">
                Pusat pelestarian dan industri rumahan pembuat alat musik tiup bambu tradisional khas Tonsea Minahasa Utara yang tersohor.
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  Sentra Gula Aren
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-slate-500 leading-relaxed">
                Produksi gula aren murni cetak tradisional di Desa Paslaten yang diolah secara organik dari getah pohon enau liar hutan adat.
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-indigo-500" />
                  Energi Biogas Mandiri
                </CardTitle>
              </CardHeader>
              <CardContent className="text-xs text-slate-500 leading-relaxed">
                Pengembangan energi alternatif ramah lingkungan berupa instalasi biogas kotoran ternak berskala kelompok tani di Watudambo II.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Directory / VillageList Section */}
        <section id="desa" className="space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Profil Desa Kauditan</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl">
              Gunakan pencarian atau filter kategori di bawah ini untuk menjelajahi profil dari masing-masing 12 desa yang ada di Kecamatan Kauditan.
            </p>
          </div>
          <VillageList villages={villages} />
        </section>

        {/* Geographic / Map Section placeholder */}
        <section id="peta" className="space-y-6 pt-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Geografis &amp; Peta Kecamatan</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-2xl">
              Kecamatan Kauditan membentang di kaki Gunung Klabat bagian timur hingga berbatasan dengan pesisir pelabuhan Bitung.
            </p>
          </div>
          
          <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden bg-slate-900/5 dark:bg-slate-900/30 p-8 text-center min-h-[300px] flex flex-col justify-center items-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 pointer-events-none" />
            <div className="max-w-md mx-auto space-y-4 relative z-10">
              <div className="h-12 w-12 bg-emerald-100 dark:bg-emerald-950/80 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 mx-auto">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Ketinggian &amp; Batas Wilayah</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                Ketinggian rata-rata berkisar antara 100 - 600 meter di atas permukaan laut. Wilayah ini berbatasan dengan Kecamatan Airmadidi di sebelah Barat, Kecamatan Likupang Selatan di sebelah Utara, Kota Bitung di sebelah Timur, dan Kecamatan Kema di sebelah Selatan.
              </p>
              <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/50 py-1.5 px-3 rounded-full inline-block border border-emerald-100 dark:border-emerald-900/20">
                Hubungan Trans Nasional &middot; Jalan Tol Manado-Bitung
              </div>
            </div>
          </Card>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3">
              <h3 className="font-extrabold text-white text-lg tracking-tight">KECAMATAN KAUDITAN</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Website portal terpadu data desa untuk diseminasi informasi potensi agribisnis, kerajinan, budaya, pariwisata, dan administrasi publik warga Kecamatan Kauditan.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">Pranala Cepat</h4>
              <ul className="space-y-1.5 text-xs">
                <li><a href="#profil" className="hover:text-emerald-400 transition-colors">Profil Kecamatan</a></li>
                <li><a href="#desa" className="hover:text-emerald-400 transition-colors">Daftar 12 Desa</a></li>
                <li><a href="#peta" className="hover:text-emerald-400 transition-colors">Peta &amp; Geografis</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-white text-sm">Pemerintah Kabupaten</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kantor Camat Kauditan <br />
                Jl. Trans Manado-Bitung, Desa Kauditan I, <br />
                Kabupaten Minahasa Utara, Sulawesi Utara.
              </p>
            </div>
          </div>
          <div className="pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Pemerintah Kecamatan Kauditan. Hak Cipta Dilindungi.</p>
            <p>Dukungan KKT 147 Universitas Sam Ratulangi Manado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
