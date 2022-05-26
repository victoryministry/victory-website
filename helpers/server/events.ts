import { ChurchEventMetadata } from '~/types'

export const getEventsFromQuery = ({
  id,
  properties
}: any): ChurchEventMetadata => ({
  id,
  date: properties.Date.date?.start,
  location: properties.Location.rich_text[0]?.text?.content,
  name: properties.Name.title[0]?.plain_text,
  thumbnail: properties.Thumbnail?.files[0]?.file?.url
})
