import React, { Component } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export class BlogPost extends Component {
  state = {
    selectedCategory: 'All',
    searchQuery: '',
  };

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { selectedCategory, searchQuery } = this.state;

    return (
      <>
        <Nav />

        {/* Search and Filter Section */}
        <div className="search-filter-container flex flex-col md:flex-row items-center justify-between p-5 bg-gray-100 border-b border-gray-200">
          <input 
            type="text" 
            placeholder="Search blog posts..." 
            value={searchQuery} 
            onChange={this.handleSearchChange} 
            className="search-input p-2 border border-gray-300 rounded w-full md:w-1/2 mb-3 md:mb-0 md:mr-3"
          />

          <div className="filter-buttons flex space-x-2">
            {['All', 'Technlology', 'Science', 'Geography'].map((category) => (
              <button
                key={category}
                onClick={() => this.handleCategoryChange(category)}
                className={`filter-button p-2 border rounded ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Title and Meta */}
        <div className="post-title p-5 text-3xl text-center font-bold">
          <h1>The Future of Web Development: Trends to Watch in 2024</h1>
        </div>
        
        <div className="post-meta p-5 text-center text-gray-500 text-sm">
          <p>By <span className="font-medium">John Doe</span> | Published on January 15, 2024 | Category: <span className="font-medium">Technology</span></p>
        </div>

        <div className="blog-post-img">
          <img src="test2.jpg" alt="Web Development Trends" className="w-full h-auto object-cover" />
        </div>

        <div className="post-content p-5">
          <div className="intro text-lg text-gray-700 font-light">
            <p>
              <span className="text-5xl font-bold">Web </span>development is an ever-evolving field, with new trends and technologies emerging each year. As we move further into 2024, it's essential for developers, designers, and business leaders to stay informed about the latest developments that could impact their work and industries.
            </p>
          </div>

          <div className="content-sections mt-6 text-gray-700">
            <h2 className="text-2xl font-semibold mb-3">Why Learn Web Development?</h2>
            <p className="mb-4">
              Web development skills are in high demand and offer a pathway to numerous career opportunities. Plus, creating something that others can see and use is deeply satisfying. It’s a versatile skill that allows you to work on everything from personal projects to professional websites for businesses.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Key Technologies and Trends in 2024</h2>
            <p className="mb-4">
              The trends shaping web development in 2024 include advancements in AI integration, WebAssembly, responsive design improvements, and enhanced security protocols. Learning these technologies will give developers an edge in the ever-competitive tech industry.
            </p>

            <p className="mb-4">
              As we dive deeper, tutorials, tips, and tricks will help you become a successful web developer. Whether you're interested in frontend, backend, or full-stack development, these skills will help you build something amazing.
            </p>

            <blockquote className="p-4 italic border-l-4 border-blue-500 text-blue-900 bg-blue-50">
              "The web is the most impactful technology of our time, and it will only continue to grow."
            </blockquote>

            <p className="mt-6">
              Stay tuned as we continue to explore web development trends and technologies that will shape the future. Whether you’re a beginner or an experienced developer, there’s always something new to learn!
            </p>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default BlogPost;
