import { PropsWithChildren } from 'react'

export type ArticleProps = PropsWithChildren<{
  title: string
  linkUrl: string
  imageUrl: string
}>

export default function Article({
  linkUrl,
  title,
  children,
  imageUrl
}: ArticleProps) {
  return (
    <article>
      <a href={linkUrl} className="image">
        <img src={imageUrl} alt="" />
      </a>
      <h3 className="major">{title}</h3>
      {children}
      <a href={linkUrl} className="special">
        Learn more
      </a>
    </article>
  )
}
