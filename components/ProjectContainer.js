import React from 'react'
import { style } from 'next/css'

import globalStyles from '../static/globalStyles.js'

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={style(styles.main)}>
        <h5 className={style(styles.title)}>{this.props.title}</h5>
        <div className={style({width: String(this.props.imageWidth)+'%'})}>
          {this.props.image}
        </div>
        <p className={style({width: String(90 - this.props.imageWidth) + '%'})}>
          {this.props.text}
        </p>
        <hr className={style(styles.hr)} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  image: React.PropTypes.element.isRequired,
  altText: React.PropTypes.string.isRequired,
  imageWidth: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
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
  }
}

export default ProjectContainer