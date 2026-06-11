import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profil Desa Kecamatan Kauditan",
  description: "Website kumpulan infografis profil desa terpadu di Kecamatan Kauditan, Kabupaten Minahasa Utara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
