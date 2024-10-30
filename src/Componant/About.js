import React, { Component, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class About extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }

  render() {
    return (
      <section className="bg-black py-12">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-down">About JSEx</h2>
          <p className="text-base md:text-lg mb-8 text-gray-300" data-aos="fade-up">
            Welcome to JSEx, your ultimate destination for staying updated on the latest technology trends and news. At JSEx, we're dedicated to serving the dynamic tech community with fresh insights, cutting-edge developments, and informed perspectives.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-gray-800 p-6 rounded shadow-md" data-aos="fade-right">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Why Choose Us?</h3>
              <p className="text-gray-300">
                Our user-friendly platform, extensive catalog, and competitive rates make us a go-to destination for tech enthusiasts. We prioritize quality by ensuring all content is up-to-date and relevant for a perfect learning experience.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow-md" data-aos="fade-up">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">Our Mission</h3>
              <p className="text-gray-300">
                Our mission is to connect people with the power of technology through insightful content. We aim to make top-rated tech news and trends accessible to everyone, fostering a community of informed and inspired individuals.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded shadow-md" data-aos="fade-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">How We Operate</h3>
              <p className="text-gray-300">
                With a streamlined content delivery process, JSEx allows you to browse by category, latest updates, or popularity. Our easy-to-navigate platform makes staying informed hassle-free, so you can focus on leveraging the latest tech trends.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
