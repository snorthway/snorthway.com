import React from 'react'


import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <MainContainer navActive={-1}>
        <p>
          Welcome to snorthway.com, your number one source for snorthway-related news and information.
        </p>
      </MainContainer>
    )
  }
}