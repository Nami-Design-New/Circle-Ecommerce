import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/_home.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import swip from "../../public/images/swip.svg";
import swip2 from "../../public/images/swip2.webp";
import swip3 from "../../public/images/swip3.jpg";

const SwiperComponent = () => {
  return (
    <section className="swiper_slide">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        pagination={{
          clickable: true
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swip} alt="" className="swiper_img " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swip2} alt="" className="swiper_img " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swip3} alt="" className="swiper_img " />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
