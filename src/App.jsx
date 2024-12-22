import './App.css'
import React from 'react';
import { Route, Routes   } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Auth from './layout/Auth';
import Main from './layout/Main-Layout';
import Login from './Auth/Login';
import AuthLayout from './layout/Auth';
import Register from './Auth/Register';
import Otp from './Auth/Otp';
import Products from './Pages/Products/Products';
import Categories from './Pages/Categories/Categorys';
import  { useState, useEffect } from 'react';
import FullPageLoader from './components/Loader';
import ContactUs from './routes/ContactUs';
import ProductDetails from './Pages/Products/ProductDetails';
import Cart from './components/Cart';



function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);



  

  useEffect(() => {
    setTimeout(() => {
      setData("");
      setLoading(false);
    }, 3000);
  }, []);



  return (
    <>


{loading && <FullPageLoader />}

    <Routes>
        {/*Main Routes */}
      <Route path='/' element={<Main />} >
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="category" element={<Categories />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="productDetails" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />


        




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
