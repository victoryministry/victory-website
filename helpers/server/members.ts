import { Member } from '~/types'

export const getMemberFromQuery = ({ id, properties }: any): Member => ({
  id,
  name: properties.Name.title[0].plain_text,
  picture: properties.Picture.files[0].file.url
})
