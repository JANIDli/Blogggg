import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export class Footer extends Component {
  render() {
    return (
      <div className='footer-container p-6 bg-gray-800'>
        <div className="f-header text-center mb-6">
          <h1 className='text-white text-4xl font-bold'>JSEx</h1>
        </div>
        <div className="footer-links flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6 mb-6">
          <a className='text-white p-3' href="/">HOME</a>
          <a className='text-white p-3' href="/about">ABOUT</a>
          <a className='text-white p-3' href="/service">SERVICE</a>
          <a className='text-white p-3' href="/blog">BLOG</a>
          <a className='text-white p-3' href="/store">JSEx STORE</a>
        </div>
        <div className="footer-icon flex justify-center space-x-4 mb-6">
          <FontAwesomeIcon className='text-gray-300 p-4' icon={faFacebook} />
          <FontAwesomeIcon className='text-gray-300 p-4' icon={faTwitter} />
          <FontAwesomeIcon className='text-gray-300 p-4' icon={faLinkedin} />
        </div>
        <div className="copywrite text-center text-white">
          <p>© JSEx All rights reserved. | Designed with passion by JSEx | Privacy Policy | Terms & Conditions</p>
        </div>
      </div>
    );
  }
}

export default Footer;
