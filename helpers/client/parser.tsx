import { Fragment } from 'react'
import NotionRichText from '~/components/Notion/RichText'

export const notionParser = (blocks: any[]) => {
  return blocks.map((block, index) => {
    if (Array.isArray(block))
      return block[0].type === 'bulleted_list_item' ? (
        <ul key={index}>
          {block.map((item) => (
            <li key={item.id}>
              <NotionRichText rich_text={item[item.type].rich_text} />
            </li>
          ))}
        </ul>
      ) : (
        <ol key={index}>
          {block.map((item) => (
            <li key={item.id}>
              <NotionRichText rich_text={item[item.type].rich_text} />
            </li>
          ))}
        </ol>
      )

    switch (block.type) {
      case 'paragraph':
        return (
          <p key={block.id}>
            <NotionRichText rich_text={block[block.type].rich_text} />
          </p>
        )
      case 'heading_1':
        return (
          <h1 key={block.id} className="major">
            <NotionRichText rich_text={block[block.type].rich_text} />
          </h1>
        )
      case 'heading_2':
        return (
          <h2 key={block.id} className="major">
            <NotionRichText rich_text={block[block.type].rich_text} />
          </h2>
        )
      case 'heading_3':
        return (
          <h3 key={block.id} className="major">
            <NotionRichText rich_text={block[block.type].rich_text} />
          </h3>
        )
      case 'quote':
        return (
          <blockquote key={block.id}>
            <NotionRichText rich_text={block[block.type].rich_text} />
          </blockquote>
        )
      case 'image':
        return (
          <img
            loading="lazy"
            className="image fit"
            key={block.id}
            src={block[block.type].file.url}
            alt=""
          />
        )
      default:
        return <Fragment key={block.id} />
    }
  })
}
