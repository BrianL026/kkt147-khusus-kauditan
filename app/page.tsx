import React from "react";
import { villages } from "@/data/villages";
import VillageList from "@/components/VillageList";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300">
      
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/images/logo-minut.png" 
              alt="Logo Kabupaten Minahasa Utara" 
              className="h-10 w-auto object-contain"
            />
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                PROFIL DESA
              </span>
              <span className="hidden sm:inline-block text-[10px] ml-2 font-semibold text-slate-400 uppercase tracking-widest">
                Kec. Kauditan, Kab. Minahasa Utara
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-slate-950 text-white">
        {/* Background Image of Gunung Klabat */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ backgroundImage: "url('/images/Gunung_Klabat.jpg')" }}
        />

        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="border border-white/10 p-8 md:p-12 rounded-3xl max-w-3xl mx-auto shadow-2xl space-y-5 text-center">
            <h1 
              className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.95))" }}
            >
              Infografis Profil Desa <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Kecamatan Kauditan
              </span>
            </h1>
            <p 
              className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium"
              style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.95)" }}
            >
              Kumpulan visualisasi infografis hasil kerja KKT Khusus 147 Universitas Sam Ratulangi Manado untuk 12 desa di wilayah Kecamatan Kauditan, Kabupaten Minahasa Utara, Sulawesi Utara.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container max-w-7xl mx-auto px-4 py-12 flex-grow space-y-12">
        <VillageList villages={villages} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} Website Profil Desa Kecamatan Kauditan. Hak Cipta Dilindungi.</p>
            <p>Dukungan KKT Khusus 147 Universitas Sam Ratulangi Manado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
