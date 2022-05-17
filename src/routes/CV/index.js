import React from "react";
import { NavLink } from "react-router-dom";

const CV = () => {
  return (
    <div id="wrapper">
      <section id="main">
        <header>
          <ul className="icons">
            <li>
              <NavLink to="/" title="Home" class="fa-home">
                Home
              </NavLink>
            </li>
          </ul>
          <h1>CV | May 2022</h1>
        </header>
      </section>

      <iframe
        src="https://drive.google.com/file/d/1P_DU5g7w85bqq68Ln4Ix7TfJvSLb7Erc/preview"
        title="CV"
        className="pdf"
      ></iframe>

      <footer id="footer">
        <ul className="copyright">
          <li>&copy; Ryan Mansoor</li>
        </ul>
      </footer>
    </div>
  );
};
export default CV;
