import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
        setProjects(savedProjects);
    }, []);

    return (
        <div id="MyProject" className="container">
            <h1>My Projects</h1>
            <section className="card-container">
                {projects.map((project, index) => (
                    <div className="card project" key={index}>
                        <div className="card-header">
                            <img src={project.image} alt="Project Image" />
                        </div>
                        <div className="card-body">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link}>Read More</a>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Projects;
