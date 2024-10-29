import React, { useEffect, useState } from 'react';
import { parseString } from 'xml2js';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.xml')
      .then(response => response.text())
      .then(str => {
        parseString(str, (err, result) => {
          if (err) {
            console.error('Error parsing XML:', err);
          } else {
            setBlogs(result.blogs.blog);
          }
        });
      });
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.title[0]}</h2>
          <p><strong>Author:</strong> {blog.author[0]}</p>
          <p>{blog.content[0]}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
