import React from 'react'

import globalStyles from '../static/globalStyles'

import MainContainer from '../components/MainContainer'
import ProjectContainer from '../components/ProjectContainer'

export default class extends React.Component {
  render() {
    const projects = {

      'algorithm animations (2017)': {
        image: '/static/algoviz.png',
        altText: 'scatter plot with the result of a 2d random sample consensus algorithm',
        imageWidth: 35,
        text: `Creating animations of various algorithms in matplotlib 
              for fun and enlightenment.`,

        link: 'https://github.com/snorthway/algo-viz',
        linkText: 'Github',
      },

      'the grove app (2016)': {
        image: '/static/gos_appstore_shot_2.jpeg',
        altText: 'App Store screenshot of the Grove App',
        imageWidth: 25,
        text: `Wrote a full-featured and painstakingly designed app for controlling and 
              monitoring an internet-connected garden with a fish tank.
              Wrote it from scratch having never touched Swift or any iOS development.
              Was accepted by the App Store on the first submission. Also built and maintained
              an API for interacting with the device via a node.js server, and did all 
              kinds of dev ops behind the scenes.`,

        link: 'https://itunes.apple.com/za/app/grove-os/id1059443821?mt=8',
        linkText: 'App Store',
      }, 

      'led strip driver for photon (2016)': {
        image: '/static/led_driver.png',
        altText: 'screenshot of a circuit board laid out in DipTrace',
        imageWidth: 35,
        text: `As a foray into PCB layout, took a breadboarded circuit for an LED
              strip driver made using a Particle Photon microcontroller and laid it out 
              in DipTrace. Includes knobs to tune RGB values.`,

        link: 'https://github.com/snorthway/led-controller',
        linkText: 'Github',
      },

      'high speed photography (2015)': {
        image: '/static/liquid.jpg',
        altText: 'high speed photograph of objects being dropped into water',
        imageWidth: 25,
        text: `Used strobe lights and long shutter speeds to capture artistic photographs
              of liquid media including water, different kinds of oil, milk and more.
              Built and tuned an IR sensor trigger to time the firing of the strobes
              just after the beam was broken.`,

        link: '/static/Northway_FPS.pdf',
        linkText: 'Documentation and Photos',
      },

      'microgrid model (2014)': {
        image: '/static/microgrid.jpg',
        altText: 'scale model of a microgrid on a messy table',
        imageWidth: 40,
        text: `Created a fully functioning scale model of a microgrid system complete 
              with a solar array, wind turbines, hydroelectric power, hydrogen fuel
              cell energy storage, LEDs for load, and control software 
              running on a Raspberry Pi.`

      },

      'lcd display driver on an fpga (2014)': {
        image: '/static/fpga.png',
        altText: 'system diagram of functional blocks for a SPI driver in Verilog',
        imageWidth: 40,
        text: `Implemented a SPI driver for a commercial LCD screen in Verilog on an FPGA. 
              Reverse engineered the op codes and commands 
              from the open-source C++ driver instead of reading the 164-page 
              datasheet. Tested the low-level controls for the screen with an Arduino, then 
              designed circuits in Verilog to carry them out.`,

        link: 'https://github.com/dimitdim/pineapple',
        linkText: 'Github'

      },

      'slime mold networks (2013)': {
        image: '/static/petri_light_bw.JPG',
        altText: 'black and white photo of branching slime mold structures in a petri dish',
        imageWidth: 25,
        text: `Explored biomimicry by studying how slime mold forms networks to transport 
              nutrients. Conducted an experiment to attempt to simulate Boston's transportation 
              systems with the emergent structures of the slime mold physarum polycephalum. In a 
              petri dish, laid out food sources in the arrangement of Boston's most populous 
              cities (putting salt where the ocean would be to discourage formation of plasmodia).`

      },

      'design: smart soil (2013)': {
        image: '/static/uocd.png',
        altText: 'mockup of a map of a farm field overlaid with information about the soil',
        imageWidth: 35,
        text: `Worked with farmers who ran community supported agriculture programs 
              (CSAs) to design a product based on their needs and values. Designed 
              the concept for a distributed sensing network for soil 
              health metrics, called "Smart Soil". This included an application 
              that would present the data in actionable terms: for example, how to plan 
              next year's crops and when/where to amend the soil.`,

        link: 'https://www.slideshare.net/snorthway/uocd-reflection-slides',
        linkText: 'Reflection Slides',
      },

      'theremin (2012)': {
        image: '/static/theremin.png',
        altText: 'circuit schematic for a theremin',
        imageWidth: 35,
        text: `Designed and built a theremin, 
              a musical instrument played by modulating the distance of one's 
              hands to two antennas controlling pitch and volume. Used a 555 timer to create the 
              a reference square wave for pitch and another whose frequency was affected by the 
              antenna's capacitance with the hand. XNORing these two signals created variable 
              pitch. For volume, another 555 drove an LC oscillator at its resonant 
              frequency; closer hand distance raised the capacitance, lowering the volume.`,
      },

    }


    let projectElements = []
    const imgStyle = style({width: '100%'})
    for (let key in projects) {
      projectElements.push(
        <ProjectContainer 
          key={key}
          title={key}
          image={ <img src={ projects[key].image} className={imgStyle} alt={projects[key].altText} /> } 
          imageWidth={projects[key].imageWidth}
          text={projects[key].text}
          link={projects[key].link}
          linkText={projects[key].linkText}
        />
      )
    }

    return (
      <div>
        <MainContainer navActive={1}>
          <div className={style(styles.main)}>
            <h5 className={style(styles.h5)}>projects by snorthway</h5>
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
    maxWidth: '800px',
    color: globalStyles.bodyColor,
    textAlign: 'left',
    margin: '0 auto',
    fontFamily: globalStyles.bodyFont,
  },
  vis: {
    width: '25%',
  },
  text: {
    width: '65%',
  },
  h5: {
    textAlign: 'center',
  },
}

