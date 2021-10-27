import React from 'react';
import Hero from './../images/hero.jpeg';
import Breadcrumb from './Breadcrumb';

const HeroSection = () => {
  return (
    <div className="row" style={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3) ), url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundBlendMode: 'brightness(50%)'}}>
      <div className="col-11 col-md-7 pt-4 mx-auto">
        <Breadcrumb />
        <div className="text-white py-5">
          <h2>List your property with Joey Rooms</h2>
          <p>Earn the income with out strugle</p>
          <button className="btn btn-primary">Host with Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;