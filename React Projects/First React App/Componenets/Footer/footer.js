import React from "react";
import ReactDOM from "react-dom/client";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="animation2">
      <div className="social">
        <h2>Made with ❣️ by Savinder</h2>
        <p>Follow me on social media</p>
        <ul className="wrapper">
          <a
            href="https://www.linkedin.com/in/savinder-singh-718a28257/"
            target="_blank"
          >
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <span>
                <i className="fab fa-linkedin"></i>
              </span>
            </li>
          </a>
          <a href="https://github.com/SavinderSingh77" target="_blank">
            <li className="icon github">
              <span className="tooltip">GitHub</span>
              <span>
                <i className="fab fa-github"></i>
              </span>
            </li>
          </a>

          <a href="https://twitter.com/Savindersingh77" target="_blank">
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </li>
          </a>
        </ul>
      </div>
    </footer>
  );
};

export { Footer };
