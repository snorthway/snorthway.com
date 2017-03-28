import React from 'react'
import { style } from 'next/css'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <div>
      <MainContainer>
        <div class="container ten columns">
          <p>Testing this silly container business!!!!!</p>
        </div>
        <div class="container five columns">STIIIILLLL TESTINGGGNGNSGDSGNG</div>
        </MainContainer>
      </div>
    )
  }
}