import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/_home.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const SwiperComponent = ({ ImgUrl }) => {
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
          <img src={ImgUrl} alt="head" className="swiper_img " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUrl} alt="head" className="swiper_img " />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImgUrl} alt="head" className="swiper_img " />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
