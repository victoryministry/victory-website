export interface Content {
  id: string
}

export interface ChurchEventMetadata extends Content {
  name: string
  thumbnail: string
  date: Date | string | number
  location?: string
}

export interface ReflectionMetadata extends Content {
  title: string
  date: Date | string | number
}

export interface Member extends Content {
  name: string
  picture: string
}
