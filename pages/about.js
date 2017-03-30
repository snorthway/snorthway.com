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
            Rural Minnesota native, now Boston-based engineer (Olin College Class of 2015, Electrical and Computer Engineering). 
            I care deeply about advancing environmental sustainability and technical literacy. On the side, I co-teach a high school 
            computer science class and serve as a private calculus tutor.         
          </p>
          <p className={style(styles.p)}>
            <span className={style({color: globalStyles.accentColor})}>Currently looking for new work!</span> I have 
            2+ years of web, backend (python/node) and iOS development experience, but am now looking to 
            move down the abstraction ladder and into firmware/embedded development or electrical engineering. 
            Seeking hardware companies with social/environmental 
            or otherwise altruistic missions. Very interested in the information security industry as well. 
            Comfortable with scrappy startup environments and learning on the fly.
            
          </p>
          <p className={style(styles.p)}>
            Favorite comic is "Mark Doesn't Understand Animals". I like easter eggs.
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
  }
}
