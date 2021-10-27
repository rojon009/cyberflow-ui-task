import React from 'react';
import Logo from './../images/logo.jpeg'
import {CgProfile, CgMenuRound} from 'react-icons/cg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#a">
          <img src={Logo} style={{height: "80px"}} alt="Logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mb-2 ms-auto mb-lg-0 fs-6 fw-bold">
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
            <li className="nav-item">
              <a href="/" className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary mx-lg-2">Host with Us</button>
            </li>
            <li className="nav-item">
              <CgProfile className="mx-lg-2 mt-2 mt-lg-0" style={{width: '32px', height: '32px'}} />
            </li>
            <li className="nav-item">
              <CgMenuRound className="mx-lg-2 mt-2 mt-lg-0" style={{width: '35px', height: '35px'}} />
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;