import "./globals.css";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SITE_MAX_WIDTH } from "@/lib/constants";
import { SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import { Inter, Noto_Sans_JP } from "next/font/google";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "橋本大輝 / Daiki Hashimoto",
  description: SITE_DESCRIPTION,
  verification: {
    google: "NvqelDiPIKC2QElgFt9zhYMfKx6wpYj-B8rdgkWFhqY",
  },
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/research-site/icon.png',
  },
  openGraph: {
    title: "橋本大輝 / Daiki Hashimoto",
    description: SITE_DESCRIPTION,
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
    <html lang="ja" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`flex min-h-dvh flex-col antialiased ${inter.variable} ${notoSansJP.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-background focus:px-4 focus:py-3 focus:text-primary focus:ring-2 focus:ring-ring">
            本文へ移動 / Skip to content
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 py-8 outline-none sm:py-12">{children}</main>
          <footer className="mt-4 border-t border-border bg-muted/30 py-6 sm:py-8">
            <div className={`mx-auto flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-2 ${SITE_MAX_WIDTH} px-4 text-sm/6 text-muted-foreground`}>
              <span>© {new Date().getFullYear()} 橋本大輝 / Daiki Hashimoto</span>
              <a href="#main-content" className="inline-flex min-h-11 items-center rounded-md underline underline-offset-4 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">ページ上部へ / Back to top ↑</a>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
