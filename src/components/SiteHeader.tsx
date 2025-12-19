import Link from "next/link";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { SITE_MAX_WIDTH } from "@/lib/constants";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Button variant="ghost" size="sm" asChild>
    <Link href={href}>{children}</Link>
  </Button>
);

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className={`flex h-14 items-center justify-between ${SITE_MAX_WIDTH}`}>
        <Link href="/" className="font-semibold tracking-tight hover:opacity-80 transition-opacity">
          橋本大輝のホームページ
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink href="/publications">Publications</NavLink>
          <NavLink href="/talks">Talks</NavLink>
        </nav>
      </Container>
    </header>
  );
}
