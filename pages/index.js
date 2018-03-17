import React from 'react'

import globalStyles from '../static/globalStyles'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer navActive={0}>
        <div style={styles.main}>
          <h5>about snorthw<a href="http://markdua.tumblr.com/post/16090871196" style={{textDecoration: 'none', color: globalStyles.bodyColor}}>a</a>y</h5>
          <div style={styles.imgContainer}>
            <img src='/static/profile.jpg' style={styles.img} alt="working on a computer while wearing a baseball cap"/>
            <img src='/static/microscope.png' style={styles.img} alt="looking into a microscope"/>
            <img src='/static/sawing.jpg' style={styles.img} alt="using a diamond saw to cut a champagne bottle in half"/>
          </div>
          <p style={styles.p}>
            Rural Minnesota native, now Boston-based, currently working as a software applications
      engineer at RightHand Robotics. 
            I care deeply about advancing technical literacy and preparing the workforce for a more automated world.
            Over the past 2 years I have organized/taught a <a style={styles.link} href="https://girlswhocode.com">Girls Who Code</a> club, co-taught a high school 
            computer science class through <a style={styles.link} href="https://tealsk12.org">TEALS</a>, and 
            served as a private calculus tutor.
          </p>
          <p style={styles.p}>
            Work-wise I'm proficient with Python, web and iOS development, and have worked almost exclusively for hardware startups. In my spare time I try to 
      actually use my electrical engineering degree. Check out my <a style={styles.link} href='projects'>projects</a> to see what I've been up to.
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
