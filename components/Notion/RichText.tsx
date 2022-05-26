import clsx from 'clsx'
import { Fragment } from 'react'
import classes from '~/styles/notion.module.css'
import { RichText } from '~/types'

export type NotionRichTextProps = {
  rich_text: RichText[]
}

export default function NotionRichText({ rich_text }: NotionRichTextProps) {
  return (
    <>
      {rich_text.map((value, index) => {
        const {
          annotations: { bold, italic, underline },
          href,
          plain_text,
          type
        } = value

        if (!plain_text || type !== 'text') return <Fragment key={index} />

        return (
          <span
            key={index}
            className={clsx({
              [classes.bold]: bold,
              [classes.italic]: italic,
              [classes.underline]: underline
            })}>
            {href ? <a href={href}>{plain_text}</a> : plain_text}
          </span>
        )
      })}
    </>
  )
}
