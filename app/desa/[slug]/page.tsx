import { villages } from "@/data/villages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowLeft, BookOpen, Compass, Heart, Lightbulb, MapPin, Download } from "lucide-react";

export async function generateStaticParams() {
  return villages.map((v) => ({
    slug: v.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getInfographicPath = (slug: string) => {
  switch (slug) {
    case "kaasar": return "/infografis/KAASAR.png";
    case "kaima": return "/infografis/KAIMA.png";
    case "karegesan": return "/infografis/KAREGESAN.png";
    case "kauditan-1": return "/infografis/KAUDITAN 1.jpg";
    case "kauditan-2": return "/infografis/KAUDITAN 2.png";
    case "kawiley": return "/infografis/KIWALEY.png";
    case "lembean": return "/infografis/LEMBEAN.png";
    case "paslaten": return "/infografis/PASLATEN.png";
    case "treman": return "/infografis/TREMAN.png";
    case "tumaluntung": return "/infografis/TUMALUNTUNG.png";
    case "watudambo": return "/infografis/WATUDAMBO.png";
    case "watudambo-2": return "/infografis/WATUDAMBO 2.png";
    default: return null;
  }
};

export default async function DesaPage({ params }: PageProps) {
  const { slug } = await params;
  const village = villages.find((v) => v.slug === slug);

  if (!village) {
    notFound();
  }

  const infographicPath = getInfographicPath(village.slug);

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-base md:text-lg bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <MapPin className="h-3 w-3" />
            Desa 4 Pilar &middot; Minahasa Utara
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
            Desa {village.name}
          </h1>
          <p className="text-base md:text-lg text-slate-350 italic font-medium max-w-3xl leading-relaxed">
            &ldquo;{village.tagline}&rdquo;
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-12 flex-grow space-y-12">
        
        {/* 4 Pillars Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* PILAR 1: SEJARAH & GEOGRAFI */}
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <CardHeader className="bg-slate-100/30 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-850 pb-4">
              <CardTitle className="text-xl flex items-center gap-2.5 text-emerald-700 dark:text-emerald-400">
                <BookOpen className="h-5.5 w-5.5" />
                Pilar I: Sejarah &amp; Geografis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <Accordion defaultValue={["item-1"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Asal-Usul Nama Desa
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.sejarah.asalNama}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Topografi &amp; Bentang Alam
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.sejarah.topografi}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Konektivitas Trans Sulawesi
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.sejarah.transSulawesi}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Linimasa Perkembangan Desa
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="space-y-3">
                      {village.sejarah.linimasa.map((time, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-350">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                          <span>{time}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* PILAR 2: KOMODITAS & EKONOMI */}
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <CardHeader className="bg-slate-100/30 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-850 pb-4">
              <CardTitle className="text-xl flex items-center gap-2.5 text-teal-700 dark:text-teal-400">
                <Compass className="h-5.5 w-5.5" />
                Pilar II: Komoditas &amp; Perekonomian
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <Accordion defaultValue={["item-1"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Sektor Kelapa &amp; Kopra
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.komoditas.kelapa}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Komoditas Emas Rempah Cengkeh
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.komoditas.cengkeh}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Sektor Palawija &amp; Holtikultura
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.komoditas.palawija}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Peran Kelompok Tani &amp; BUMDes
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.komoditas.peranOrganisasi}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Tags of commodities */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2">
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Hasil Bumi Utama:</div>
                <div className="flex flex-wrap gap-1.5">
                  {village.komoditas.daftarKomoditas.map((com) => (
                    <span key={com} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-900/20">
                      {com}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PILAR 3: BUDAYA & NILAI ADAT */}
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <CardHeader className="bg-slate-100/30 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-850 pb-4">
              <CardTitle className="text-xl flex items-center gap-2.5 text-rose-700 dark:text-rose-450">
                <Heart className="h-5.5 w-5.5" />
                Pilar III: Budaya &amp; Tradisi Adat
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <Accordion defaultValue={["item-1"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Nilai Gotong Royong (Mapalus)
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.budaya.mapalus}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Tradisi Pengucapan Syukur Panen
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.budaya.pengucapanSyukur}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Kesenian Khas &amp; Alat Musik Tradisional
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.budaya.kesenian}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Tags of cultural elements */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2">
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Warisan Adat Tonsea:</div>
                <div className="flex flex-wrap gap-1.5">
                  {village.budaya.nilaiAdat.map((val) => (
                    <span key={val} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/20">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PILAR 4: INOVASI & TANTANGAN */}
          <Card className="shadow-sm border-slate-200 dark:border-slate-800 flex flex-col justify-between">
            <CardHeader className="bg-slate-100/30 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-850 pb-4">
              <CardTitle className="text-xl flex items-center gap-2.5 text-amber-700 dark:text-amber-400">
                <Lightbulb className="h-5.5 w-5.5" />
                Pilar IV: Tantangan &amp; Inovasi
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 flex-grow">
              <Accordion defaultValue={["item-1"]} className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Tantangan Alih Fungsi Lahan
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.inovasi.alihFungsiLahan}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    Digitalisasi Pelayanan &amp; Komunikasi
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.inovasi.digitalisasi}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                    UMKM Unggulan &amp; Energi Terbarukan
                  </AccordionTrigger>
                  <AccordionContent className="text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed pt-1">
                    {village.inovasi.inovasiUmkm}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Bullet points of program kerja */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-850 space-y-2">
                <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider">Program Kerja Utama:</div>
                <ul className="space-y-1.5">
                  {village.inovasi.programKerja.map((prog) => (
                    <li key={prog} className="flex gap-2 items-start text-xs text-slate-605 dark:text-slate-350">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <span>{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Infographic Download Section */}
        {infographicPath && (
          <div className="pt-8 border-t border-slate-200 dark:border-slate-850 flex flex-col items-center text-center space-y-4">
            <div className="max-w-md space-y-1">
              <h3 className="text-lg font-bold">Visualisasi Infografis Desa</h3>
              <p className="text-xs text-slate-500 leading-normal">
                Unduh lembar infografis resmi Desa {village.name} yang berisi data ringkasan visual 4 pilar di atas.
              </p>
            </div>
            <a href={infographicPath} download={`Infografis_Desa_${village.name}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 cursor-pointer shadow-md bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/10 h-11 px-6 text-sm font-semibold">
                <Download className="h-4.5 w-4.5" />
                Unduh Infografis Desa {village.name}
              </Button>
            </a>
          </div>
        )}

        {/* Navigation to Other Villages */}
        <section className="pt-12 border-t border-slate-200 dark:border-slate-850">
          <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400 mb-4">Profil Desa Lainnya</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {villages
              .filter((v) => v.slug !== village.slug)
              .map((v) => (
                <Link key={v.slug} href={`/desa/${v.slug}`}>
                  <Button variant="outline" className="w-full text-xs py-2 px-3 justify-center truncate cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900">
                    {v.name}
                  </Button>
                </Link>
              ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-10">
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
