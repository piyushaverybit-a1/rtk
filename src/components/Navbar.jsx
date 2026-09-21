import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand nav-brand-logo me-lg-4">
          <span className="brand-badge">RTK</span>
        </Link>

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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-3">
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

          <div className="search-wrapper my-2 my-lg-0">
           
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