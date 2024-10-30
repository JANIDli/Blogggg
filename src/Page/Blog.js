import React, { useState, useEffect } from 'react';
import Nav from '../Componant/Nav';
import Footer from '../Componant/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SearchFilter = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/blogs.xml'); // Ensure this path is correct
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const blogElements = Array.from(xmlDoc.getElementsByTagName('blog'));

        const parsedBlogs = blogElements.map(blog => ({
          id: blog.getElementsByTagName('id')[0]?.textContent || '',
          title: blog.getElementsByTagName('title')[0]?.textContent || '',
          author: blog.getElementsByTagName('author')[0]?.textContent || '',
          date: blog.getElementsByTagName('date')[0]?.textContent || '',
          category: blog.getElementsByTagName('category')[0]?.textContent || '',
          content: blog.getElementsByTagName('content')[0]?.textContent || '',
          image: blog.getElementsByTagName('image')[0]?.textContent || '',
        }));

        console.log('Fetched blogs:', parsedBlogs); // Log fetched blogs
        setBlogs(parsedBlogs);
        setFilteredBlogs(parsedBlogs);
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
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

  if (loading) return <div className="text-center p-5">Loading...</div>;

  if (error) return <div className="text-center p-5 text-red-500">Error: {error}</div>;

  return (
    <>
      <Nav />
      <div className="blog-header-container p-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='b-header text-center text-3xl md:text-4xl opacity-80 text-white font-bold'>
            Dive into our latest articles and insights, crafted to inspire and inform.
          </h1>
        </motion.div>
      </div>

      <div className="search-filter-container p-4">
        <form className="search-form mb-4" onSubmit={e => e.preventDefault()}>
          <input 
            type="text" 
            placeholder="Search.." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        
        <div className="filter-buttons flex flex-wrap gap-2 justify-center">
          {['', 'Trending', 'Technology', 'Science', 'Geography'].map((cat) => (
            <button 
              key={cat} 
              className={`filter-button p-2 border rounded transition-colors duration-300 ${category === cat ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`} 
              onClick={() => setCategory(cat)}
            >
              {cat || 'All'}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-post-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <motion.div 
              key={blog.id}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="blog-one relative flex flex-col bg-white shadow-lg border border-gray-200 rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="relative h-56 overflow-hidden text-white rounded-t-lg">
                {blog.image && <img src={blog.image} alt="blog post" className="object-cover w-full h-full" />}
              </div>
              <div className="p-4">
                <h6 className="text-gray-800 text-xl font-semibold">{blog.title}</h6>
                <p className="text-gray-600 font-light">{blog.content.substring(0, 100)}...</p>
                <p className="text-gray-600 text-sm">Category: {blog.category}</p>
                <p className="text-gray-600 text-sm">Author: {blog.author}</p>
                <p className="text-gray-600 text-sm">Date: {blog.date}</p>
              </div>
              <div className="group my-3 inline-flex flex-wrap justify-center items-center gap-2">
                {blog.id ? (
                  <Link 
                    to={`/blog/${blog.id}`} // Ensure valid path
                    className="rounded-full border border-gray-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-gray-600 hover:text-white hover:bg-gray-800 hover:border-gray-800"
                  >
                    Read More
                  </Link>
                ) : (
                  <button className="rounded-full border border-gray-300 p-2.5 text-center text-sm transition-all shadow-sm text-gray-600" disabled>
                    No Link Available
                  </button>
                )}
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No blog posts found</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchFilter;
