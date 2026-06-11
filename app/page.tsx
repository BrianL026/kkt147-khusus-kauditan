import React from "react";
import { villages } from "@/data/villages";
import VillageList from "@/components/VillageList";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold shadow-sm shadow-emerald-500/20">
              K
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                PROFIL DESA KAUDITAN
              </span>
              <span className="hidden sm:inline-block text-[10px] ml-2 font-semibold text-slate-400 uppercase tracking-widest">
                Minahasa Utara
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Sparkles className="h-3 w-3" />
            Website Profil Desa
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Infografis Profil Desa <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Kecamatan Kauditan</span>
          </h1>
          <p className="text-sm md:text-base text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Kumpulan visualisasi infografis hasil kerja KKT Terpadu Universitas Sam Ratulangi Manado untuk 12 desa di wilayah Kecamatan Kauditan, Kabupaten Minahasa Utara, Sulawesi Utara.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-12 flex-grow space-y-12">
        <VillageList villages={villages} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-slate-800">
            <div className="space-y-3">
              <h3 className="font-extrabold text-white text-base tracking-tight">WEBSITE PROFIL DESA KAUDITAN</h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                Website ini menyajikan visualisasi data infografis terpadu desa untuk penyebaran informasi potensi agribisnis, sejarah, budaya, dan inovasi bagi warga Kecamatan Kauditan.
              </p>
            </div>
            <div className="space-y-3 md:text-right">
              <h4 className="font-bold text-white text-sm">Pemerintah Kecamatan</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kantor Camat Kauditan <br />
                Jl. Trans Manado-Bitung, Desa Kauditan I, <br />
                Kabupaten Minahasa Utara, Sulawesi Utara.
              </p>
            </div>
          </div>
          <div className="pt-8 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Website Profil Desa Kecamatan Kauditan. Hak Cipta Dilindungi.</p>
            <p>Dukungan KKT Terpadu Universitas Sam Ratulangi Manado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
