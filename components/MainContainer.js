import React from 'react'
import { style } from 'next/css'
import Head from 'next/head'

import globalStyles from '../static/globalStyles'

import NavigationBar from '../components/NavigationBar'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={style(styles.mainContainer)}>
        <Head>
          <title>snorthway.com - Your number one source for snorthway-related news and information</title>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" rel="stylesheet"></link>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/6.0.0/normalize.min.css" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Andada" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Hind:700" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
          <link rel="icon" href="/static/favicon.png" type="image/png" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <div className={style(styles.contentContainer)}>
          <NavigationBar active={this.props.navActive}/>
          <hr className={style(styles.hr)}/>
          {this.props.children}
        </div>
        <footer className={style(styles.footer)}>
          <hr className={style(styles.hr)}/>
          ©️2017 S. Northway
        </footer>
      </div>
    )
  }
}

MainContainer.propTypes = {
  navActive: React.PropTypes.number.isRequired
}

const styles = {
  mainContainer: {
    minHeight: 900,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    background: 'url(/static/photo_overlay_bw.png) no-repeat center center fixed',
    backgroundSize: 'cover',
    fontFamily: globalStyles.headingFont,
  },
  contentContainer: {
    height: '100%',
    width: '100%',
    textAlign: 'center',
    overflowY: 'scroll',
  },
  footer: {
    color: globalStyles.bodyColor,
    fontFamily: globalStyles.bodyFont,
    width: '100%',
    textAlign: 'center',
    paddingBottom: '5%',
  },
  hr: {
    // borderColor: '#C5E1FE',
    // borderColor: '#87FFFB',
    borderColor: globalStyles.accentColor,
    width: '85%',
  },
}

export default MainContainer
