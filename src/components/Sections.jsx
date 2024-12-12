import React from "react";
import { Link } from "react-router-dom";
import left from "../../public/images/left.svg";
import sec1 from "../../public/images/sec1.svg";
import pro1 from "../../public/images/pro1.svg";
import cart2 from "../../public/images/cart2.svg";
import heart from "../../public/images/heart.svg";

const Sections = () => {
  return (
    <section className="Home_sections">
      <div className="container">
        <div className="row mb-3">
          <div className="col-12 col-lg-12">
            <div className="section_title">
              <h2> الاقسام</h2>
              <Link to="/" className="Link_title">
                عرض الكل<img src={left} alt="left" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-lg-3 mb-2">
            <div className="Sections_card">
              <img src={sec1} alt="" />
              <h3>عنوان القسم</h3>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-2">
            <div className="Sections_card">
              <img src={sec1} alt="" />
              <h3>عنوان القسم</h3>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-2">
            <div className="Sections_card">
              <img src={sec1} alt="" />
              <h3>عنوان القسم</h3>
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-2">
            <div className="Sections_card">
              <img src={sec1} alt="" />
              <h3>عنوان القسم</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="section_title">
              <h2> احدث المنتجات</h2>
              <Link to="/" className="Link_title">
                عرض الكل<img src={left} alt="left" />
              </Link>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-3">
            <div className="Product_card">
              <img src={pro1} alt="products" className="product_img" />
              <h3 className="Product_title"> سمك سلمون</h3>

              <div className="Product_price">
                <h4 className="price_after"> ج.م15</h4>
                <p className="price_pefore"> ج.م122</p>

                <div className="cart">
                  <img src={cart2} alt="cart" />
                </div>
              </div>

              <div className="discount">15%</div>

              <div className="Heart">
                <img src={heart} alt="Fav" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="Product_card">
              <img src={pro1} alt="products" className="product_img" />
              <h3 className="Product_title"> سمك سلمون</h3>

              <div className="Product_price">
                <h4 className="price_after"> ج.م15</h4>
                <p className="price_pefore"> ج.م122</p>

                <div className="cart">
                  <img src={cart2} alt="cart" />
                </div>
              </div>

              <div className="discount">15%</div>

              <div className="Heart">
                <img src={heart} alt="Fav" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="Product_card">
              <img src={pro1} alt="products" className="product_img" />
              <h3 className="Product_title"> سمك سلمون</h3>

              <div className="Product_price">
                <h4 className="price_after"> ج.م15</h4>
                <p className="price_pefore"> ج.م122</p>

                <div className="cart">
                  <img src={cart2} alt="cart" />
                </div>
              </div>

              <div className="discount">15%</div>

              <div className="Heart">
                <img src={heart} alt="Fav" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <div className="Product_card">
              <img src={pro1} alt="products" className="product_img" />
              <h3 className="Product_title"> سمك سلمون</h3>

              <div className="Product_price">
                <h4 className="price_after"> ج.م15</h4>
                <p className="price_pefore"> ج.م122</p>

                <div className="cart">
                  <img src={cart2} alt="cart" />
                </div>
              </div>

              <div className="discount">15%</div>

              <div className="Heart">
                <img src={heart} alt="Fav" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Sections;
