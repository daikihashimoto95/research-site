import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { Card } from "@/components/Card"
import { MDXContent } from "@/components/MDXContent"
import { getContentBySlug } from "@/lib/mdx"
import { SITE_MAX_WIDTH } from "@/lib/constants"
import { TbFileText, TbPresentation } from "react-icons/tb"

export default async function HomePage() {
  const content = getContentBySlug('pages', 'index')

  return (
    <Container className={SITE_MAX_WIDTH}>
      <SectionTitle
        title={content?.metadata.title || "Research"}
        subtitle={content?.metadata.subtitle}
      />

      <div className="space-y-8">
        {content?.contentAbove && <MDXContent content={content.contentAbove} />}

        <div className="grid gap-4 sm:grid-cols-2">
          <Card
            title="出版&nbsp;&nbsp;&nbsp;Publications"
            description="Publications and preprints"
            href="/publications"
            icon={TbFileText}
          />
          <Card
            title="学会発表&nbsp;&nbsp;&nbsp;Conference talks"
            description="Conference talks and presentations"
            href="/talks"
            icon={TbPresentation}
          />
        </div>

        {content?.contentBelow && <MDXContent content={content.contentBelow} />}
      </div>
    </Container>
  )
}
