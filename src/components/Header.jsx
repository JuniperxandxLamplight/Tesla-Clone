import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../assets/header.png';

function Header(){
  return (
    <div className='headerContainer'>
      <style jsx>{`
          .headerContainer{
            display: grid;
            grid-template: 1fr 11fr / 1fr;
          }
          .navBar{
            z-index: 1;
            grid-area: 1 / 1 / span 1 / span 1;
            width:100vw;
            height:100%;
            background-color:rgba(0,0,0, .6);
          }
          img{
            grid-area: 1 / 1 / span 2 / span 1;
            width: 100%;
            height: auto;
          }
            `}</style>
      <div className='navBar'>
        <p>TESLA</p>
        <div>
          <p>Model S</p>
          <p>Model 3</p>
          <p>Model X</p>
          <p>Model Y</p>
          <p>Roadster</p>
          <p>Energy</p>
        </div>
        <div>
          <p>Shop</p>
          <p>Sign In</p>
          <p>Hamburger</p>
        </div>
      </div>
      <img src={headerImage} />
    </div>
  );
}

export default Header;
