import React, { useState, useEffect } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const savedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
        setBlogs(savedBlogs);
    }, []);

    return (
        <div id="MyBlog" className="container">
            <h1>My Blog</h1>
            <section className="card-container">
                {blogs.map((blog, index) => (
                    <div className="card blog" key={index}>
                        <div className="card-header">
                            <img src={blog.image} alt="Blog Image" />
                        </div>
                        <div className="card-body">
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <a href={blog.link}>Read More</a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Blog;
