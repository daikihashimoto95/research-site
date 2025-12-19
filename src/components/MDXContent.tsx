import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'

export function MDXContent({ content }: { content: string }) {
  const components = useMDXComponents({})
  
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote source={content} components={components} />
    </div>
  )
}
