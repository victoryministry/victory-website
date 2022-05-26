import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export type SpotlightProps = PropsWithChildren<{
  title: string
  imageUrl: string
  linkUrl: string
  alt?: boolean
  style: '1' | '2' | '3'
}>

export default function Spotlight({
  imageUrl,
  linkUrl,
  style,
  title,
  alt,
  children
}: SpotlightProps) {
  return (
    <section
      id="one"
      className={clsx('wrapper spotlight', { alt }, `style${style}`)}>
      <div className="inner">
        <a href={linkUrl} className="image">
          <img src={imageUrl} alt="" />
        </a>
        <div className="content">
          <h2 className="major">{title}</h2>
          {children}
          <a href={linkUrl} className="special">
            Learn more
          </a>
        </div>
      </div>
    </section>
  )
}
