export interface ParsedMarkdown<T> {
  data: T
  parsed: string
}

export interface Preview<T> {
  id: string
  data: T
}

export interface MarkdownPage extends ParsedMarkdown<{}> {}

export interface ChurchEventImage {
  caption: string
  image: string
}

export interface ChurchEvent {
  title: string
  date: Date | string | number
  location?: string
  description?: string
  images?: ChurchEventImage[]
}

export type ChurchEventPreview = Preview<ChurchEvent>

export interface Reflection {
  title: string
  date: Date | string | number
  description?: string
}

export type ReflectionPreview = Preview<Reflection>
