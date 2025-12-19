'use client'

import React from 'react'

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

  return (
    <div className="my-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center gap-2 text-left scroll-m-20 text-2xl font-semibold tracking-tight mb-4 hover:opacity-70 transition-opacity"
      >
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <h3 className="m-0">{year}</h3>
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  )
}
