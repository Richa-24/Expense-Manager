import React, { useEffect } from 'react';
import './App.css';
import Routes from './Pages/Routes';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './Redux/auth/actions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const auth = localStorage.getItem("auth")
    if (auth) {
      dispatch(loginSuccess(auth))
    }
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
