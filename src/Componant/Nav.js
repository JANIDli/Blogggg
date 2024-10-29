import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav className="nav-container p-12 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className='nav-band'>
            <a href="#" className="text-white text-lg font-bold">JSEx</a>
          </div>
      
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link className='text-white' to="/">HOME</Link></li>
              <li><Link className='text-white' to="/about">ABOUT</Link></li>
              <li><Link className='text-white' to="/service">SERVICE</Link></li>
              <li><a href="#" className="text-white">BLOG</a></li>
              <li><a href="#" className="text-white">CONTACT</a></li>
              <li><a href="#" className="text-white">JSEx STORE</a></li>
            </ul>
          </div>
          <div className="login-btn">
            <a className='pr-2 pl-2 pt-2 pb-2  bg-black text-white'  href="">LOGIN</a>
          </div>
      
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
