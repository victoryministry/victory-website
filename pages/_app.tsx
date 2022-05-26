import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect } from 'react'
import { Footer, Header, Wrapper } from '~/components'
import '~/styles/main.css'

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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>

      <div id="page-wrapper">
        <Header />

        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
        <Footer />
      </div>

      <Script strategy="beforeInteractive" src="/assets/js/jquery.min.js" />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/breakpoints.min.js"
      />
      <Script src="/assets/js/jquery.scrollex.min.js" />
      <Script src="/assets/js/browser.min.js" />
      <Script src="/assets/js/util.js" />
      <Script src="/assets/js/main.js" />
    </>
  )
}
