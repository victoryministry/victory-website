import path from 'path'

export const contentDir = path.join(process.cwd(), 'contents')
export const eventsDir = path.join(contentDir, 'events')
export const reflectionsDir = path.join(contentDir, 'reflections')
export const eventImages = (eventId: string) => `/uploads/${eventId}`
