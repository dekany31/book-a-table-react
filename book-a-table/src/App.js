import NavContainer from './components/NavContainer';
import Welcome from './components/Welcome';
import About from './components/About';
import Menu from './components/Menu';
import './App.css';
import BookingButton from './components/BookingButton';

function App() {
  return (
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
  );
}

export default App;
