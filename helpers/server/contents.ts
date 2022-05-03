import fs from 'fs'
import {
  ChurchEventMetadata,
  ChurchEventPreview,
  ReflectionMetadata,
  ReflectionPreview
} from '~/types'
import { cleanFileName, parseMarkdown } from './markdown'
import { eventsDir, reflectionsDir } from './paths'

export const eventPreviews: ChurchEventPreview[] = fs
  .readdirSync(eventsDir)
  .map((fileName) => {
    const id = cleanFileName(fileName)
    const { data } = parseMarkdown(eventsDir, id)
    return {
      id,
      data: data as ChurchEventMetadata
    }
  })

export const reflectionPreviews: ReflectionPreview[] = fs
  .readdirSync(reflectionsDir)
  .map((fileName) => {
    const id = cleanFileName(fileName)
    const { data } = parseMarkdown(reflectionsDir, id)
    return {
      id,
      data: data as ReflectionMetadata
    }
  })
