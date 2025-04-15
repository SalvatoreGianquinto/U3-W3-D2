interface Article {
  id: number
  title: string
  authors: {
    name: string
    socials: string | null
  }[]
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: string
  updated_at: string
  featured: boolean
}

export default Article
