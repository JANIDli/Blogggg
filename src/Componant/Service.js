import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPenNib, faHashtag } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Service extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }

  render() {
    return (
      <div className='service-container p-10'>
        <div className="service-intro mb-10">
          <h1 className='about-header text-white text-center text-5xl animate-jump-in' data-aos="fade-down">| O u r - S e r v i c e |</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="service-card1 bg-gray-800 p-6 rounded shadow-md opacity-80" data-aos="fade-right">
            <h1 className='text-2xl font-bold uppercase text-center text-white'>
              <FontAwesomeIcon className='text-pink-700' icon={faCode} /> Web Development
            </h1>
            <br />
            <p className='text-center text-white'>
              Elevate your online presence with our web development expertise. Whether it's crafting a stunning site from scratch, revamping your platform, or seamlessly integrating e-commerce, we have the skills and creativity to realize your vision.
            </p>
            <br />
          </div>
          <div className="service-card2 bg-gray-800 p-6 rounded shadow-md opacity-80" data-aos="fade-up">
            <h1 className='text-2xl font-bold uppercase text-center text-white'>
              <FontAwesomeIcon className='text-pink-700' icon={faPenNib} /> Graphic Designing
            </h1>
            <br />
            <p className='text-center text-white'>
              Impress your audience with captivating graphics that convey your brand's message flawlessly. From standout logos and branding to engaging social media content, our expert graphic design team ensures your brand shines in the digital realm.
            </p>
            <br />
          </div>
          <div className="service-card3 bg-gray-800 p-6 rounded shadow-md opacity-80" data-aos="fade-left">
            <h1 className='text-2xl font-bold uppercase text-center text-white'>
              <FontAwesomeIcon className='text-pink-700' icon={faHashtag} /> Content Creation
            </h1>
            <br />
            <p className='text-center text-white'>
              Engage your audience with high-quality content that resonates. Our content creation services include blog posts, articles, social media content, and more, tailored to your brand's voice and goals.
            </p>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
