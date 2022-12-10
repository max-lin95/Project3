import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import SignUp from './components/SignUp';
import Nav from "./components/Nav";

function App() {
  return (
   <div className="App">
    <BrowserRouter>
      <Nav />
      <div className="pages">
        <Routes>
          <Route
          path='/'
          element={<Nav />}
          />
          <Route
          path='/login'
          element={<Login />}
          />
          <Route
          path='/signup'
          element={<SignUp />}
          />
        </Routes>
      </div>
    </BrowserRouter>
   </div>

  
  )
}


export default App;