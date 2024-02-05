import React, { useState } from 'react';
import styled from 'styled-components'

const FormContainerStyles = styled.div`
        background-color: rgba(221, 167, 50, 0.3);
        h1{
           text-align: center;
           margin-top: 50px;
        }
        .form-container{
            padding: 5vh 25vw;
            form{
             display: flex;
             flex-direction: column;
             width: 100%;
             min-height: 500px;
             justify-content: space-around;
             align-items: center;
             input{
              width: 50%;
              font-size: 1.1em;
              border: none;
              border-radius:15px;
              padding: 10px; 
             }
             #btn_BookTheTable{
              width: 10em;
                padding: 14px 16px;
                text-decoration: none;
                color: wheat;
                background-color: rgb(128, 50, 21);
                text-shadow: 1px 1px black;
                font-weight: bold;
                font-size: 1.5em;
             }
            }
        }
   @media (max-width: 400px) {
        border: 0px;
        .form-container{
                padding:50px;
        }
    }
    .content_panel {
        .article {
        padding:0 !important;
        }
    }
`

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    seats: 'none',
    phoneNumber: '',
    bookingTime: ''
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  //We can't book a table before the actual date, We can't book a table one hour before the actual time
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ellenőrizze a mező nevét és végezze el a megfelelő ellenőrzéseket
    if (name === 'bookingTime') {
      const now = new Date();
      const selectedDate = new Date(value);
      // Ellenőrizze, hogy a kiválasztott dátum nem korábbi-e, mint az aktuális dátum
      if (selectedDate < now) {
        console.log('Cannot book a table before the current date');
        return; // Ne frissítse az állapotot, ha a dátum korábbi
      }
      // Ellenőrizze, hogy a kiválasztott idő nem egy órával korábbi-e, mint az aktuális idő
      const oneHourAhead = new Date(now.getTime() + 60 * 60 * 1000);
      if (selectedDate < oneHourAhead) {
        console.log("Cannot book a table one hour before the current time");
        return; // Ne frissítse az állapotot, ha az idő korábbi
      }
    }
    // Frissítse az állapotot a változó értékeivel
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Itt lehetne további műveleteket hozzáadni, például adatok küldése szerverre
  };

  return (
    <FormContainerStyles>
      <h1>Book a table</h1>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <h3>Registration form </h3>
          <input type="text" id="fname" name="name" value={formData.name} placeholder="your name" onChange={handleChange} autoComplete="off" required />
          <input type="email" id="email" name="email" value={formData.email} placeholder="email" onChange={handleChange} required />
          <input type="number" id="seats" name="seats" min='1' value={formData.seats} placeholder="number of seats" onChange={handleChange} required />
          <input type="number" id="phone-number" name="phoneNumber" value={formData.phoneNumber} placeholder="phone number" onChange={handleChange} />
          <input type="datetime-local" id="booking-time" name="bookingTime" min="" value={formData.bookingTime} onChange={handleChange} required />
          <input type="submit" id="btn_BookTheTable" value="Book the table" />
        </form>
      </div>
    </FormContainerStyles>
  )
}

export default Form