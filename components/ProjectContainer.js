import React from 'react'
import { style } from 'next/css'

class ProjectContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={style(styles.main)}>
        <h6 className={style(styles.title)}>{this.props.title}</h6>
        <div className={style({width: String(this.props.visPercent)+'%'})}>
          {this.props.vis}
        </div>
        <p className={style({width: String(90 - this.props.visPercent) + '%'})}>
          {this.props.text}
        </p>
        <hr className={style(styles.hr)} />
      </div>
    )
  }
}

ProjectContainer.propTypes = {
  title: React.PropTypes.string.isRequired,
  vis: React.PropTypes.element.isRequired,
  visPercent: React.PropTypes.number.isRequired,
  text: React.PropTypes.string.isRequired,
}

const styles = {
  title: {
    width: '100%',
    color: '#87FFFB',
    fontFamily: 'Hind',
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
    borderColor: 'white',
    width: '85%',
  }
}

export default ProjectContainer