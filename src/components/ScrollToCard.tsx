import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/cn'
import React from 'react'
import { TbArrowDown } from 'react-icons/tb'

interface ScrollToCardProps {
  title: string
  description?: string
  targetId: string
  icon?: React.ReactNode
  className?: string
}

export function ScrollToCard({ title, description, targetId, icon, className }: ScrollToCardProps) {
  return (
    <a
      href={`#${targetId}`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
    >
      <Card className={cn("flex h-full flex-col rounded-xl border-border/80 shadow-none transition-colors group-hover:border-primary/50 group-hover:bg-accent/30 group-focus-visible:border-primary motion-reduce:transition-none", className)}>
        <CardHeader className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              {icon && (
                <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  {icon}
                </div>
              )}
              <div className="min-w-0 flex-1 pt-1">
                <CardTitle className="break-words">{title}</CardTitle>
              </div>
            </div>
            <TbArrowDown aria-hidden="true" className="mt-2 h-5 w-5 shrink-0 text-muted-foreground group-hover:text-primary" />
          </div>
        </CardHeader>
        {description && (
          <CardContent className="flex-1 px-5 pb-5 pt-0">
            <p className="text-sm/6 text-muted-foreground">{description}</p>
          </CardContent>
        )}
      </Card>
    </a>
  )
}
