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
      
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <ScrollToCard
          title="国内会議&nbsp;&nbsp;&nbsp;Domestic conferences"
          description="国内会議での発表"
          targetId="domestic-conference"
          icon={<TbMapPin className="h-5 w-5" />}
          className="[&_[data-card-header]]:py-2 [&_[data-card-header]]:px-4 [&_[data-card-content]]:pb-2 [&_[data-card-content]]:px-4"
        />
        <ScrollToCard
          title="国際会議&nbsp;&nbsp;&nbsp;International conferences"
          description="国際会議での発表"
          targetId="international-conference"
          icon={<TbWorld className="h-5 w-5" />}
          className="[&_[data-card-header]]:py-2 [&_[data-card-header]]:px-4 [&_[data-card-content]]:pb-2 [&_[data-card-content]]:px-4"
        />
      </div>

      <MDXContent content={content.content} />
    </Container>
  )
}
