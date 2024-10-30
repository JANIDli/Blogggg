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
      <nav className="nav-container sticky top-0 z-20 bg-gray-800 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-1 px-5">
          {/* Brand */}
          <div className="nav-brand">
            <a href="#" className="text-white text-6xl font-bold">JSEx</a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4">
              <li><Link className="text-white hover:text-gray-300 transition" to="/">HOME</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/about">ABOUT</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/service">SERVICE</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/blog">BLOG</Link></li>
              {/* <li><Link className="text-white hover:text-gray-300 transition" to="/contact">CONTACT</Link></li> */}
              <li><Link className="text-white hover:text-gray-300 transition" to="/store">JSEx STORE</Link></li>
            </ul>
            <a className="ml-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition" href="">LOGIN</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={this.toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={this.toggleMenu}
        ></div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-64 bg-gray-800 h-full transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex flex-col justify-center h-full">
            <ul className="flex flex-col items-center space-y-4">
              <li><Link className="text-white hover:text-gray-300 transition" to="/" onClick={this.toggleMenu}>HOME</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/about" onClick={this.toggleMenu}>ABOUT</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/service" onClick={this.toggleMenu}>SERVICE</Link></li>
              <li><Link className="text-white hover:text-gray-300 transition" to="/blog" onClick={this.toggleMenu}>BLOG</Link></li>
              {/* <li><Link className="text-white hover:text-gray-300 transition" to="/contact" onClick={this.toggleMenu}>CONTACT</Link></li> */}
              <li><Link className="text-white hover:text-gray-300 transition" to="/store" onClick={this.toggleMenu}>JSEx STORE</Link></li>
              <li><a className="px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition" href="" onClick={this.toggleMenu}>LOGIN</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
