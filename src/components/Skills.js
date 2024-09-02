import React from 'react';
import skillImages from '../assets/img/index';// Anda perlu membuat file index.js di folder img untuk ekspor gambar


const Skills = () => {
    const skills = ['php', 'python'];

    return (
        <div className="container" id="MySkills">
            <h1 className="skills">My Skills</h1>
            <section className="pict-container">
                <div className="carousel-track">
                    {skills.map((skill, index) => (
                        <div className="card-pict" key={index}>
                            <div className="card-header-skills">
                                <img src={skillImages[skill]} alt="Skill" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
