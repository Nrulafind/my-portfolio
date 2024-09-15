import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';
import { collection, adDoc, getDocs, updateDocs, deleteDoc, doc, addDoc, updateDoc } from 'firebase/firestore';

const AdminPage = () => {
    const navigate = useNavigate();
    const [project, setProject] = useState({ title: '', description: '', image: '', link: '' });
    const [projects, setProjects] = useState([]);
    const [blog, setBlog] = useState({ title: '', description: '', image: '', link: '' });
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projectSnapshot = await getDocs(collection(db, "projects"));
            setProjects(projectSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        };

        const fetchBlogs = async () => {
            const blogSnapshot = await getDocs(collection(db, "blogs"));
            setBlogs(blogSnapshot.docs.map(doc => ({
                id: doc.id, ...doc.data()
            })));
        };
        fetchBlogs();
        fetchProjects();
    }, []);

    const saveProject = async () => {
        try {
            await addDoc(collection(db, "projects"), project);
            setProjects([...projects, project]);
        } catch (error) {
            alert("Gagal menyimpan project:" + error.message);
        }
        // const projects = JSON.parse(localStorage.getItem('projects')) || [];
        // projects.push(project);
        // localStorage.setItem('projects', JSON.stringify(projects));
    };

    const saveBlog = async () => {
        try {
            await addDoc(collection(db, "blogs"), blog);
            setBlogs([...blogs, blog]);
        } catch (error) {
            alert("gagal menyimpan blog :" + error.message)
        }
        // const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        // blogs.push(blog);
        // localStorage.setItem('blogs', JSON.stringify(blogs));
    };

    const updateProject = async (id, updatedProject) => {
        const projectRef = doc(db, "projects", id);
        await updateDoc(projectRef, updatedProject);
    };

    const deleteProject = async (id, deletedProject) => {
        const projectRef = doc(db, "projects", id);
        await deleteDoc(projectRef);
        setProjects(projects.filter(project => project.id !== id));
    };

    const updateBlog = async (id, updateBlog) => {
        const blogRef = doc(db, "blogs", id);
        await updateDoc(blogRef, updateBlog);
    };

    const deleteBlog = async (id) => {
        const blogRef = doc(db, "blogs", id);
        await deleteDoc(blogRef);
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    const handleLogout = async () => {
        await auth.signOut();
        navigate('/');
    }

    return (
        <div className="admin-container" >
            <h1>Admin Page</h1>

            <button onClick={handleLogout}>Logout</button>

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


            <div className='form-group'>
                <h2>Manage Project</h2>
                {projects.map((project) => (
                    <div key={project.id}>
                        <input
                            type='text'
                            value={project.title}
                            onChange={(e) => updateProject(project.id, { title: e.target.value })}
                        />
                        <button onClick={() => deleteBlog(project.id)}>Delete</button>
                    </div>
                ))}
            </div>

            <div className='form-group'>
                <h2>Manage Blogs</h2>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <input
                            type='text'
                            value={blog.title}
                            onChange={(e) => updateBlog(blog.id, { title: e.target.value })}
                        />
                        <button onClick={() => deleteBlog(blog.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default AdminPage;
