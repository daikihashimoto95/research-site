import { notFound } from 'next/navigation'
import { Container } from '@/components/Container'
import { SectionTitle } from '@/components/SectionTitle'
import { ScrollToCard } from '@/components/ScrollToCard'
import { MDXContent } from '@/components/MDXContent'
import { getContentBySlug } from '@/lib/mdx'
import { SITE_MAX_WIDTH } from '@/lib/constants'
import { TbMapPin, TbWorld } from 'react-icons/tb'

export default async function PresentationsPage() {
  const content = getContentBySlug('pages', 'presentations')

  if (!content) {
    notFound()
  }

  return (
    <Container className={SITE_MAX_WIDTH}>
      <SectionTitle title={content.metadata.title} />
      
      <div className="grid gap-4 sm:grid-cols-2 mb-12">
        <ScrollToCard
          title="国内会議"
          description="Domestic conferences"
          targetId="domestic-conference"
          icon={<TbMapPin className="h-5 w-5" />}
        />
        <ScrollToCard
          title="国際会議"
          description="International conferences"
          targetId="international-conference"
          icon={<TbWorld className="h-5 w-5" />}
        />
      </div>

      <MDXContent content={content.content} variant="records" />
    </Container>
  )
}
