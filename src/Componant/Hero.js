import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Hero extends Component {
  render() {
    return (
      <div className='heroo p-6'>
        <div className='hero-header text-center text-white font-bold'>
          <h3 className='slowgun bg-black sticky top-0 animate-jump-in'>
            E m p o w e r  -  Y o u r  - T e c h - J o u r n e y
          </h3>
          <h1 className='opacity-50 animate-fade-up animate-once'>
            J S E x
          </h1>
          <br />
          <Link
            className='hero-btn bg-black pl-20 pr-20 pt-3 pb-3 text-white font-bold animate-flip-up animate-once'
            to="/service"
          >
            SERVICE
          </Link>
        </div>
      </div>
    );
  }
}

export default Hero;
