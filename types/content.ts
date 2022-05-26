export interface Page {
  id: string
}

export interface ChurchEventMetadata extends Page {
  name: string
  thumbnail: string
  date: Date | string | number
  location?: string
}

export interface ReflectionMetadata extends Page {
  title: string
  date: Date | string | number
}
