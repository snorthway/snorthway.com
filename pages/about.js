import React from 'react'
import { style } from 'next/css'

import globalStyles from '../static/globalStyles'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer navActive={0}>
        <div className={style(styles.main)}>
          <h5>about snorthw<a href="http://markdua.tumblr.com/post/16090871196" className={style({textDecoration: 'none', color: globalStyles.bodyColor})}>a</a>y</h5>
          <div className={style(styles.imgContainer)}>
            <img src='/static/profile.jpg' className={style(styles.img)} alt="working on a computer while wearing a baseball cap"/>
            <img src='/static/microscope.png' className={style(styles.img)} alt="looking into a microscope"/>
            <img src='/static/sawing.jpg' className={style(styles.img)} alt="using a diamond saw to cut a champagne bottle in half"/>
          </div>
          <p className={style(styles.p)}>
            Rural Minnesota native, now Boston-based, currently working as a software applications
	    engineer at RightHand Robotics. 
            I care deeply about advancing technical literacy and preparing the workforce for a more automated world.
            Over the past 2 years I have organized/taught a <a className={style(styles.link)} href="https://girlswhocode.com">Girls Who Code</a> club, co-taught a high school 
            computer science class through <a className={style(styles.link)} href="https://tealsk12.org">TEALS</a>, and 
            served as a private calculus tutor.
          </p>
          <p className={style(styles.p)}>
            Work-wise I'm most experienced with web and iOS development, but in my spare time I try to 
	    actually use my electrical engineering degree. Topics of interest right now 
	    include PCB layout, reverse engineering, and digital networks.
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
