import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
 
class Document extends React.Component {
    render() {
        return (
            <Html>
              <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" rel="stylesheet"></link>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Andada" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Hind:700" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          )
    }
}

export default Document