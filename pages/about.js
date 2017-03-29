import React from 'react'
import { style } from 'next/css'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer navActive={0}>
        <div className={style(styles.main)}>
          <h5>about snorthway</h5>
          <p>
            Software engineer looking to move down the abstraction ladder. Ideally moving into firmware, embedded development or electrical engineering. Prefer social and environmental or otherwise altruistic missions. Deviating interest in information security. 
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
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
    fontFamily: 'Lato',
  }
}