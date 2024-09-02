import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/79900731.png';

const Header = () => {
    return (
        <header className="container">
            <nav>
                <Link to="/"><img src={logo} alt="logo" /></Link>
                <ul>
                    <li><a href="#AboutMe">About Me</a></li>
                    <li><a href="#MySkills">My Skills</a></li>
                    <li><a href="#MyProject">My Projects</a></li>
                    <li><a href="#MyBlog">My Blog</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
