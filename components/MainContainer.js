import React from 'react'
import { style } from 'next/css'
import Head from 'next/head'

import NavigationBar from '../components/NavigationBar'

const MainContainer = React.createClass({

  propTypes: {
    children: React.PropTypes.any
  },

  render: () => {
    console.log(this)
    return (
      <div className={style(styles.mainContainer)}>
        <Head>
          <title>snorthway.com</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" rel="stylesheet"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Andada" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Hind:700" rel="stylesheet"></link>
          <link rel="icon" href="/static/favicon.png" type="image/png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <div className={style(styles.contentContainer)}>
          <NavigationBar active={0}/>
          <hr className={style(styles.hr)}/>
        </div>
      </div>
    )
  }
})

const styles = {
  mainContainer: {
    height: 900,
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: 'url(/static/R1-02548-006Ae.jpg)',
    backgroundPosition: 'center',
    fontFamily: 'Hind',
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    color: '#D6DDF1',
    backgroundImage: 'linear-gradient(-180deg, rgba(32,14,14,0.00) 0%, rgba(6,44,79,0.85) 59%)',
  },

  hr: {
    // borderColor: '#C5E1FE',
    borderColor: '#87FFFB',
    width: '85%',
  },
}

export default MainContainer
