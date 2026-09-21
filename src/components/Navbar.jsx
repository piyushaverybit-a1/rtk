import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Clickable Brand / Logo navigating to "/" */}
        <Link to="/" className="navbar-brand nav-brand-logo">
          <span className="brand-badge">RTK</span>
          <span className="brand-text">Portal</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        {/* Links & Search Input */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3 gap-1">
            <li className="nav-item">
              <Link
                className={`nav-link custom-nav-link ${
                  location.pathname === '/' ? 'active-link' : ''
                }`}
                to="/"
              >
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link custom-nav-link ${
                  location.pathname === '/read' ? 'active-link' : ''
                }`}
                to="/read"
              >
                All Posts
              </Link>
            </li>
          </ul>

          {/* Compact Modern Search Field */}
          <div className="search-wrapper my-2 my-lg-0">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              className="form-control custom-search-input"
              type="search"
              placeholder="Search posts..."
              aria-label="Search"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;