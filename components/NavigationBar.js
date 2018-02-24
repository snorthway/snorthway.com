import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import globalStyles from '../static/globalStyles'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  getDefaultProps() {
    return {
      active: 0,
    }
  }

  render() {
    const pages = ['about', 'projects', 'contact']
    const links = pages.map((l) => {
      return (
        <li style={styles.navItem}
          style={this.props.active === pages.indexOf(l) ? {color: 'white'} : {color: 'inherit'}}>
          <Link href={l}>
            <a style={styles.link}><h5>{l}</h5></a>
          </Link>
        </li>
      )
    })

    return (
      <div style={styles.navContainer}>
      <nav style={styles.nav}>
        <h1 style={styles.title}><span style={{color: globalStyles.bodyColor}}>s</span>northway</h1>
        <ul style={styles.navList}>
          {links}
        </ul>
      </nav>
      </div>
    ) 
  }
}

NavigationBar.propTypes = {
  active: PropTypes.number.isRequired,
}

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
