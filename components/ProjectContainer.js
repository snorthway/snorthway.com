import React from 'react'
import PropTypes from 'prop-types'

import globalStyles from '../styles/globalStyles.js'

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let link;
    if ( this.props.link ) {
      link = <a style={styles.link} href={this.props.link}>{this.props.linkText}</a>
    }

    return (
      <div style={styles.main}>
        <h5 style={styles.title}>{this.props.title}</h5>
        <div style={{width: String(this.props.imageWidth)+'%'}}>
          {this.props.image}
        </div>
        <div style={{width: String(90 - this.props.imageWidth) + '%'}}>
          <p>
            {this.props.text}
          </p>
          {link}
        </div>
        <hr style={styles.hr} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.element.isRequired,
  altText: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

const styles = {
  title: {
    width: '100%',
    // color: '#87FFFB',
    color: globalStyles.accentColor,
    fontFamily: globalStyles.headingFont,
  },
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'horizontal',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hr: {
    borderColor: globalStyles.bodyColor,
    width: '85%',
  },
  link: {
    color: globalStyles.accentColor,
    textDecoration: 'none',
  }
}

export default ProjectContainer