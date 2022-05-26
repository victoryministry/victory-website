import { useEffect } from 'react'

export const useBackgroundEffect = (bgUrl: string) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-image', `url('${bgUrl}')`)
    return () =>
      document.documentElement.style.setProperty(
        '--bg-image',
        `url('/images/bg.webp')`
      )
  })
}
