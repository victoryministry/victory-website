import { ReflectionMetadata } from '~/types'

export const getReflectionFromQuery = ({
  id,
  properties
}: any): ReflectionMetadata => ({
  id,
  date: properties.Date.date?.start,
  title: properties.Title.title[0]?.plain_text
})
