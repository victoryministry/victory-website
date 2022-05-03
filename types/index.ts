export interface ParsedMarkdown<T> {
  data: T
  parsed: string
}

export interface Preview<T> {
  id: string
  data: T
}

export interface MarkdownPage extends ParsedMarkdown<{}> {}

export interface ChurchEventMetadata {
  title: string
  date: Date | string | number
  location?: string
}

export type ChurchEvent = ParsedMarkdown<ChurchEventMetadata>
export type ChurchEventPreview = Preview<ChurchEventMetadata>

export interface ReflectionMetadata {
  title: string
  date: Date | string | number
}

export type ReflectionPreview = Preview<ReflectionMetadata>
export type Reflection = ParsedMarkdown<ReflectionMetadata>
