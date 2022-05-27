import { listMerger, notion } from '~/helpers/server'

export const getEvents = async () => {
  return notion.databases.query({
    database_id: process.env.NOTION_EVENT_DATABASE,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published'
      }
    },
    sorts: [{ property: 'Date', direction: 'descending' }]
  })
}

export const getEvent = async (id: string) => {
  const page = await notion.pages.retrieve({
    page_id: id
  })

  const blocks = await notion.blocks.children.list({
    block_id: id
  })

  const mergedBlocks = blocks.results.reduce(listMerger, [])

  return {
    page,
    mergedBlocks
  }
}
