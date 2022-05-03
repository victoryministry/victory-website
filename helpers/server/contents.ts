import fs from 'fs'
import {
  ChurchEvent,
  ChurchEventPreview,
  Reflection,
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
      data: data as ChurchEvent
    }
  })

export const reflectionPreviews: ReflectionPreview[] = fs
  .readdirSync(reflectionsDir)
  .map((fileName) => {
    const id = cleanFileName(fileName)
    const { data } = parseMarkdown(reflectionsDir, id)
    return {
      id,
      data: data as Reflection
    }
  })
