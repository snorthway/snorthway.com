import React from 'react'
import { style } from 'next/css'

import NavigationBar from '../components/NavigationBar'

export default class extends React.Component {
  render() {
    return (
      <div className={style(styles.mainContainer)}>
        <div className={style(styles.contentContainer)}>
          <h1 className={style(styles.title)}>Hello</h1>
          <hr className={style(styles.hr)}/>
          <NavigationBar/>
        </div>
      </div>
    )
  }
}

const styles = {
  mainContainer: {
    height: 900,
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: 'url(/static/R1-02548-006Ae.jpg)',
    backgroundPosition: 'center',
  },
  contentContainer: {
    height: '100%',
    width: '75%',
    textAlign: 'center',
    color: '#D6DDF1',
    backgroundImage: 'linear-gradient(-180deg, rgba(32,14,14,0.00) 0%, rgba(6,44,79,0.85) 59%)',
  },
  title: {
    fontSize: 50,
    color: '#9C99D2',
  },
  hr: {
    borderColor: '#9C99D2',
    width: '75%',
  },
}