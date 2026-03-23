import janvier from '@/content/blog/ecosse-en-van-en-janvier.json'
import fevrier from '@/content/blog/ecosse-en-van-en-fevrier.json'
import mars from '@/content/blog/ecosse-en-van-en-mars.json'
import avril from '@/content/blog/ecosse-en-van-en-avril.json'
import mai from '@/content/blog/ecosse-en-van-en-mai.json'
import juin from '@/content/blog/ecosse-en-van-en-juin.json'
import juillet from '@/content/blog/ecosse-en-van-en-juillet.json'
import aout from '@/content/blog/ecosse-en-van-en-aout.json'
import septembre from '@/content/blog/ecosse-en-van-en-septembre.json'
import octobre from '@/content/blog/ecosse-en-van-en-octobre.json'
import novembre from '@/content/blog/ecosse-en-van-en-novembre.json'
import decembre from '@/content/blog/ecosse-en-van-en-decembre.json'

export type ArticleImage = {
  src: string
  alt: string
  credit?: string
}

export type ArticleSection = {
  id: string
  title: string
  content: string
  image?: ArticleImage
}

export type Article = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  publishedAt: string
  isPublished: boolean
  month: number
  country: string
  heroImage: ArticleImage
  tags: string[]
  sections: ArticleSection[]
}

const allArticles: Article[] = [
  janvier,
  fevrier,
  mars,
  avril,
  mai,
  juin,
  juillet,
  aout,
  septembre,
  octobre,
  novembre,
  decembre,
] as Article[]

export function getAllArticles(): Article[] {
  return allArticles.sort((a, b) => a.month - b.month)
}

export function getPublishedArticles(): Article[] {
  const now = new Date()
  return getAllArticles().filter(
    (a) => a.isPublished && new Date(a.publishedAt) <= now
  )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug)
}

export function getRelatedArticles(currentSlug: string, limit = 3): Article[] {
  const published = getPublishedArticles().filter((a) => a.slug !== currentSlug)
  return published.slice(0, limit)
}

const MONTH_NAMES = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
]

export function getMonthName(month: number): string {
  return MONTH_NAMES[month - 1] || ''
}
