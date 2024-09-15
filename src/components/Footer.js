import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/79900731.png';

const Footer = () => {
    return (
        <div>
            <aside>
                <div className="social-media">
                    <ul>
                        <li><a href="https://github.com/Nrulafind"><i class="fab fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/muhammad-nurul-arifin-668814258/"><i class="fab fa-linkedin"
                            aria-hidden="true"></i></a></li>
                        <li><a href="https://www.kaggle.com/muhammadnurularifin"><i class="fab fa-kaggle"
                            aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/afin_aja__/"><i class="fab fa-instagram"
                            aria-hidden="true"></i></a></li>
                        <li><a href="https://www.youtube.com/@nrula_project3143"><i class="fab fa-youtube"
                            aria-hidden="true"></i></a></li>
                    </ul>

                </div>
            </aside>
            <footer className="container ">
                <div className="hero">
                    <section className="hero-left">

                    </section>
                    <section className="right">
                        <p>&copy; 2024 Muhammad Nurul Arifin. Semua hak cipta dilindungi.</p>
                    </section>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
