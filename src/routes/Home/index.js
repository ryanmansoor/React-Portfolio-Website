import React from "react";
import { NavLink } from "react-router-dom";
import Pic from "../../images/ppiconbw.png";
const Home = () => {
  return (
    <div id="wrapper">
      <section id="main">
        <header style={{ marginBottom: "10px" }}>
          <span className="avatar">
            <img src={Pic} alt="" />
          </span>
          <h1>Ryan Mansoor</h1>
          <p>Software Engineer</p>
          <p>MEng Electrical and Electronic Engineering</p>
          <p>Imperial College London</p>
        </header>

        <footer>
          <ul className="icons">
            <li>
              <NavLink
                to="/Portfolio"
                className="fa-file-powerpoint-o"
                title="Portfolio"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/CV" title="CV" className="fa-file-text">
                CV
              </NavLink>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-mansoor/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="fa-linkedin"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ryanmansoor"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="fab fa-github"
              >
                GitHub
              </a>
            </li>
          </ul>
        </footer>
        <p>Professional Portfolio</p>
        <p style={{ color: "#CCCCCC" }}>Apr 2021</p>
      </section>

      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Ryan Mansoor</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
