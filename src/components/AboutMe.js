import React from 'react';
import heroImage from '../assets/img/IMG_20230712_151629-removebg-preview.png';

const AboutMe = () => {
    return (
        <div className="container">

            <div className="hero" id="AboutMe">
                <section className="hero-left">
                    <h1>Hi There!!, My Name is Muhammad Nurul Arifin</h1>
                    <p>
                        <span className="typewrite" data-period="2000"
                            data-type='["Saya seorang pelajar.", "Saya belajar web development.", "Saya tertarik pada machine learning.", "Saya belajar backend development.", "Saya belajar cloud computing."]'>
                            <span className="wrap"></span>
                        </span>
                    </p>
                    <p>
                        I have experience as a full-stack developer intern at Gama Multi Usaha Mandiri, PT Angkasa Pura Logistic...
                    </p>
                    <a href="#">Get Started</a>
                </section>
                <section className="right">
                    <div className="orbit">
                        <div className="buble-hero"></div>
                        <div className="buble-hero"></div>
                        <div className="buble-hero"></div>
                        <div className="buble-hero"></div>
                        <img src={heroImage} alt="Hero illustration" />
                    </div>
                </section>
            </div>
        </div >

    );
};

export default AboutMe;
