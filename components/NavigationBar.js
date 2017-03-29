import React from 'react'
import { style } from 'next/css'
import Link from 'next/link'

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
    return (
      <div className={style(styles.navContainer)}>
      <nav className={style(styles.nav)}>
        <h1 className={style(styles.title)}>snorthway.com</h1>
        <ul className={style(styles.navList)}>
          <li className={style(styles.navItem)}
            style={this.props.active === 0 ? {color: 'white'} : {color: 'inherit'}}>
            <Link href="about">
              <a className={style(styles.link)}>about</a>
            </Link>
          </li>
          <li className={style(styles.navItem)}
            style={this.props.active === 1 ? {color: 'white'} : {color: 'inherit'}}>
            <Link href="projects">
              <a className={style(styles.link)}>projects</a>
            </Link>
          </li>
          <li className={style(styles.navItem)}
            style={this.props.active === 2 ? {color: 'white'} : {color: 'inherit'}}>
            contact
          </li>
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
    color: '#87FFFB',
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
  },
}

export default NavigationBar