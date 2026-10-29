import type { ReactNode } from 'react'
import { processChildren } from '@/lib/icons'

export function HeadingText({ children }: { children: ReactNode }) {
  if (typeof children !== 'string') return processChildren(children)

  // Treat the MDX separator as a language boundary, with spacing set by CSS.
  const parts = children.split(/[ \t]*(?:&nbsp;|\u00a0)+[ \t]*/)
  if (parts.length !== 2) return processChildren(children)

  return (
    <span className="inline-flex max-w-full flex-wrap items-baseline gap-x-4 gap-y-1">
      <span>{processChildren(parts[0])}</span>{' '}
      <span lang="en" className="min-w-0">{processChildren(parts[1])}</span>
    </span>
  )
}
