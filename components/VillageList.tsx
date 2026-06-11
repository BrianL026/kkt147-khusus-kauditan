"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Village } from "@/data/villages";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users, Ruler, ChevronRight, Sprout, Waves, Trees, Hammer, LandmarkIcon } from "lucide-react";

interface VillageListProps {
  villages: Village[];
}

export default function VillageList({ villages }: VillageListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("Semua");

  // Get all unique tags from potentials
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    tagsSet.add("Semua");
    
    // Group categories logically to keep filter buttons clean and concise
    villages.forEach((v) => {
      v.potentials.forEach((pot) => {
        if (pot.includes("Pertanian") || pot.includes("Hortikultura") || pot.includes("Pepaya") || pot.includes("Tanaman Pangan")) {
          tagsSet.add("Pertanian");
        } else if (pot.includes("Perkebunan") || pot.includes("Kelapa") || pot.includes("Cengkih") || pot.includes("Pala") || pot.includes("Aren")) {
          tagsSet.add("Perkebunan");
        } else if (pot.includes("Wisata") || pot.includes("Gunung") || pot.includes("Budaya") || pot.includes("Home Stay")) {
          tagsSet.add("Pariwisata");
        } else if (pot.includes("Industri") || pot.includes("Pabrik") || pot.includes("Kerajinan") || pot.includes("Sabut") || pot.includes("Arang")) {
          tagsSet.add("Industri & Kerajinan");
        } else if (pot.includes("Peternakan") || pot.includes("Perikanan")) {
          tagsSet.add("Peternakan & Perikanan");
        } else {
          tagsSet.add("Ekonomi Kreatif");
        }
      });
    });
    return Array.from(tagsSet);
  }, [villages]);

  const filteredVillages = useMemo(() => {
    return villages.filter((v) => {
      const matchesSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.hukumTua.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.potentials.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedTag === "Semua") return matchesSearch;

      const matchesTag = v.potentials.some((pot) => {
        if (selectedTag === "Pertanian") {
          return pot.includes("Pertanian") || pot.includes("Hortikultura") || pot.includes("Pepaya") || pot.includes("Tanaman Pangan");
        }
        if (selectedTag === "Perkebunan") {
          return pot.includes("Perkebunan") || pot.includes("Kelapa") || pot.includes("Cengkih") || pot.includes("Pala") || pot.includes("Aren");
        }
        if (selectedTag === "Pariwisata") {
          return pot.includes("Wisata") || pot.includes("Gunung") || pot.includes("Budaya") || pot.includes("Home Stay");
        }
        if (selectedTag === "Industri & Kerajinan") {
          return pot.includes("Industri") || pot.includes("Pabrik") || pot.includes("Kerajinan") || pot.includes("Sabut") || pot.includes("Arang");
        }
        if (selectedTag === "Peternakan & Perikanan") {
          return pot.includes("Peternakan") || pot.includes("Perikanan");
        }
        return !pot.includes("Pertanian") && !pot.includes("Perkebunan") && !pot.includes("Wisata") && !pot.includes("Industri") && !pot.includes("Peternakan") && !pot.includes("Perikanan");
      });

      return matchesSearch && matchesTag;
    });
  }, [villages, searchQuery, selectedTag]);

  // Helper to choose tag badges icons
  const getTagIcon = (tag: string) => {
    switch (tag) {
      case "Pertanian": return <Sprout className="h-3.5 w-3.5" />;
      case "Perkebunan": return <Trees className="h-3.5 w-3.5" />;
      case "Pariwisata": return <LandmarkIcon className="h-3.5 w-3.5" />;
      case "Industri & Kerajinan": return <Hammer className="h-3.5 w-3.5" />;
      case "Peternakan & Perikanan": return <Waves className="h-3.5 w-3.5" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-450" />
            <Input
              type="text"
              placeholder="Cari desa, kepala desa, atau potensi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-slate-200 dark:border-slate-800 focus-visible:ring-emerald-500 rounded-xl"
            />
          </div>
          <div className="text-sm text-slate-500 font-medium self-end md:self-center">
            Menampilkan <span className="text-slate-800 dark:text-slate-200 font-bold">{filteredVillages.length}</span> dari <span className="font-bold">12</span> Desa
          </div>
        </div>

        {/* Filter Badges */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Kategori Potensi</label>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  selectedTag === tag
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-500/20"
                    : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350"
                }`}
              >
                {getTagIcon(tag)}
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Villages Grid */}
      {filteredVillages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVillages.map((village, idx) => (
            <Card
              key={village.slug}
              className="group shadow-sm hover:shadow-md border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div>
                {/* Visual Header Decoration */}
                <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        Desa {village.name}
                      </CardTitle>
                      <CardDescription className="mt-1 flex items-center gap-1 text-xs text-slate-450">
                        <MapPin className="h-3 w-3" />
                        Kec. Kauditan, Minahasa Utara
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 pb-4">
                  <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3">
                    {village.description}
                  </p>

                  {/* Core Stats */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-850">
                    <div className="flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/40 p-2 rounded-lg border border-slate-100/50 dark:border-slate-850/50">
                      <Users className="h-4 w-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-450 uppercase font-medium">Penduduk</div>
                        <div className="text-xs font-bold text-slate-850 dark:text-slate-200">
                          {village.population.toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/40 p-2 rounded-lg border border-slate-100/50 dark:border-slate-850/50">
                      <Ruler className="h-4 w-4 text-teal-500 shrink-0" />
                      <div>
                        <div className="text-[10px] text-slate-450 uppercase font-medium">Luas</div>
                        <div className="text-xs font-bold text-slate-850 dark:text-slate-200">{village.area}</div>
                      </div>
                    </div>
                  </div>

                  {/* Badges of Potentials */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Sektor Unggulan:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {village.potentials.slice(0, 2).map((pot) => (
                        <span key={pot} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/20">
                          {pot}
                        </span>
                      ))}
                      {village.potentials.length > 2 && (
                        <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350">
                          +{village.potentials.length - 2} lainnya
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </div>

              <CardFooter className="pt-2 pb-5 border-t border-slate-100 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-900/10">
                <Link href={`/desa/${village.slug}`} className="w-full">
                  <Button variant="outline" className="w-full justify-between h-9 text-xs font-semibold cursor-pointer border-slate-200 dark:border-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white group-hover:border-emerald-500/40 transition-all duration-300">
                    <span>Lihat Profil Lengkap</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-450 mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Desa Tidak Ditemukan</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Tidak ada profil desa yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo; atau filter &ldquo;{selectedTag}&rdquo;. Coba kata kunci lain.
          </p>
        </div>
      )}
    </div>
  );
}
