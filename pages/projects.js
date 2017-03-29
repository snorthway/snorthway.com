import React from 'react'
import { style } from 'next/css'

import MainContainer from '../components/MainContainer'
import ProjectContainer from '../components/ProjectContainer'

export default class extends React.Component {
  render() {
    const projects = {

      'the grove app (2016)': {
        image: '/static/gos_appstore_shot_2.jpeg',
        imageWidth: 25,
        text: `Full-featured and painstakingly designed app for controlling and 
              monitoring an internet-connected garden with a fish tank.
              Wrote it from scratch having never touched Swift or any iOS development.
              Was accepted by the App Store on the first submission.`
      }, 

      'high speed photography (2015)': {
        image: '/static/liquid.jpg',
        imageWidth: 25,
        text: `Used strobe lights and long shutter speeds to capture artistic photographs
              of liquid media including water, different kinds of oil, milk and more.
              Built and tuned an IR sensor trigger to time the firing of the strobes
              just after the beam was broken.`

      },

      'microgrid model (2014)': {
        image: '/static/microgrid.jpg',
        imageWidth: 40,
        text: `Fully functioning scale model of a microgrid system complete 
              with a solar array, wind turbines, hydroelectric power, hydrogen fuel
              cell energy storage, LEDs for load, and grid control software 
              running on a Raspberry Pi.`

      },

      'slime mold networks (2014)': {
        image: '/static/R1-02548-006Ae.jpg',
        imageWidth: 35,
        text: `Explored biomimicry by studying how slime mold forms networks to transport 
              nutrients. I conducted an experiment to attempt to simulate Boston's transportation 
              systems with the emergent structures of the slime mold physarum polycephalum. In a 
              petri dish, I laid out food sources in the arrangement of Boston's most populous 
              cities (I put salt where the ocean would be to discourage formation of plasmodia there).`

      },

      'design: smart soil (2013)': {
        image: '/static/R1-02548-006Ae.jpg',
        imageWidth: 35,
        text: `Worked with farmers who ran community supported agriculture programs 
              (CSAs) to design a product based on their needs and values. We ended 
              up designing the concept for a distributed sensing network for soil 
              health metrics, which we called "Smart Soil". This included an application 
              that would present the data in actionable terms: for example, how to plan 
              next year's crops and when/where to amend the soil.`
      },

      'mostly analog theremin (2012)': {
        image: '/static/R1-02548-006Ae.jpg',
        imageWidth: 25,
        text: `Designed and built a theremin, 
              which is a musical instrument played by modulating the distance of one's 
              hands to two antennas. On the pitch side, we had a 555 timer outputting 
              a reference square wave and another whose frequency was affected by the 
              antenna's capacitance with the hand. XNORing these two signals gave us variable 
              pitch. For volume, we had another 555 driving an LC oscillator at its resonant 
              frequency; when the C was changed by a hand nearing the antenna, the resulting 
              amplitude (volume) was lower.`
      },

    }


    let projectElements = []
    const imgStyle = style({width: '100%'})
    for (let key in projects) {
      projectElements.push(
        <ProjectContainer 
          key={key}
          title={key}
          vis={ <img src={ projects[key].image} className={imgStyle} /> } 
          visPercent={projects[key].imageWidth}
          text={projects[key].text}
        />
      )
    }

    return (
      <div>
        <MainContainer navActive={1}>
          <div className={style(styles.main)}>
            {projectElements}
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
    textAlign: 'left',
    margin: '0 auto',
    fontFamily: 'Lato',
  },
  vis: {
    width: '25%',
  },
  text: {
    width: '65%',
  },

}

