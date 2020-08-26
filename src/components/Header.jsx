import React,{useEffect} from 'react'
import logoPet from '../assets/images/header-logo.png'
import '../assets/styles/components/Header.css'
import country1 from '../assets/images/country1.svg'
import user from '../assets/images/user.svg'
import {execMenu} from './menuactions.js'

const Header = () => {
  
  useEffect(()=>{
    execMenu();
},[])
  return (<>
 

    <header className="header">
      <div className="container">
        
    <i class="fas fa-bars burger-button" id="burger-menu"></i>
        <div className="imgContainer">
        
           <img src={logoPet}></img>
  
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
        <button class="btn-ini"><i  src={user}></i> </button>
      </div>
    </header>
    </>
  );
};

export default Header;
