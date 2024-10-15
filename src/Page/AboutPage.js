import React, { Component } from 'react'
import Nav from '../Componant/Nav'
import About from '../Componant/About'
import Footer from '../Componant/Footer'

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <About/>
        <Footer/>
      </div>
    )
  }
}

export default AboutPage