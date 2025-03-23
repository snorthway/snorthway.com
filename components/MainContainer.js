import React from 'react'
import Head from 'next/head'
import Document from 'next/document'
import PropTypes from 'prop-types'

import globalStyles from '../styles/globalStyles'

import NavigationBar from '../components/NavigationBar'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.mainContainer}>
        <Head>
          <title>snorthway.com - Your number one source for snorthway-related news and information</title>
        </Head>
        <div style={styles.contentContainer}>
          {/* <NavigationBar active={this.props.navActive}/> */}
          <hr style={styles.hr}/>
          {this.props.children}
        </div>
        <footer style={styles.footer}>
          <hr style={styles.hr}/>
          ©️2025 S. Northway
        </footer>
      </div>
    )
  }
}

MainContainer.propTypes = {
  navActive: PropTypes.number.isRequired
}

const styles = {
  mainContainer: {
    minHeight: 900,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'black',
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
