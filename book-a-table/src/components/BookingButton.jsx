import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const BookingButtonStyles = styled.button`
    position: ${props => props.about ? 'relative' : 'absolute'};
    left: ${props => props.about ? '50%' : '43%'};
    transform: ${props => props.about ? 'translate(-50%,0)' : 'translate(0)'};;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    border: none;
    padding: 1em 1em;
    margin: 10px;
    background-color: orangered;
    a { text-decoration: none;
    color: beige;
    font-size: 1.3em;
    }
`

export const BookingButton = () =>
  <BookingButtonStyles >
    <Link to="/booking"><strong>FOGLALJ &nbsp;&nbsp; ASZTALT</strong></Link>
  </BookingButtonStyles>

export const BookingButtonAbout = () =>
  <BookingButtonStyles about >
    <Link to="/booking"><strong>FOGLALJ &nbsp;&nbsp; ASZTALT</strong></Link>
  </BookingButtonStyles>

