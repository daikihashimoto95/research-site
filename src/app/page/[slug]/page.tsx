import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { MDXContent } from '@/components/MDXContent'
import { getAllSlugs, getContentBySlug } from '@/lib/mdx'
import { formatDate } from '@/lib/date'
import { SITE_MAX_WIDTH } from '@/lib/constants'

export async function generateStaticParams() {
  const slugs = getAllSlugs('pages').filter(slug => slug !== 'index')
  return slugs.map((slug) => ({ slug }))
}

export default async function PageContent({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const content = getContentBySlug('pages', slug)

  if (!content) {
    notFound()
  }

  return (
    <Container className={SITE_MAX_WIDTH}>
      <SectionTitle 
        title={content.metadata.title}
        subtitle={content.metadata.description}
      />
      
      {content.metadata.date && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <time dateTime={content.metadata.date}>
            {formatDate(content.metadata.date)}
          </time>
        </div>
      )}
      
      <MDXContent content={content.content} />
    </Container>
  )
}
