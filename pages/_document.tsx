import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="is-preload">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
