import React from 'react'
import welcomeImage from '../components/img/welcomepicture.jpg'
import styled from 'styled-components';

const WelcomeContainerStyles = styled.div`
.name{
    position: absolute;
    top: 150px; 
    left: 25%;
    text-shadow: 3px 3px black;
    padding: 10px 15px;
    border: 2px solid beige;
    border-radius: 25%;
    background-color: orangered;
    color: beige;
    font-family: 'Tangerine', cursive;
    font-weight: bold;
    font-size: 4vw;
    margin: 0 2px 5px 2px;
}
`

const Welcome = () => {
  return (
    <WelcomeContainerStyles id="welcome">
      <img class="homeimg" src={welcomeImage} alt="background pizza" width="100%" height="auto" />
      <h1 class="name">Welcome to Pizza & Me</h1>
    </WelcomeContainerStyles>
  )
}

export default Welcome