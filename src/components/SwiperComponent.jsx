import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/styles/_home.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import CategoryCard from "./CategoryCard";
import sec1 from "../../public/images/sec1.svg";

const SwiperComponent = ({ ImgUrl }) => {
  const GetProducts = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(GetProducts).then(res => res.json()).then(data => setProducts(data));
  }, []);

  return (
    <section className="swiper_slide">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true
        }}
        modules={[Autoplay]}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }}
        className="mySwiper"
      >
        {products &&
          products.map(product => {
            return (
              <SwiperSlide key={product.id}>
                <CategoryCard title={product.id} ImgUrl={product.image} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
};

export default SwiperComponent;
