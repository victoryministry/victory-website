import { PropsWithChildren } from 'react'
import Link from 'next/link'

export type ArticleProps = PropsWithChildren<{
  title: string
  linkUrl: string
  imageUrl?: string
}>

export default function Article({
  linkUrl,
  title,
  children,
  imageUrl
}: ArticleProps) {
  return (
    <article>
      {imageUrl && (
        <Link href={linkUrl}>
          <a className="image">
            <img src={imageUrl} alt="" />
          </a>
        </Link>
      )}
      <Link href={linkUrl}>
        <a>
          <h3 className="major">{title}</h3>
        </a>
      </Link>
      {children}
      <Link href={linkUrl}>
        <a className="special">Learn more</a>
      </Link>
    </article>
  )
}
