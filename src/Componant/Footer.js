import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export class Footer extends Component {
  render() {
    return (
      <div className='footer-container p-4 md:p-6 bg-gray-800'>
        <div className="f-header text-center mb-4">
          <h1 className='text-white text-3xl md:text-4xl font-bold'>JSEx</h1>
        </div>
        <div className="footer-links flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 mb-4">
          <a className='text-white p-2 md:p-3 text-lg' href="/">HOME</a>
          <a className='text-white p-2 md:p-3 text-lg' href="/about">ABOUT</a>
          <a className='text-white p-2 md:p-3 text-lg' href="/service">SERVICE</a>
          <a className='text-white p-2 md:p-3 text-lg' href="/blog">BLOG</a>
          <a className='text-white p-2 md:p-3 text-lg' href="/store">JSEx STORE</a>
        </div>
        <div className="footer-icon flex justify-center space-x-4 mb-4">
          <FontAwesomeIcon className='text-gray-300 text-2xl md:text-3xl p-2' icon={faFacebook} />
          <FontAwesomeIcon className='text-gray-300 text-2xl md:text-3xl p-2' icon={faTwitter} />
          <FontAwesomeIcon className='text-gray-300 text-2xl md:text-3xl p-2' icon={faLinkedin} />
        </div>
        <div className="copywrite text-center text-white text-sm md:text-base">
          <p>© JSEx All rights reserved. | Designed with passion by JSEx | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    );
  }
}

export default Footer;
