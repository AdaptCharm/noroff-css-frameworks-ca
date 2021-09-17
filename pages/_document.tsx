import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className='h-100' lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato&family=Playfair+Display:ital,wght@0,400;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='h-100 bg-gradient loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
