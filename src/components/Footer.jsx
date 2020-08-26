import React from "react";
import logoPet from "../assets/images/header-logo.png";
import "../assets/styles/components/footer.css";
import country1 from "../assets/images/country1.svg";
import user from "../assets/images/user.svg";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="imgContainer-footer">
          <div className="logo-image-footer">
            <img src={logoPet}></img>
          </div>
        </div>
        <nav className="menu-footer">
          <ol>
            <li>
              <div className="menu-footer-text-container1">
                <a href="#" alt="">
                  {"Terms & coditions"}
                </a>
                <a id="privacyItem" href="#" alt="">
                  Privacy policy
                </a>
                <a href="#" alt="">
                  FAQS
                </a>
                
              </div>
            </li>
            <li>
              <div className="menu-footer-text-container2">
                <label >
                  Questions?
                </label>
                <a href="#" alt="">
                  SUPPORT@CARMAZAD.COM
                </a>
              </div>
            </li>
           
            <li>
              <div className="social-container">
                <img src={instagram}></img>
                <img src={facebook}></img>
                <img src={twitter}></img>
                <div className="envelope">
                <i class="fas fa-envelope"></i>
                </div>
              
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

