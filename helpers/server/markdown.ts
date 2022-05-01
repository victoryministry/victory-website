import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Remarkable } from 'remarkable'

export const cleanFileName = (fileName: string) => fileName.replace(/\.md$/, '')

export function parseMarkdown(folderPath: string, id: string) {
  const md = new Remarkable()

  const fileContent = fs.readFileSync(path.join(folderPath, `${id}.md`))

  const { content, data } = matter(fileContent)
  const parsed = md.render(content)

  return {
    data,
    parsed
  }
}
