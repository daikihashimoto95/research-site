import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { cn } from '@/lib/cn'

export function MDXContent({ content, variant = 'default' }: { content: string; variant?: 'default' | 'records' }) {
  const components = useMDXComponents({})
  
  return (
    <div className={cn("text-base/7 [overflow-wrap:anywhere]", variant === 'records' && "[&_li+li]:mt-6 [&_li+li]:border-t [&_li+li]:border-border/70 [&_li+li]:pt-6")}>
      <MDXRemote 
        source={content} 
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
          },
        }}
      />
    </div>
  )
}
