import { Container } from "@/components/Container"
import { SectionTitle } from "@/components/SectionTitle"
import { Card } from "@/components/Card"
import { MDXContent } from "@/components/MDXContent"
import { getContentBySlug } from "@/lib/mdx"
import { SITE_MAX_WIDTH } from "@/lib/constants"
import { TbBooks, TbNotebook, TbPresentation } from "react-icons/tb"

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

        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title="出版"
            description="Publications and preprints"
            href="/publications"
            icon={TbBooks}
          />
          <Card
            title="学会発表"
            description="Conference presentations"
            href="/presentations"
            icon={TbPresentation}
          />
          <Card
            title="経歴"
            description="CV / Curriculum vitae"
            href="/cv"
            icon={TbNotebook}
          />
        </div>

        {content?.contentBelow && <MDXContent content={content.contentBelow} />}
      </div>
    </Container>
  )
}
