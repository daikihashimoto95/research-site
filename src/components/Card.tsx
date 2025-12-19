import Link from "next/link";
import { cn } from "@/lib/cn";
import { Card as ShadcnCard, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";

export function Card({
  title,
  meta,
  description,
  href,
  badge,
  icon: Icon,
  className,
}: {
  title: string;
  meta?: string;
  description?: string;
  href?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}) {
  const Inner = (
    <ShadcnCard className={cn("transition-all hover:shadow-md", className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 flex-1">
            {Icon && (
              <div className="mt-0.5 text-muted-foreground">
                <Icon className="h-5 w-5" />
              </div>
            )}
            <div className="flex-1">
              <CardTitle className="text-lg">{title}</CardTitle>
              {meta && <CardDescription className="mt-1.5">{meta}</CardDescription>}
            </div>
          </div>
          {badge && <Badge variant="secondary">{badge}</Badge>}
        </div>
      </CardHeader>
      {description && (
        <CardContent className="pt-0">
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      )}
    </ShadcnCard>
  );

  return href ? (
    <Link href={href} className="block transition-transform hover:-translate-y-0.5">
      {Inner}
    </Link>
  ) : (
    Inner
  );
}
