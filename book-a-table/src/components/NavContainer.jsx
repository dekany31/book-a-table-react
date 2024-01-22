import logoImage from '../components/img/logo beige 7.png'
import React from 'react'
import styled from 'styled-components';

const NavContainerStyles = styled.div`
display:flex;
position: relative;
background-color: rgba(255, 128, 82, 0.5);
height: 7em;
align-items: center;
ul{
  display:flex;
  width: 100vw;
  justify-content: flex-end;
}
 li, a{
    list-style-type: none;
    text-decoration: none;
    display: inline-block;
    color: orangered;
    text-shadow: 1px 1px black;
    font-weight: bold;
    font-size: 1.3em; 
    padding: 12px 16px;
  }
  ul li a:hover{
    color: beige;
}
img{
    position: absolute;
    display: inline;
    top: 1px;
    left: 0.1vw;
}
`
const NavContainer = () =>
  <NavContainerStyles>
    <ul>
      <li><a href="#welcome">Home</a></li>
      <li><a href="#introduction">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="./book.html" >Booking</a></li>
    </ul>
    <img src={logoImage} alt="logo" width="70px" height="110px" />
  </NavContainerStyles>

export default NavContainer