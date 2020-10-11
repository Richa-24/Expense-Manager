import React from 'react';
import './App.css';
import Links from './Pages/Links'
import Routes from './Pages/Routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Links />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
