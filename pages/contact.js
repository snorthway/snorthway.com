import React from 'react'
import { style } from 'next/css'

import globalStyles from '../static/globalStyles'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer navActive={2}>
        <div className={style(styles.main)}>
          <h5 className={style(styles.h5)}>how to contact snorthway</h5>
          <p>
            Email me at &nbsp;
            <a 
              href="mailto:snorthway.info@gmail.com"
              className={style(styles.link)}
            >
               snorthway.info@gmail.com
            </a>
          </p>
          <p>
            Follow or collaborate with me on &nbsp;
            <a
              href="https://github.com/snorthway"
              className={style(styles.link)}
            >
              Github
            </a>
          </p>
          <p>
            Tweet your thoughts at &nbsp;
            <a 
              href="https://twitter.com/sn0rthway" 
              className={style(styles.link)}
            >
               @sn0rthway
            </a>
          </p>
          <p>
            "Connect" with me or just creep my profile on &nbsp;
            <a 
              href="https://www.linkedin.com/pub/stephanie-northway/54/b59/795"
              className={style(styles.link)}
            >
            LinkedIn
            </a>
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
    textAlign: 'left',
  },
  link: {
    textDecoration: 'none',
    color: globalStyles.accentColor,
    ':hover': globalStyles.bodyColor,
  },
  h5: {
    textAlign: 'center',
  }
}