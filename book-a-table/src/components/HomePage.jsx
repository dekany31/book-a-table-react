import React from 'react'
import NavContainer from './NavContainer';
import Welcome from './Welcome';
import About from './About';
import Menu from './Menu';
import { BookingButton } from './BookingButton';

const HomePage = () =>

  <div className="App">
    <div className="top">
      <NavContainer />
    </div>
    <Welcome />
    <About />
    <BookingButton />
    <Menu />
    <BookingButton />
  </div>


export default HomePage