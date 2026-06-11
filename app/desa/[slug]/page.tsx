import { villages } from "@/data/villages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Compass, Heart, Lightbulb, MapPin, Milestone, HelpCircle, History, Sprout, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return villages.map((v) => ({
    slug: v.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DesaPage({ params }: PageProps) {
  const { slug } = await params;
  const village = villages.find((v) => v.slug === slug);

  if (!village) {
    notFound();
  }

  const isCompleted = village.slug === "watudambo-2";

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Portal Kecamatan Kauditan
            </span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 cursor-pointer">
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Portal
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white">
        {/* Decorative background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              <MapPin className="h-3 w-3" />
              Profil Desa 4 Pilar &middot; Tonsea
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
              {village.name}
            </h1>
            <p className="text-lg text-slate-350 italic font-medium">
              &ldquo;{village.tagline}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-12 flex-grow">
        {isCompleted ? (
          <div className="space-y-16">
            
            {/* Navigasi Cepat Pilar */}
            <div className="flex flex-wrap gap-2.5 justify-center py-2 px-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl mx-auto shadow-sm">
              <a href="#pilar-sejarah" className="text-xs md:text-sm font-bold px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <BookOpen className="h-4 w-4 text-emerald-600" />
                Pilar 1: Sejarah &amp; Geografi
              </a>
              <a href="#pilar-komoditas" className="text-xs md:text-sm font-bold px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Compass className="h-4 w-4 text-teal-600" />
                Pilar 2: Komoditas &amp; Ekonomi
              </a>
              <a href="#pilar-budaya" className="text-xs md:text-sm font-bold px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Heart className="h-4 w-4 text-rose-600" />
                Pilar 3: Budaya &amp; Tradisi
              </a>
              <a href="#pilar-inovasi" className="text-xs md:text-sm font-bold px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <Lightbulb className="h-4 w-4 text-amber-600" />
                Pilar 4: Tantangan &amp; Inovasi
              </a>
            </div>

            {/* PILAR 1: SEJARAH & GEOGRAFI */}
            <section id="pilar-sejarah" className="scroll-mt-20 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="h-10 w-10 bg-emerald-100 dark:bg-emerald-950/80 rounded-xl flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <BookOpen className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-850 dark:text-white">Pilar I: Sejarah &amp; Geografis</h2>
                  <p className="text-xs text-slate-500">Asal-usul wilayah, bentang alam, dan linimasa pertumbuhan desa</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 shadow-sm border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <History className="h-5 w-5 text-emerald-600" />
                      Asal Nama Watu &amp; Taranak
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-300 space-y-4">
                    <p>{village.sejarah.asalNama}</p>
                    <div className="p-4 bg-slate-50/80 dark:bg-slate-900/35 border border-slate-200/50 dark:border-slate-850/50 rounded-xl">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1 flex items-center gap-2">
                        <Milestone className="h-4 w-4 text-emerald-650" />
                        Pengaruh Koridor Trans Sulawesi
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-normal">{village.sejarah.transSulawesi}</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="lg:col-span-1 flex flex-col gap-6">
                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">Karakteristik Topografi</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      {village.sejarah.topografi}
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">Linimasa Agraris ke Industri</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {village.sejarah.linimasa.map((time, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                            <span>{time}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* PILAR 2: KOMODITAS & EKONOMI */}
            <section id="pilar-komoditas" className="scroll-mt-20 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="h-10 w-10 bg-teal-100 dark:bg-teal-950/80 rounded-xl flex items-center justify-center text-teal-700 dark:text-teal-400">
                  <Compass className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-855 dark:text-white">Pilar II: Komoditas &amp; Perekonomian</h2>
                  <p className="text-xs text-slate-500">Sektor pertanian unggulan, hasil perkebunan, dan pemberdayaan BUMDES</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-teal-500/5 border-teal-500/10">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-teal-750 dark:text-teal-400">
                        <Sprout className="h-5 w-5" />
                        Daftar Komoditas Utama
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {village.komoditas.daftarKomoditas.map((com) => (
                          <span key={com} className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                            <ShieldCheck className="h-3.5 w-3.5 text-teal-500 mr-1.5" />
                            {com}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-grow">
                    <CardHeader>
                      <CardTitle className="text-lg">Peran Poktan &amp; BUMDES</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      {village.komoditas.peranOrganisasi}
                    </CardContent>
                  </Card>
                </div>

                <Card className="lg:col-span-2 shadow-sm border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Uraian Sektor Perkebunan &amp; Holtikultura</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-300">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Perkebunan Kelapa Rakyat</h4>
                      <p>{village.komoditas.kelapa}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Emas Hijau Cengkeh</h4>
                      <p>{village.komoditas.cengkeh}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Palawija &amp; Pepaya California</h4>
                      <p>{village.komoditas.palawija}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* PILAR 3: BUDAYA & TRADISI */}
            <section id="pilar-budaya" className="scroll-mt-20 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200/80 dark:border-slate-800/80 pb-3">
                <div className="h-10 w-10 bg-rose-100 dark:bg-rose-950/80 rounded-xl flex items-center justify-center text-rose-700 dark:text-rose-450">
                  <Heart className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-855 dark:text-white">Pilar III: Budaya &amp; Nilai Adat</h2>
                  <p className="text-xs text-slate-500">Gotong royong Mapalus, kesenian tradisional, dan upacara adat Pengucapan Syukur</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2 shadow-sm border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Kearifan Lokal Tonsea</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-300">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Gotong Royong &ldquo;Mapalus&rdquo;</h4>
                      <p>{village.budaya.mapalus}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Upacara Tradisi Pengucapan Syukur</h4>
                      <p>{village.budaya.pengucapanSyukur}</p>
                    </div>
                  </CardContent>
                </Card>

                <div className="lg:col-span-1 flex flex-col gap-6">
                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-1">
                    <CardHeader>
                      <CardTitle className="text-lg">Kesenian &amp; Musik Tradisional</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      {village.budaya.kesenian}
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-1 bg-rose-500/5 border-rose-500/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-rose-750 dark:text-rose-400">Warisan Adat Unggulan</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {village.budaya.nilaiAdat.map((val) => (
                          <li key={val} className="flex gap-2 items-center text-xs text-slate-600 dark:text-slate-350">
                            <span className="h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                            <span>{val}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* PILAR 4: INOVASI & TANTANGAN */}
            <section id="pilar-inovasi" className="scroll-mt-20 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div className="h-10 w-10 bg-amber-100 dark:bg-amber-950/80 rounded-xl flex items-center justify-center text-amber-700 dark:text-amber-400">
                  <Lightbulb className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-855 dark:text-white">Pilar IV: Inovasi &amp; Tantangan Lahan</h2>
                  <p className="text-xs text-slate-500">Konversi alih fungsi lahan, digitalisasi pemasaran digital, dan terobosan energi terbarukan</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 flex flex-col gap-6">
                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 bg-amber-500/5 border-amber-500/10">
                    <CardHeader>
                      <CardTitle className="text-lg text-amber-750 dark:text-amber-400">Program Kerja &amp; Solusi</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2.5">
                        {village.inovasi.programKerja.map((program) => (
                          <li key={program} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                            <span className="h-4 w-4 shrink-0 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-400 flex items-center justify-center font-bold text-[9px]">
                              &middot;
                            </span>
                            <span>{program}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex-grow">
                    <CardHeader>
                      <CardTitle className="text-lg">Tantangan Alih Fungsi Lahan</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                      {village.inovasi.alihFungsiLahan}
                    </CardContent>
                  </Card>
                </div>

                <Card className="lg:col-span-2 shadow-sm border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Inovasi Layanan &amp; UMKM Desa</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-sm md:text-base leading-relaxed text-slate-650 dark:text-slate-300">
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Digitalisasi Sistem &amp; Media Sosial</h4>
                      <p>{village.inovasi.digitalisasi}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-850">
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-1">Inovasi UMKM Serat Abaka &amp; Biogas Komunal</h4>
                      <p>{village.inovasi.inovasiUmkm}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>
        ) : (
          /* Placeholder Friendly UI State */
          <div className="max-w-xl mx-auto py-16 text-center space-y-6">
            <div className="h-16 w-16 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center text-slate-450 mx-auto border border-dashed border-slate-300 dark:border-slate-800">
              <HelpCircle className="h-8 w-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Data Desa Belum Lengkap (Draft)</h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Halaman profil untuk **Desa {village.name}** saat ini sedang berada dalam masa perancangan dan menunggu pengumpulan data sekunder/primer oleh tim mahasiswa KKT 147 Universitas Sam Ratulangi Manado.
              </p>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-150 dark:border-slate-850 text-xs text-slate-450 leading-relaxed">
              Materi pengisian mencakup 4 pilar utama: Sejarah (Asal nama dan topografi), Komoditas (Kelapa, Cengkeh, Palawija), Budaya (Mapalus dan Pengucapan Syukur), serta Inovasi Desa.
            </div>
            <div className="pt-4">
              <Link href="/">
                <Button className="cursor-pointer">Kembali Ke Portal Utama</Button>
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-850 py-10 mt-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pemerintah Kecamatan Kauditan, Kabupaten Minahasa Utara, Sulawesi Utara.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Disajikan sebagai media informasi publik KKT Terpadu Universitas Sam Ratulangi.
          </p>
        </div>
      </footer>
    </div>
  );
}
