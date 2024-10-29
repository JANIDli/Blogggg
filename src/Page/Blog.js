import React, { useState, useEffect } from 'react';
import Nav from '../Componant/Nav';
import Footer from '../Componant/Footer';

const SearchFilter = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('blogs.xml');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const blogElements = Array.from(xmlDoc.getElementsByTagName('blog'));

        const parsedBlogs = blogElements.map(blog => ({
          title: blog.getElementsByTagName('title')[0]?.textContent || '',
          author: blog.getElementsByTagName('author')[0]?.textContent || '',
          date: blog.getElementsByTagName('date')[0]?.textContent || '',
          category: blog.getElementsByTagName('category')[0]?.textContent || '',
          content: blog.getElementsByTagName('content')[0]?.textContent || '',
          image: blog.getElementsByTagName('image')[0]?.textContent || '',
        }));

        setBlogs(parsedBlogs);
        setFilteredBlogs(parsedBlogs);
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!category || blog.category === category)
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, category, blogs]);

  return (
    <>
    <Nav/>
      <div className="blog-header-container">
        <h1 className='text-center text-3xl text-white font-bold opacity-55'>
          Blog Posts
        </h1>
      </div>

      <div className="search-filter-container">
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Search.." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        
        <div className="filter-buttons">
          {['', 'Trending', 'Technology', 'Science', 'Geography'].map((cat) => (
            <button 
              key={cat} 
              className={`filter-button ${category === cat ? 'active' : ''}`} 
              onClick={() => setCategory(cat)}
            >
              {cat || 'All'}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-post-container">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div key={index} className="blog-one relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                {blog.image && <img src={blog.image} alt="blog post" className="object-cover w-full h-full" />}
              </div>
              <div className="p-4">
                <h6 className="text-slate-800 text-xl font-semibold">{blog.title}</h6>
                <p className="text-slate-600 font-light">{blog.content}</p>
                <p className="text-slate-600 text-sm">Category: {blog.category}</p>
                <p className="text-slate-600 text-sm">Author: {blog.author}</p>
                <p className="text-slate-600 text-sm">Date: {blog.date}</p>
              </div>
              <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
                <button className="rounded-full border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800" type="button">
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No blog posts found</p>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default SearchFilter;
