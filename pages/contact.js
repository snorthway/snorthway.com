import React from 'react'

import MainContainer from '../components/MainContainer'

export default class extends React.Component {
  render() {
    return (
      <MainContainer page={"contact"}>
        <h2>contact</h2>
        <p>
          Email me at &nbsp;
          <a href="mailto:snorthway.info@gmail.com">
              snorthway.info@gmail.com
          </a>
        </p>
        <p>
          Follow or collaborate with me on &nbsp;
          <a href="https://github.com/snorthway">
            Github
          </a>
        </p>
        <p>
          "Connect" with me on &nbsp;
          <a href="https://www.linkedin.com/in/stephanienorthway/">
          LinkedIn
          </a>
        </p>

      </MainContainer>
    )
  }
}
