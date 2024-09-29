import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img id='footer-image' src={assets.logoTT} alt="" />
          <p>
            TastyTrack simplifies food delivery by providing a wide range of
            restaurant options through its easy-to-use app. Focused on speed and
            customer satisfaction, it ensures quick, hassle-free service with a
            variety of cuisines to choose from. Whether for everyday meals or
            special cravings, TastyTrack makes ordering food effortless and
            enjoyable.
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            {/* <img src={assets.insta_icon} alt="" /> */}
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8623565522</li>
            <li>contact@tastytrack.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tastytrack.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
