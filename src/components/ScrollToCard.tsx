'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/cn'
import React from 'react'

interface ScrollToCardProps {
  title: string
  description?: string
  targetId: string
  icon?: React.ReactNode
  className?: string
}

export function ScrollToCard({ title, description, targetId, icon, className }: ScrollToCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    // h2要素のテキストコンテンツで検索
    const headings = document.querySelectorAll('h2')
    let target: HTMLElement | null = null
    
    headings.forEach((heading) => {
      const text = heading.textContent || ''
      // targetIdに対応するテキストを含むh2を探す
      if (targetId === 'domestic-conference' && text.includes('国内会議')) {
        target = heading
      } else if (targetId === 'international-conference' && text.includes('国際会議')) {
        target = heading
      }
    })
    
    if (target) {
      const headerOffset = 80 // ヘッダーの高さ分のオフセット
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div 
      onClick={handleClick}
      className="block transition-transform hover:-translate-y-0.5 cursor-pointer"
    >
      <Card className={cn("transition-all hover:shadow-md", className)}>
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              {icon && (
                <div className="mt-0.5 text-muted-foreground">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                <CardTitle className="text-lg">{title}</CardTitle>
              </div>
            </div>
          </div>
        </CardHeader>
        {description && (
          <CardContent className="pt-0">
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
