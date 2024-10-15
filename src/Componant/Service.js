import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';




export class Service extends Component {
  render() {
    return (
        <div className='service-container grid-cols-3	 p-10'>
            <div className="service-intro">
                <h1 className='about-header text-white text-center text-5xl animate-jump-in'> | O u r-S e r v i c e |</h1>
            </div>
            <br/>
            <div className="service-card1 opacity-80">
              <h1 className='text-2xl font-bold uppercase text-center text-white opacity-100'><FontAwesomeIcon className='text-pink-700	' icon={faCode} />Web development</h1>
            <br />
              <p className='text-center text-white opacity-100'>Elevate your online presence with our web development expertise. Whether it's crafting a stunning site from scratch, revamping your platform, or seamlessly integrating e-commerce, we have the skills and creativity to realize your vision</p>
              <br />
            </div>
            <div className="service-card2 opacity-80">
              <h1 className='text-2xl font-bold uppercase text-center text-white'><FontAwesomeIcon className='text-pink-700' icon={faPenNib} />Graphic Designing</h1>
              <br />
              <p className='text-center  text-white'>"Impress your audience with captivating graphics that convey your brand's message flawlessly. From standout logos and branding to engaging social media content, our expert graphic design team ensures your brand shines in the digital realm.</p>
            </div>
            <div className="service-card3 opacity-80">
              <h1 className='text-2xl font-bold uppercase text-center text-white'><FontAwesomeIcon className='text-pink-700' icon={faHashtag} />Content Creation</h1>
              <br />
              <p className='text-center text-white'>Elevate your online presence with our web development expertise. Whether it's crafting a stunning site from scratch, revamping your platform, or seamlessly integrating e-commerce, we have the skills and creativity to realize your vision</p>
            </div>
           
         
         
        </div>
    )
  }
}

export default Service