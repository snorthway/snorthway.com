import React from 'react'
import { style } from 'next/css'

export default class extends React.Component {
  render() {
    return (
      <nav>
        <ul className={style(styles.navList)}>
          <li className={style(styles.navItem)}>About</li>
          <li className={style(styles.navItem)}>Projects</li>
          <li className={style(styles.navItem)}>Contact</li>
        </ul>
      </nav>
    ) 
  }
}

const styles = {
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  navItem: {
    margin: 20,
  }
}