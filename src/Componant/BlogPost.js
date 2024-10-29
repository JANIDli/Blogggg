import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export class BlogPost extends Component {
  render() {
    return (
      <>
        <Nav />
        <div className="post-title p-5 text-3xl text-center font-bold">
          <h1>The Future of Web Development: Trends to Watch in 2024</h1>
        </div>
        <div className="blog-post-img">
          <img src="test2.jpg" alt="Web Development Trends" className="w-full h-auto object-cover" />
        </div>
        <div className="post-container p-5">
          <div className="Post-about mb-4">
            <div className="filtor">
              <h1></h1>
            </div>
            <div className="intro text-lg text-gray-700 font-light">
              <p>
                Web development is an ever-evolving field, with new trends and technologies emerging each year. As we move further into 2024, it's essential for developers, designers, and business leaders to stay informed about the latest developments that could impact their work and industries. In this post, we'll explore some of the most anticipated trends shaping the future of web development.
              </p>
            </div>
          </div>
        </div>
        <Footer/>
      </>
      
    );
  }
}

export default BlogPost;
