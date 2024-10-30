// src/Page/BlogList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('blogs.xml'); // Your XML data source
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const blogElements = Array.from(xmlDoc.getElementsByTagName('blog'));
        
        const blogData = blogElements.map(blog => ({
          id: blog.getElementsByTagName('id')[0]?.textContent || '',
          title: blog.getElementsByTagName('title')[0]?.textContent || '',
          author: blog.getElementsByTagName('author')[0]?.textContent || '',
          date: blog.getElementsByTagName('date')[0]?.textContent || '',
          category: blog.getElementsByTagName('category')[0]?.textContent || '',
          content: blog.getElementsByTagName('content')[0]?.textContent || '',
          image: blog.getElementsByTagName('image')[0]?.textContent || '',
        }));

        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-5">Blog List</h1>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card p-5 border mb-4">
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.content.substring(0, 100)}...</p>
            <Link to={`/BlogP/${blog.id}`} className="text-blue-500 hover:underline">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
