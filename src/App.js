// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './assets/css/style.css';
import './assets/script.js';
import Logo from './assets/img/79900731.png';

function App() {
  return (
    <div>
      <header className="container">
        <nav>
          <a href="#"><img src={Logo} alt="logo" /></a>
          <ul>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#MySkills">My Skills</a></li>
            <li><a href="#MyProject">My Projects</a></li>
            <li><a href="#MyBlog">My Blogs</a></li>
          </ul>
        </nav>

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
              I have experience as a full-stack developer intern at Gama Multi Usaha Mandiri, PT Angkasa Pura
              Logistic, as well as with final projects on user experience (UX) design using Figma and front-end
              development using HTML, CSS, and Javascript. I have a strong interest in the field of information
              technology and would like to gain practical experience in the workplace. Have some knowledge of
              databases (MySQL, SQL Server, Firestore, SQLite), web programming back-end (PHP, NodeJS), and
              data analytics (Python, Spreadsheet, BigQuery).
            </p>
            <a href="#">Get Started</a>
          </section>
          <section className="right">
            <div className="orbit">
              <div className="buble-hero"></div>
              <div className="buble-hero"></div>
              <div className="buble-hero"></div>
              <div className="buble-hero"></div>
              <img src="./assets/img/IMG_20230712_151629-removebg-preview.png" alt="Hero illustration" />
            </div>
          </section>
        </div>
      </header>
    </div>

  );
}

export default App;

