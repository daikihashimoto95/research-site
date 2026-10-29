import type { MDXComponents } from 'mdx/types'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ContactIcon, processChildren } from '@/lib/icons'
import { CollapsibleYear } from '@/components/CollapsibleYear'

function slugify(text: string): string {
  return text
    .toString()
    .replace(/:[a-z][a-z-]*:/gi, '')
    .replace(/&nbsp;|\u00A0/g, ' ')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-mt-4 text-[1.75rem]/9 font-medium tracking-normal text-balance mb-4">
        {processChildren(children)}
      </h1>
    ),
    h2: ({ children, id: explicitId }) => {
      const id = explicitId ?? (typeof children === 'string' ? slugify(children) : undefined)
      return (
        <h2 id={id} className="scroll-mt-4 border-b border-border pb-3 text-[1.375rem]/7 font-medium tracking-normal text-balance first:mt-0 mt-12 mb-5">
          {processChildren(children)}
        </h2>
      )
    },
    h3: ({ children }) => (
      <h3 className="scroll-mt-4 text-base/6 font-medium tracking-normal mt-8 mb-4">
        {processChildren(children)}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-mt-4 text-sm/5 font-medium tracking-normal mt-6 mb-3">
        {processChildren(children)}
      </h4>
    ),
    p: ({ children }) => (
      <p className="[&:not(:first-child)]:mt-6 font-normal">
        {processChildren(children)}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li>
        {processChildren(children)}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {children}
      </blockquote>
    ),
    code: ({ children, ...props }) => (
      <code 
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
        {...props}
      >
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-muted p-4">
        {children}
      </pre>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="rounded-sm font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-current focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    hr: () => <Separator className="my-8" />,
    table: ({ children }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table className="w-full">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
    ),
    CollapsibleYear,
    ContactIcon,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Button,
    ...components,
  }
}
