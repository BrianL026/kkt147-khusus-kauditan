"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Village } from "@/data/villages";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronRight, Sprout, Lightbulb, HelpCircle } from "lucide-react";

interface VillageListProps {
  villages: Village[];
}

export default function VillageList({ villages }: VillageListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPillar, setSelectedPillar] = useState<string>("Semua");

  const filteredVillages = useMemo(() => {
    return villages.filter((v) => {
      // Basic search on name, tagline, and commodities
      const matchesSearch =
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.komoditas.daftarKomoditas.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) ||
        v.budaya.nilaiAdat.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));

      if (selectedPillar === "Semua") return matchesSearch;

      // Filter by having specific active pillar info
      if (selectedPillar === "Watudambo 2 (Lengkap)") {
        return matchesSearch && v.slug === "watudambo-2";
      }
      
      // Filter by placeholder vs completed
      if (selectedPillar === "Draft / Placeholder") {
        return matchesSearch && v.slug !== "watudambo-2";
      }

      return matchesSearch;
    });
  }, [villages, searchQuery, selectedPillar]);

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-450" />
            <Input
              type="text"
              placeholder="Cari desa, tagline, komoditas..."
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
          <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Status Pengisian Data</label>
          <div className="flex flex-wrap gap-2">
            {["Semua", "Watudambo 2 (Lengkap)", "Draft / Placeholder"].map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedPillar(tag)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  selectedPillar === tag
                    ? "bg-emerald-600 border-emerald-600 text-white shadow-sm shadow-emerald-500/20"
                    : "bg-slate-50 dark:bg-slate-850 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Villages Grid */}
      {filteredVillages.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVillages.map((village, idx) => {
            const isCompleted = village.slug === "watudambo-2";

            return (
              <Card
                key={village.slug}
                className={`group shadow-sm hover:shadow-md border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1 ${
                  !isCompleted ? "opacity-75 hover:opacity-100" : ""
                }`}
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div>
                  {/* Visual Header Decoration */}
                  <div className={`h-2 w-full bg-gradient-to-r ${
                    isCompleted ? "from-emerald-500 to-teal-500 opacity-80" : "from-slate-300 to-slate-400 opacity-40"
                  } group-hover:opacity-100 transition-opacity`} />
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {village.name}
                          </CardTitle>
                          {isCompleted && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-450 border border-emerald-200 dark:border-emerald-900/50">
                              Lengkap
                            </span>
                          )}
                        </div>
                        <CardDescription className="mt-1.5 text-xs text-slate-450 italic line-clamp-1">
                          &ldquo;{village.tagline}&rdquo;
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 pb-4">
                    {isCompleted ? (
                      <>
                        <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed line-clamp-3">
                          {village.sejarah.asalNama}
                        </p>

                        {/* 4 Pillars Summary */}
                        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100 dark:border-slate-850">
                          <div className="flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/40 p-2 rounded-lg border border-slate-100/50 dark:border-slate-850/50">
                            <Sprout className="h-4 w-4 text-emerald-500 shrink-0" />
                            <div>
                              <div className="text-[9px] text-slate-400 uppercase font-semibold">Komoditas</div>
                              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                                {village.komoditas.daftarKomoditas.length} Jenis
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-slate-50/50 dark:bg-slate-900/40 p-2 rounded-lg border border-slate-100/50 dark:border-slate-850/50">
                            <Lightbulb className="h-4 w-4 text-amber-500 shrink-0" />
                            <div>
                              <div className="text-[9px] text-slate-400 uppercase font-semibold">Inovasi</div>
                              <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                                {village.inovasi.programKerja.length} Program
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Pillar Badges */}
                        <div className="space-y-1.5 pt-1">
                          <div className="text-[9px] text-slate-400 uppercase font-semibold tracking-wider">Nilai Adat &amp; Seni:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {village.budaya.nilaiAdat.slice(0, 2).map((val) => (
                              <span key={val} className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-650 dark:text-slate-350">
                                {val}
                              </span>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="py-6 text-center space-y-2">
                        <HelpCircle className="h-8 w-8 text-slate-300 dark:text-slate-700 mx-auto" />
                        <p className="text-xs text-slate-400 max-w-[200px] mx-auto">
                          Data profil pilar desa ini belum diisi oleh tim KKT.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </div>

                <CardFooter className="pt-2 pb-5 border-t border-slate-100 dark:border-slate-850 bg-slate-50/30 dark:bg-slate-900/10">
                  <Link href={`/desa/${village.slug}`} className="w-full">
                    <Button 
                      variant="outline" 
                      className={`w-full justify-between h-9 text-xs font-semibold cursor-pointer ${
                        isCompleted
                          ? "border-slate-200 dark:border-slate-800 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white group-hover:border-emerald-500/40"
                          : "border-dashed border-slate-250 hover:bg-slate-100 hover:text-slate-800 dark:border-slate-850"
                      } transition-all duration-300`}
                    >
                      <span>{isCompleted ? "Lihat Profil Lengkap" : "Menunggu Data (Draft)"}</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center">
          <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-450 mb-4">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">Desa Tidak Ditemukan</h3>
          <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
            Tidak ada profil desa yang cocok dengan pencarian &ldquo;{searchQuery}&rdquo;. Coba kata kunci lain.
          </p>
        </div>
      )}
    </div>
  );
}
