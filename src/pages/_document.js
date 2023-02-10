import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*NOTE: 1.-crossorigin=>crossOrigin y poner como string ,evitar el error con el styleshhet,mayor nivelqye app.js    */}
        <meta name="description"cotennt="GuitarLA - Venta de guitarras y blog de musica  "></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" 
        crossOrigin={'true'} 
        />
        <link  rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"/>
        <link href='https://necolas.github.io/normalize.css/8.0.1/normalize.css'/>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
