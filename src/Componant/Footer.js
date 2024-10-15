import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export class Footer extends Component {
  render() {
    return (
      <div className='footer-container'>
        <div className="f-header">
            <h1 className='text-white text-4xl font-bold'>JSEx</h1>
            {/* <ul className='text-white'>
                <li>Web Development</li>
                <li>Graphic Designing</li>
                <li>Content Creation</li>
            </ul> */}
        </div>
        <div className="footer-links ">
            <a className='text-white p-3' href="">HOME</a>
            <a className='text-white p-3' href="http://">ABOUT</a>
            <a className='text-white p-3' href="http://">SERVICE</a>
            <a className='text-white p-3' href="http://">BLOG</a>
            <a className='text-white p-3' href="">JSEx STORE</a>
        </div>
        <div className="footer-icon">
            <FontAwesomeIcon className='text-gray-300 p-4'icon={faFacebook}/>
            <FontAwesomeIcon className='text-gray-300 p-4'icon={faTwitter}/>
            <FontAwesomeIcon className='text-gray-300 p-4'icon={faLinkedin}/> 
        </div>
        <div className="copywrite">
            <p>"©JSEX All rights reserved. | Designed with passion by JSEX | Privacy Policy | Terms & Conditions"</p>
        </div>
      </div>
    )
  }
}

export default Footer