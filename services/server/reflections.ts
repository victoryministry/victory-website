import { listMerger, notion } from '~/helpers/server'

export const getReflections = async () => {
  return notion.databases.query({
    database_id: process.env.NOTION_REFLECTION_DATABASE,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published'
      }
    },
    sorts: [{ property: 'Date', direction: 'descending' }]
  })
}

export const getReflection = async (id: string) => {
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
