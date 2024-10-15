import React, { Component } from 'react'
import Hero from '../Componant/Hero';
import Nav from '../Componant/Nav';
import About from '../Componant/About';
import Service from '../Componant/Service';
import Footer from '../Componant/Footer';


export class Home extends Component {
  render() {
    return (
      <div>
      <Nav/>
        <Hero/>
          <About/>
        <Service/>
      <Footer/>

      </div>
    
     
    )
  }
}

export default Home