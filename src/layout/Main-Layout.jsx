import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Main = () => {
  return(
    <>
    <div className="main_layout">
        <Navbar />
        <div className="main_content">
            <Outlet />
        </div>
        <Footer />

    </div>



    
    </>
  )
};

export default Main;
