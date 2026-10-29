'use client'

import React from 'react'
import { TbChevronDown } from 'react-icons/tb'

export function CollapsibleYear({ 
  year, 
  children,
  defaultOpen = false 
}: { 
  year: string
  children: React.ReactNode
  defaultOpen?: boolean 
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen)
  const headingId = React.useId()
  const contentId = React.useId()

  return (
    <section aria-labelledby={headingId} className="my-8 overflow-hidden rounded-xl border border-border/80 bg-card">
      <h3 id={headingId} className="m-0">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-h-14 w-full items-center justify-between gap-4 bg-muted/40 px-5 py-4 text-left text-base/6 font-medium tabular-nums transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring motion-reduce:transition-none"
        >
          <span>{year}</span>
          <TbChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      <div id={contentId} hidden={!isOpen} className="px-5 pb-2">
        {children}
      </div>
    </section>
  )
}
