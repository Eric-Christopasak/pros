import React, { useState } from 'react';
import LG from '../assets/logo.png';
import { Link } from 'react-router-dom';
import ToggleSwitch from '../navbar/Switch';
import LoginForm from '../Login/Login';

function NavScrollExample() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setShowLoginForm(prevState => !prevState); // Toggle login form visibility
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand ms-5" to="/"><img src={LG} alt="Logo" /></Link>
          <div className=''>
            <ToggleSwitch />
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-4">
                <Link className="nav-link text-white" to="/track">Track Order</Link>
              </li>
              <li className="nav-item dropdown px-4">
                <Link className="nav-link text-white" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Our Best Offer
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center">
              <ul className='list-unstyled d-flex me-5 mb-2 mb-lg-0'>
                <li>
                  <a href="/" onClick={handleLoginClick} aria-label="Toggle Login Form">
                    <button className='btn btn-outline-warning'>Login</button>
                  </a>
                </li>
                <li><Link to="/cart"><i className="fs-4 text-white bi bi-cart4 px-3"></i></Link></li>
                <li><Link to=""><i className="fs-4 text-white bi bi-heart-fill px-3"></i></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {showLoginForm && (
        <div className="login-form-container">
          <button className="close-btn" onClick={() => setShowLoginForm(false)}>×</button>
          <LoginForm />
        </div>
      )}

    </>
  );
}

export default NavScrollExample;
