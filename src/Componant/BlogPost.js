import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

export const BlogPost = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('/blogs.xml'); // Fetch your XML data
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const blogElements = Array.from(xmlDoc.getElementsByTagName('blog'));

        const selectedBlog = blogElements.find(blog => blog.getElementsByTagName('id')[0]?.textContent === id); // Match ID
        
        if (selectedBlog) {
          setBlog({
            title: selectedBlog.getElementsByTagName('title')[0]?.textContent || '',
            author: selectedBlog.getElementsByTagName('author')[0]?.textContent || '',
            date: selectedBlog.getElementsByTagName('date')[0]?.textContent || '',
            category: selectedBlog.getElementsByTagName('category')[0]?.textContent || '',
            content: selectedBlog.getElementsByTagName('content')[0]?.textContent || '',
            image: selectedBlog.getElementsByTagName('image')[0]?.textContent || '',
          });
        }
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Loading...</div>; // Display loading message

  return (
    <>
      <Nav />

      {/* Blog Title and Meta */}
      <div className="post-title p-3 text-2xl text-center font-bold">
        <h1>{blog.title}</h1>
      </div>
      
      <div className="post-meta p-2 text-center text-gray-500 text-sm">
        <p>By <span className="font-medium">{blog.author}</span> | Published on {blog.date} | Category: <span className="font-medium">{blog.category}</span></p>
      </div>

      <div className="blog-post-img p-2">
        <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
      </div>

      <div className="post-content p-3 max-w-4xl mx-auto">
        <div className="intro text-lg text-gray-700 font-light">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPost;
