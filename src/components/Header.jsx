import React from 'react'
import logoPet from '../assets/images/header-logo.png'
import '../assets/styles/components/Header.css'
import country1 from '../assets/images/country1.svg'
import user from '../assets/images/user.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="imgContainer">
          <div className="logo-image">
           <img src={logoPet}></img>
          </div>
        </div>
        <nav className="menu">
          <ol>
            <li>
            <a href="#" alt="">
                Dogs
             </a>
            </li>
            <li >
            <a href="#" alt="">
                Faqs
             </a>
            </li>
            <li>
            <a href="#" alt="">
                Contact us
            </a>
            </li>
            <li>
                <img src={country1} ></img>
            </li>
            <li>
            <button class="btn"><i src={user}></i> Sign in</button>
            </li>
          
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
