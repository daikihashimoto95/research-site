import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "橋本大輝のホームページ",
  description: "研究紹介: 論文とトーク",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh bg-white text-zinc-900 antialiased">
        <SiteHeader />
        <main className="py-10">{children}</main>
        <footer className="border-t border-zinc-200 py-8">
          <div className="mx-auto w-full max-w-3xl px-4 text-sm text-zinc-500">
            © {new Date().getFullYear()} 橋本大輝
          </div>
        </footer>
      </body>
    </html>
  );
}
