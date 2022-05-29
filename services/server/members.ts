import { notion } from '~/helpers/server'

export const getMembers = async () => {
  return notion.databases.query({
    database_id: process.env.NOTION_MEMBER_DATABASE,
    sorts: [{ property: 'Order', direction: 'ascending' }]
  })
}
