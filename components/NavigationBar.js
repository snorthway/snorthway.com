import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import globalStyles from '../styles/globalStyles'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    active: 0,
  }

  render() {
    const pages = ['about', 'projects', 'contact']
    const links = pages.map((l) => {
      return (
        <li style={styles.navItem(this.props.active === pages.indexOf(l))}>
          <Link href={l}>
            <h5 style={styles.link}>{l}</h5>
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
  navItem: function(isActive) {
    return {
      margin: 20,
      color: isActive ? 'white' : 'yellow'
    }
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
