import React from "react";
import product from "../../public/images/product.png";
import pri from "../../public/images/pri.svg";
import del from "../../public/images/del.svg";
import { Link } from "react-router-dom";
import Counter from "../inputs/Counter";
import Button from "../inputs/Button.jsx";

const Cart = () => {
  return (
    <section className="cart">
      <div className="container">
        <div className="row m-auto">
          <div className="col-12 mb-3">
            <div className="Cart_Box">
              <div className="Image">
                <div className="d-flex align-items-center gap-4 flex-column">
                  <div className="Img_cart">
                    <img src={product} alt="" />
                  </div>
                  <div>
                    <h3>اسم المنتج</h3>
                    <h4>
                      <img src={pri} alt="price" /> 250 ج.م
                    </h4>
                  </div>
                </div>
                <Link>
                  <img src={del} alt="Delete" />
                </Link>
              </div>
              <div className="Count_Box">
                <Counter />
                <div className="Total">
                  <h4>
                    الاجمالي : <span>50.0 ج. م</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="Cart_Box">
              <div className="Image">
                <div className="d-flex align-items-center gap-4 flex-column">
                  <div className="Img_cart">
                    <img src={product} alt="" />
                  </div>
                  <div>
                    <h3>اسم المنتج</h3>
                    <h4>
                      <img src={pri} alt="price" /> 250 ج.م
                    </h4>
                  </div>
                </div>
                <Link>
                  <img src={del} alt="Delete" />
                </Link>
              </div>
              <div className="Count_Box">
                <Counter />
                <div className="Total">
                  <h4>
                    الاجمالي : <span>50.0 ج. م</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-12 mb-2 mt-2 m-auto">
            <div className="d-flex align-items-center gap-4 ">
              <div className="Total">
                <h4>
                  الاجمالي : <span>50.0 ج. م</span>
                </h4>
              </div>

              <Button label="تأكيد الطلب" type="submit" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
