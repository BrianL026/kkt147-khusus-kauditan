import { villages } from "@/data/villages";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MapPin, Users, Ruler, Phone, Mail, Building, History, Compass, Award, ShieldCheck } from "lucide-react";

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
        {/* Decorative background grid and glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                <MapPin className="h-3 w-3" />
                Desa Mandiri &middot; Minahasa Utara
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent mb-2">
                Desa {village.name}
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                {village.description}
              </p>
            </div>
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0 md:max-w-xs w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-2 text-emerald-300 mb-1.5">
                  <Users className="h-5 w-5" />
                  <span className="text-xs font-medium uppercase tracking-wider">Penduduk</span>
                </div>
                <div className="text-2xl font-bold">{village.population.toLocaleString("id-ID")}</div>
                <div className="text-xs text-slate-400">Jiwa</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-center gap-2 text-teal-300 mb-1.5">
                  <Ruler className="h-5 w-5" />
                  <span className="text-xs font-medium uppercase tracking-wider">Luas Wilayah</span>
                </div>
                <div className="text-2xl font-bold">{village.area}</div>
                <div className="text-xs text-slate-400">Kilometer Persegi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="container max-w-7xl mx-auto px-4 py-12 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Profile Card & Vision/Mission */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Profile Info Card */}
            <Card className="shadow-md border-slate-200 dark:border-slate-800">
              <CardHeader className="bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800/50">
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                  <Building className="h-5 w-5" />
                  Aparatur Pemerintah
                </CardTitle>
                <CardDescription>Struktur pimpinan dan kontak resmi desa</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Kepala Desa / Hukum Tua</label>
                  <p className="text-base font-bold text-slate-800 dark:text-slate-200 mt-0.5">{village.hukumTua}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Kontak Pelayanan</label>
                  <div className="mt-2 space-y-2.5">
                    <a href={`tel:${village.contact.phone}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-350 hover:text-emerald-600 dark:hover:text-emerald-450 transition-colors">
                      <Phone className="h-4 w-4 shrink-0 text-slate-400" />
                      <span>{village.contact.phone}</span>
                    </a>
                    <a href={`mailto:${village.contact.email}`} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-350 hover:text-emerald-600 dark:hover:text-emerald-450 transition-colors">
                      <Mail className="h-4 w-4 shrink-0 text-slate-400" />
                      <span className="truncate">{village.contact.email}</span>
                    </a>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Alamat Kantor Desa</label>
                  <div className="flex items-start gap-3 mt-2 text-sm text-slate-600 dark:text-slate-350">
                    <MapPin className="h-4 w-4 shrink-0 text-slate-400 mt-0.5" />
                    <span>{village.contact.address}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision and Mission Card */}
            <Card className="shadow-md border-slate-200 dark:border-slate-800">
              <CardHeader className="bg-slate-100/50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-800/50">
                <CardTitle className="text-lg flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                  <Award className="h-5 w-5" />
                  Visi &amp; Misi Desa
                </CardTitle>
                <CardDescription>Arah pembangunan dan cita-cita bersama</CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-450 mb-1.5 uppercase tracking-wide">Visi</h4>
                  <p className="text-sm italic text-slate-700 dark:text-slate-300 leading-relaxed border-l-2 border-emerald-500 pl-3">
                    &ldquo;{village.vision}&rdquo;
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-450 mb-2.5 uppercase tracking-wide">Misi</h4>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-350">
                    {village.mission.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <span className="flex items-center justify-center h-5 w-5 shrink-0 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                          {idx + 1}
                        </span>
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Columns: Description, History, Potentials, Facilities */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            
            {/* Overview & History Card */}
            <Card className="shadow-md border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-100">
                  <History className="h-5.5 w-5.5 text-emerald-600 dark:text-emerald-400" />
                  Profil &amp; Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                <p className="font-medium text-slate-800 dark:text-slate-200 bg-emerald-50/50 dark:bg-emerald-950/15 p-4 rounded-xl border border-emerald-100/50 dark:border-emerald-900/20">
                  {village.longDescription}
                </p>
                <div className="space-y-3 pt-2">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Sejarah Pembentukan</h3>
                  <p className="text-slate-700 dark:text-slate-300">{village.history}</p>
                </div>
              </CardContent>
            </Card>

            {/* Potential Card */}
            <Card className="shadow-md border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-100">
                  <Compass className="h-5.5 w-5.5 text-teal-600 dark:text-teal-400" />
                  Potensi Desa
                </CardTitle>
                <CardDescription>Sektor unggulan dan komoditas utama daerah</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {village.potentials.map((pot, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 hover:border-teal-500/40 hover:bg-teal-500/5 dark:hover:bg-teal-950/10 transition-all duration-300">
                      <div className="h-10 w-10 shrink-0 rounded-lg bg-teal-100 dark:bg-teal-950/80 flex items-center justify-center text-teal-700 dark:text-teal-400 font-bold">
                        <ShieldCheck className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{pot}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Public Facilities Card */}
            <Card className="shadow-md border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 text-slate-800 dark:text-slate-100">
                  <Building className="h-5.5 w-5.5 text-blue-600 dark:text-blue-400" />
                  Fasilitas Umum
                </CardTitle>
                <CardDescription>Prasarana pendukung pelayanan dan kehidupan warga</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-350">
                  {village.facilities.map((fac, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 bg-slate-50 dark:bg-slate-900/20 p-2.5 rounded-lg border border-slate-100 dark:border-slate-900">
                      <span className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                      <span>{fac}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>

        </div>

        {/* Quick Link Navigation to Other Villages */}
        <section className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-slate-200">Profil Desa Lainnya</h3>
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
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pemerintah Kecamatan Kauditan, Kabupaten Minahasa Utara, Sulawesi Utara.
          </p>
          <p className="text-xs text-slate-500 mt-2">
            Disajikan sebagai media informasi publik untuk program KKT Universitas Sam Ratulangi Manado.
          </p>
        </div>
      </footer>
    </div>
  );
}
