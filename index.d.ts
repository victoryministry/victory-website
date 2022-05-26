declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_API_KEY: string
      NOTION_EVENT_DATABASE: string
      NOTION_REFLECTION_DATABASE: string
      NOTION_MEMBER_DATABASE: string
    }
  }
}
export {}
