import React from 'react';
import Logo from './../images/logo.jpeg'
import Download from './../images/download.png'
import {IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoPinterest} from 'react-icons/io5';
import FooterLinkList from './FooterLinkList';

const Footer = () => {
  return (
    <div className='bg-primary py-5 text-white  '>
      <div className="container">
        <div className="row row-cols-lg-5">
          <div className="d-flex col-12 flex-column align-items-center mb-4">
            <img className="mb-2" style={{height: '60px'}} src={Logo} alt="logo" />
            <span className="mb-2">Follow Us</span>
            <div>
              <IoLogoFacebook style={{width: '30px', height: '30px'}} />
              <IoLogoTwitter style={{width: '30px', height: '30px'}} />
              <IoLogoInstagram style={{width: '30px', height: '30px'}} />
              <IoLogoPinterest style={{width: '30px', height: '30px'}} />
            </div>
          </div>
          <FooterLinkList />
          <FooterLinkList />
          <FooterLinkList />
          <FooterLinkList />
        </div>
        <div className="bg-white my-3" style={{height: '1px'}}></div>
        <div className="row text-center">
          <span>Download Our Mobile Apps</span>
          <div>
            <img src={Download} style={{height: '102px', margin: '-30px 0'}} alt="download" />
          </div>
          <div>
            <span className="me-3">&copy; 2019 Joyes Room</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;