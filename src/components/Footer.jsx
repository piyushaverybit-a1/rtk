import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-inner">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="footer-brand">
            <span className="brand-badge" style={{ fontSize: "0.95rem", padding: "0.28rem 0.95rem" }}>
              RTK
            </span>
            <span>Redux Toolkit App</span>
          </div>
          
          <ul className="footer-links">
            <li>
              <Link to="/">Create Post</Link>
            </li>
            <li>
              <Link to="/read">All Posts</Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} RTK Application. All rights reserved.</span>
          <span>Crafted with modern React & Redux Toolkit</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
