import React from 'react'

import globalStyles from '../styles/globalStyles'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer navActive={0}>
        <div style={styles.main}>
          <h5>about snorthw<a href="http://markdua.tumblr.com/post/16090871196" style={{textDecoration: 'none', color: globalStyles.bodyColor}}>a</a>y</h5>
          <p style={styles.p}>
            snorthway is currently re-doing this website, stay tuned please
          </p>
        </div>
        </MainContainer>
      </div>
    )
  }
}

const styles = {
  main: {
    width: '75%',
    maxWidth: '800px',
    color: globalStyles.bodyColor,
    margin: '0 auto',
    fontFamily: globalStyles.bodyFont,
  },
  imgContainer: {
    height: '20%',
    width: '85%',
    margin: '5% auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  img: {
    width: '30%',
    height: 'auto',
  },
  p: {
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
    color: globalStyles.accentColor
  }
}
