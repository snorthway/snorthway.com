import React from 'react'
import { style } from 'next/css'
import Link from 'next/link'

import globalStyles from '../static/globalStyles'

const NavigationBar = React.createClass ({
  propTypes: {
    active: React.PropTypes.number.isRequired,
  },

  getDefaultProps: function() {
    return {
      active: 0,
    }
  },

  render: function() {
    const pages = ['about', 'projects', 'contact']
    const links = pages.map((l) => {
      return (
        <li className={style(styles.navItem)}
          style={this.props.active === pages.indexOf(l) ? {color: 'white'} : {color: 'inherit'}}>
          <Link href={l}>
            <a className={style(styles.link)}><h5>{l}</h5></a>
          </Link>
        </li>
      )
    })

    return (
      <div className={style(styles.navContainer)}>
      <nav className={style(styles.nav)}>
        <h1 className={style(styles.title)}><span className={style({color: globalStyles.bodyColor})}>s</span>northway</h1>
        <ul className={style(styles.navList)}>
          {links}
        </ul>
      </nav>
      </div>
    ) 
  }

})

const styles = {
  navContainer: {
    width: '100%',
    textAlign: 'center',
    marginTop: '10%',
  },
  nav: {
    width: '85%',
    color: globalStyles.accentColor,
    display: 'flex',
    flexDirection: 'horizontal',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '0 auto',
  },

  navList: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'horizontal',
    justifyContent: 'center',
    alignItems: 'flex-end', 
    margin: 0,
  },
  navItem: {
    margin: 20,
  },
  title: {
    fontSize: 50,
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    ':hover': globalStyles.bodyColor,
  },
}

export default NavigationBar
