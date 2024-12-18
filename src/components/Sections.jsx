import React from "react";
import "../assets/styles/_Home.scss";
import { Link } from "react-router-dom";
import left from "../../public/images/left.svg";
import sec1 from "../../public/images/sec1.svg";
import pro1 from "../../public/images/pro1.svg";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";

const Sections = () => {
  return (
    <section className="Home_sections">
      {/* Category Main Section Cards */}
      <div
        style={{
          backgroundColor: "#eee",
          width: "100%",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
        }}
      >
        <div className="container">
          <div className="row mb-3">
            <div className="col-12 col-lg-12">
              <div className="section_title">
                <h2> الاقسام</h2>
                <Link to="category" className="Link_title">
                  عرض الكل<img src={left} alt="left" />
                </Link>
              </div>
            </div>
          </div>

          <div className="row p-5">
            <div className="col-12 col-lg-3 mb-2">
              <CategoryCard title="ssss" ImgUrl={sec1} />
            </div>
          </div>
        </div>
      </div>

      {/* products Main Section Cards */}
      <div className="container mt-1 p-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="section_title">
              <h2> احدث المنتجات</h2>
              <Link to="products" className="Link_title">
                عرض الكل<img src={left} alt="left" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-3">
            <ProductCard
              ImgUrl={pro1}
              title="Product Card"
              PriceAfter="112$"
              PricePefore="22$"
              discount="2%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sections;
