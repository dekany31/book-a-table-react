
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NewPage from './components/NewPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/booking" element={<NewPage />} />
      </Routes >
    </Router >
  );
}

export default App;
