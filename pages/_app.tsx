import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { theme } from '~/mantine.theme'

nProgress.configure({ showSpinner: false })

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  useEffect(() => {
    const handleStart = () => {
      nProgress.start()
    }
    const handleStop = () => {
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <RecoilRoot>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </RecoilRoot>
    </>
  )
}
