import Link from "next/link";
import { cn } from "@/lib/cn";
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TbArrowRight } from "react-icons/tb";
import React from "react";

export function Card({
  title,
  meta,
  description,
  href,
  badge,
  icon: Icon,
  className,
  onClick,
}: {
  title: string;
  meta?: string;
  description?: string;
  href?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const Inner = (
    <ShadcnCard className={cn("flex h-full flex-col rounded-xl border-border/80 shadow-none transition-colors motion-reduce:transition-none", href && "group-hover:border-primary/50 group-hover:bg-accent/30 group-focus-visible:border-primary", className)}>
      <CardHeader className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            {Icon && (
              <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="min-w-0 flex-1 pt-1">
              <CardTitle className="break-words">{title}</CardTitle>
              {meta && <CardDescription className="mt-1.5">{meta}</CardDescription>}
            </div>
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
          {href && <TbArrowRight aria-hidden="true" className="mt-2 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />}
        </div>
      </CardHeader>
      {description && (
        <CardContent className="flex-1 px-5 pb-5 pt-0">
          <p className="text-sm/6 text-muted-foreground">{description}</p>
        </CardContent>
      )}
    </ShadcnCard>
  );

  return href ? (
    <Link href={href} className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background" onClick={onClick}>
      {Inner}
    </Link>
  ) : (
    Inner
  );
}
