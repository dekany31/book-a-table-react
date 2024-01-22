import React from 'react'
import styled from 'styled-components'

const BookingButtonStyles = styled.button`
    position: relative;
    left: 50%;
    transform: translate(-50%,0);
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

const BookingButton = () =>
  <BookingButtonStyles>
    <a href="book.html"> <strong>FOGLALJ &nbsp;&nbsp; ASZTALT</strong></a>
  </BookingButtonStyles>

export default BookingButton