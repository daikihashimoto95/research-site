import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_MAX_WIDTH } from "@/lib/constants";
import { Inter, Noto_Sans_JP, Playfair_Display } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "橋本大輝 / Daiki Hashimoto",
  description: "Research homepage",
  metadataBase: new URL('https://daikihashimoto95.github.io/research-site'),
  openGraph: {
    title: "橋本大輝 / Daiki Hashimoto",
    description: "Research homepage",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: 'https://daikihashimoto95.github.io/research-site/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: '橋本大輝 / Daiki Hashimoto',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`min-h-dvh antialiased ${inter.variable} ${notoSansJP.variable} ${playfairDisplay.variable} font-sans`}>
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
