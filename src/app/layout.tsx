import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_MAX_WIDTH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "橋本大輝 / Daiki Hashimoto",
  description: "Research homepage",
  openGraph: {
    title: "橋本大輝 / Daiki Hashimoto",
    description: "Research homepage",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "橋本大輝 / Daiki Hashimoto",
    description: "Research homepage",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className="min-h-dvh antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="py-10">{children}</main>
          <footer className="border-t py-8">
            <div className={`mx-auto w-full ${SITE_MAX_WIDTH} px-4 text-sm text-muted-foreground`}>
              © {new Date().getFullYear()} 橋本大輝
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
