import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collect }
const AdminPage = () => {
    const [project, setProject] = useState({ title: '', description: '', image: '', link: '' });
    const [blog, setBlog] = useState({ title: '', description: '', image: '', link: '' });

    const saveProject = () => {
        const projects = JSON.parse(localStorage.getItem('projects')) || [];
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    };

    const saveBlog = () => {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
    };

    return (
        <div className="admin-container">
            <h1>Admin Page</h1>

            <div className="form-group">
                <h2>Add New Project</h2>
                <input type="text" placeholder="Project Title" onChange={(e) => setProject({ ...project, title: e.target.value })} />
                <input type="text" placeholder="Project Description" onChange={(e) => setProject({ ...project, description: e.target.value })} />
                <input type="text" placeholder="Project Image URL" onChange={(e) => setProject({ ...project, image: e.target.value })} />
                <input type="text" placeholder="Project Link" onChange={(e) => setProject({ ...project, link: e.target.value })} />
                <button onClick={saveProject}>Save Project</button>
            </div>

            <div className="form-group">
                <h2>Add New Blog</h2>
                <input type="text" placeholder="Blog Title" onChange={(e) => setBlog({ ...blog, title: e.target.value })} />
                <input type="text" placeholder="Blog Description" onChange={(e) => setBlog({ ...blog, description: e.target.value })} />
                <input type="text" placeholder="Blog Image URL" onChange={(e) => setBlog({ ...blog, image: e.target.value })} />
                <input type="text" placeholder="Blog Link" onChange={(e) => setBlog({ ...blog, link: e.target.value })} />
                <button onClick={saveBlog}>Save Blog</button>
            </div>
        </div>
    );
};

export default AdminPage;
