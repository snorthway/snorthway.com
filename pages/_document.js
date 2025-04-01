import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
 
class Document extends React.Component {
    render() {
        return (
            <Html>
              <Head>
                <link href="https://cdn.simplecss.org/simple.min.css" rel="stylesheet"></link>
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