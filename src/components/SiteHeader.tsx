"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SITE_MAX_WIDTH } from "@/lib/constants";
import { cn } from "@/lib/cn";

const navigation = [
  { href: "/", label: "ホーム", english: "Home" },
  { href: "/publications", label: "出版", english: "Publications" },
  { href: "/presentations", label: "学会発表", english: "Presentations" },
  { href: "/cv", label: "経歴", english: "CV" },
];

function pagePath(pathname: string) {
  const path = pathname.replace(/^\/research-site(?=\/|$)/, "").replace(/\/$/, "") || "/";
  if (path === "/talks" || path === "/page/presentations") return "/presentations";
  if (path === "/page/publications") return "/publications";
  if (path === "/page/cv") return "/cv";
  return path;
}

export function SiteHeader() {
  const currentPath = usePathname();
  const pathname = pagePath(currentPath);
  const headerRef = useRef<HTMLElement>(null);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Match the md breakpoint used by the two-row layout below.
    const singleRow = window.matchMedia("(min-width: 48rem)");
    const scrollPosition = () => Math.max(0, Math.min(
      window.scrollY,
      document.documentElement.scrollHeight - window.innerHeight,
    ));
    let previousY = scrollPosition();
    let previousWidth = window.innerWidth;
    let direction = 0;
    let distance = 0;
    let frame: number | null = null;

    const update = () => {
      frame = null;
      const currentY = scrollPosition();
      const delta = currentY - previousY;
      previousY = currentY;
      const header = headerRef.current;

      if (singleRow.matches || currentY <= (header?.offsetHeight ?? 0) || header?.querySelector(":focus-visible")) {
        direction = 0;
        distance = 0;
        setIsHidden(false);
        return;
      }
      if (delta === 0) return;

      const nextDirection = Math.sign(delta);
      if (direction !== nextDirection) distance = 0;
      direction = nextDirection;
      distance += Math.abs(delta);

      // Accumulate slow scrolling, but ignore tiny direction changes.
      if (distance >= 8) {
        setIsHidden(direction > 0);
        distance = 0;
      }
    };

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(update);
    };
    const reset = () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      frame = null;
      previousY = scrollPosition();
      direction = 0;
      distance = 0;
      setIsHidden(false);
    };
    const onResize = () => {
      // Mobile browser toolbars change viewport height while scrolling.
      if (window.innerWidth !== previousWidth) {
        previousWidth = window.innerWidth;
        reset();
      }
    };

    reset();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    singleRow.addEventListener("change", reset);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      singleRow.removeEventListener("change", reset);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, [currentPath]);

  return (
    <header
      ref={headerRef}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setIsHidden(false);
      }}
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur transition-transform duration-200 ease-out motion-reduce:transition-none md:translate-y-0 has-[:focus-visible]:translate-y-0 has-[:focus-visible]:transition-none",
        isHidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <Container className={cn("grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 py-3 md:grid-cols-[minmax(0,1fr)_auto_auto]", SITE_MAX_WIDTH)}>
        <Link
          href="/"
          className="col-start-1 row-start-1 flex min-h-11 w-fit flex-col justify-center rounded-md font-semibold transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        >
          <span className="text-base/6">橋本大輝</span>
          <span className="text-sm/5 font-normal text-muted-foreground">Daiki Hashimoto</span>
        </Link>
        <nav aria-label="メインナビゲーション / Main navigation" className="col-span-2 row-start-2 flex items-center justify-between gap-1 md:col-span-1 md:col-start-2 md:row-start-1 md:justify-start">
          {navigation.map(({ href, label, english }) => {
            const isCurrent = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isCurrent ? "page" : undefined}
                className={cn(
                  "flex min-h-11 min-w-11 flex-col items-center justify-center rounded-md border-b-2 px-1.5 py-1.5 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:px-3",
                  isCurrent
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-transparent text-muted-foreground hover:bg-accent hover:text-foreground",
                )}
              >
                <span className="whitespace-nowrap text-sm/5 font-semibold">{label}</span>
                <span lang="en" className="whitespace-nowrap text-xs/4">{english}</span>
              </Link>
            );
          })}
        </nav>
        <div className="col-start-2 row-start-1 justify-self-end md:col-start-3">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
