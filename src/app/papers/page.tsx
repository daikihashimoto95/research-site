import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { MDXContent } from '@/components/MDXContent'
import { getContentBySlug } from '@/lib/mdx'
import { SITE_MAX_WIDTH } from '@/lib/constants'

export default async function PapersPage() {
  const content = getContentBySlug('pages', 'papers')

  if (!content) {
    notFound()
  }

  return (
    <Container className={SITE_MAX_WIDTH}>
      <SectionTitle title={content.metadata.title} />
      <MDXContent content={content.content} />
    </Container>
  )
}
