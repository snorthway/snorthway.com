import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  pages = ["about", "contact"]

  render() {

    const navLinks = this.pages.map((pageName) => {
      return (
        <Link href={`/${pageName}`} className={this.props.page === pageName ? "current" : ""}>
          {pageName}
        </Link>
      )
    })

    return (
      <div>
        <Head>
          <title>snorthway.com - Your number one source for snorthway-related news and information</title>
        </Head>
        <header>
          <h1>snorthway dot com</h1>
          <nav>
            {navLinks}
          </nav>
        </header>
        <main>
          {this.props.children}
        </main>
        <footer>
          ©️2025 S. Northway
        </footer>
      </div>
    )
  }
}


export default MainContainer
