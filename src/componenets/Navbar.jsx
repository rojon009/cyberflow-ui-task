import React from 'react';
import Logo from './../images/logo.jpeg'
import {CgProfile, CgMenuRound} from 'react-icons/cg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <a className="navbar-brand" href="#a">
          <img src={Logo} style={{height: "80px"}} alt="Logo" />
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-bold">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#d">Daily Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#d">Weekly Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#d">Monthly Booking</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#d">Group/Corporate</a>
            </li>
          </ul>
          <div>
            <a className="text-decoration-none fw-bold text-black" href="#d">Contact Us</a>
            <button className="btn btn-primary ms-2">Host with Us</button>
            <CgProfile className="ms-2" style={{width: '32px', height: '32px'}} />
            <CgMenuRound className="ms-2" style={{width: '35px', height: '35px'}} />
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;