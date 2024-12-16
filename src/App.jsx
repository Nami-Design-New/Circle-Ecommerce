import './App.css'
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Auth from './layout/Auth';
import Main from './layout/Main-Layout';
import Login from './Auth/Login';
import AuthLayout from './layout/Auth';
import Register from './Auth/Register';
import Otp from './Auth/Otp';
import Products from './Pages/Products/Products';


function App() {

  return (
    <>
    <Routes>
        {/*Main Routes */}
      <Route path='/' element={<Main />} >
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Products" element={<Products />} />
      </Route>

      {/*Auth Routes */}
      <Route path='/login' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp" element={<Otp />} />


      </Route>   

      <Route path="Auth-Layout" element={<Auth />} />
    </Routes>
 
    </>
  )
}

export default App
