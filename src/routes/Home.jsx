import React from "react";
import SwiperComponent from "../components/SwiperComponent";
import Sections from "../components/Sections";
import swip2 from "../../public/images/swip2.webp";


const Home = () => {
  return (
    <>
    <SwiperComponent ImgUrl={swip2}/>
    <Sections />
    </>
  )
};

export default Home;
