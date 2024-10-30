import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export class Store extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="store-container">
          <div className="headerr p-10 sm:p-16 md:p-24 lg:p-36">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center">COMING SOON</h1>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Store
