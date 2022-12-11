import React from 'react';
import './App.css';

//Import components
import LoginForm from './components/LoginForm'
import Nav from './components/Nav'
import Home from './components/Home'
import ProductDescription from './components/ProductDescription'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/product-description" element={<ProductDescription/>} />
        <Route path="/login-form" element={<LoginForm/>} />
      </Routes>
    </div>
    </Router>
  );
}
  
export default App;