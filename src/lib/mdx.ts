import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'src', 'content')

export type ContentType = 'pages' | 'papers'

export interface ContentMetadata {
  title: string
  subtitle?: string
  description?: string
  date: string
  author?: string
  authors?: string
  tags?: string[]
  published?: boolean
  venue?: string
  year?: number
  status?: "In prep" | "Submitted" | "Published" | "Preprint"
}

export interface ContentItem {
  slug: string
  metadata: ContentMetadata
  content: string
  contentAbove?: string
  contentBelow?: string
}

export function getContentBySlug(type: ContentType, slug: string): ContentItem | null {
  try {
    const realSlug = slug.replace(/\.mdx$/, '')
    const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Split content by <!-- cards --> marker
    const cardsSeparator = '<!-- cards -->'
    const parts = content.split(cardsSeparator)
    
    if (parts.length === 2) {
      return {
        slug: realSlug,
        metadata: data as ContentMetadata,
        content,
        contentAbove: parts[0].trim(),
        contentBelow: parts[1].trim(),
      }
    }

    return {
      slug: realSlug,
      metadata: data as ContentMetadata,
      content,
    }
  } catch (error) {
    return null
  }
}

export function getAllContent(type: ContentType): ContentItem[] {
  const contentDir = path.join(contentDirectory, type)
  
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  const allContent = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, '')
      return getContentBySlug(type, slug)
    })
    .filter((item): item is ContentItem => item !== null)
    .filter((item) => item.metadata.published !== false)
    .sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
    })

  return allContent
}

export function getAllSlugs(type: ContentType): string[] {
  const contentDir = path.join(contentDirectory, type)
  
  if (!fs.existsSync(contentDir)) {
    return []
  }

  const files = fs.readdirSync(contentDir)
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
