import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>

    </div>
  );
}

export default App;
