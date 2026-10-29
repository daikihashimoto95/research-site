import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from '@/mdx-components'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export function MDXContent({ content }: { content: string }) {
  const components = useMDXComponents({})
  
  return (
    <div className="text-base/7 sm:text-lg/8">
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
