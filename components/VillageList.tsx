"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Village } from "@/data/villages";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Maximize2, Download, X, ExternalLink } from "lucide-react";

interface VillageListProps {
  villages: Village[];
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
    default: return "/placeholder.png";
  }
};

export default function VillageList({ villages }: VillageListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const filteredVillages = useMemo(() => {
    return villages.filter((v) => {
      return (
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.komoditas.daftarKomoditas.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  }, [villages, searchQuery]);

  const handleOpenLightbox = (e: React.MouseEvent, imagePath: string, title: string) => {
    e.stopPropagation(); // Prevent card link navigation
    e.preventDefault();
    setLightboxImage(imagePath);
    setLightboxTitle(title);
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card link navigation
  };

  return (
    <div className="space-y-8">
      {/* Search & Counter Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            type="text"
            placeholder="Cari desa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-11 border-slate-200 dark:border-slate-800 focus-visible:ring-emerald-500 rounded-xl w-full"
          />
        </div>
        <div className="text-sm text-slate-500 font-semibold">
          Menampilkan <span className="text-slate-800 dark:text-slate-200 font-bold">{filteredVillages.length}</span> dari <span className="font-bold">12</span> Desa
        </div>
      </div>

      {/* Villages Grid */}
      {filteredVillages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVillages.map((village, idx) => {
            const infographicPath = getInfographicPath(village.slug);

            return (
              <Card
                key={village.slug}
                className="group relative h-80 rounded-2xl border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-end transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {/* Background Image Preview */}
                <div 
                  className="absolute inset-0 bg-cover bg-top transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${infographicPath}')` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-900/10 opacity-90 transition-opacity" />

                {/* Main Card Link Wrap */}
                <Link href={`/desa/${village.slug}`} className="absolute inset-0 z-10 flex flex-col justify-end p-5 pb-20">
                  <CardHeader className="p-0 space-y-1">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-black text-white group-hover:text-emerald-300 transition-colors">
                        Desa {village.name}
                      </CardTitle>
                      <ExternalLink className="h-4.5 w-4.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-widest">
                      Lihat Profil 4 Pilar
                    </span>
                  </CardHeader>
                </Link>

                {/* Double Buttons Footer */}
                <CardFooter className="relative z-20 p-5 pt-0 border-t border-white/10 bg-slate-950/70 backdrop-blur-md flex gap-3">
                  <Button
                    onClick={(e) => handleOpenLightbox(e, infographicPath, `Desa ${village.name}`)}
                    className="flex-1 h-9 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 cursor-pointer rounded-lg gap-1.5"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    Perbesar
                  </Button>
                  
                  <a 
                    href={infographicPath} 
                    download={`Infografis_Desa_${village.name}`}
                    onClick={handleDownload}
                    className="flex-1"
                  >
                    <Button
                      className="w-full h-9 text-xs font-semibold bg-emerald-650 hover:bg-emerald-555 text-white border border-emerald-700/35 cursor-pointer rounded-lg gap-1.5"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Unduh
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Desa Tidak Ditemukan</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Tidak ada profil desa yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;. Coba kata kunci lain.
          </p>
        </div>
      )}

      {/* Lightbox Modal (Wikipedia style) */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          {/* Close Button */}
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 h-11 w-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-colors border border-white/15"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Modal Content Wrapper */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt={lightboxTitle}
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          {/* Bottom Caption Bar */}
          <div className="mt-4 text-center space-y-2 relative z-10" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-white text-lg font-bold">{lightboxTitle}</h4>
            <a href={lightboxImage} download={`Infografis_${lightboxTitle}`}>
              <Button size="sm" className="bg-emerald-650 hover:bg-emerald-555 text-white gap-1.5 rounded-lg cursor-pointer">
                <Download className="h-4 w-4" />
                Unduh Gambar Lengkap
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
