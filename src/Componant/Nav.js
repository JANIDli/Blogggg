import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { isMenuOpen } = this.state;

    return (
      <nav className="nav-container p-4 sticky top-0 z-10 bg-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className='nav-brand'>
            <a href="#" className="text-white text-6xl font-bold">JSEx</a>
          </div>
      
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link className='text-white' to="/">HOME</Link></li>
              <li><Link className='text-white' to="/about">ABOUT</Link></li>
              <li><Link className='text-white' to="/service">SERVICE</Link></li>
              <li><Link className='text-white' to="/blog">BLOG</Link></li>
              <li><Link className='text-white' to="/contact">CONTACT</Link></li>
              <li><Link className='text-white' to="/store">JSEx STORE</Link></li>
            </ul>
          </div>
          <div className="login-btn hidden md:block">
            <a className='pr-2 pl-2 pt-2 pb-2 bg-black text-white' href="">LOGIN</a>
          </div>
      
          <div className="md:hidden">
            <button onClick={this.toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 mt-2">
              <li><Link className='text-white' to="/" onClick={this.toggleMenu}>HOME</Link></li>
              <li><Link className='text-white' to="/about" onClick={this.toggleMenu}>ABOUT</Link></li>
              <li><Link className='text-white' to="/service" onClick={this.toggleMenu}>SERVICE</Link></li>
              <li><Link className='text-white' to="/blog" onClick={this.toggleMenu}>BLOG</Link></li>
              <li><Link className='text-white' to="/contact" onClick={this.toggleMenu}>CONTACT</Link></li>
              <li><Link className='text-white' to="/store" onClick={this.toggleMenu}>JSEx STORE</Link></li>
              <li><a className='pr-2 pl-2 pt-2 pb-2 bg-black text-white' href="" onClick={this.toggleMenu}>LOGIN</a></li>
            </ul>
          </div>
        )}
      </nav>
    );
  }
}

export default Nav;
