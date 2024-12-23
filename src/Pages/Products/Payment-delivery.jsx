import React from "react";
import product from "../../../public/images/product.png";
import "../../assets/styles/Main.scss";
import Button from "../../inputs/Button.jsx";

const PaymentDelivery = () => {
  return (
    <section className="payment_delivery">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3">
            <div className="Card">
              <img src={product} alt="" />
              <div className="Name">
                <h4>برودكت</h4>
                <span>x 2 </span>
              </div>
              <h2>
                الاجمـالي : <span>560 ج.م</span>
              </h2>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="Card">
              <img src={product} alt="" />
              <div className="Name">
                <h4>برودكت</h4>
                <span>x 2 </span>
              </div>
              <h2>
                الاجمـالي : <span>560 ج.م</span>
              </h2>
            </div>
          </div>
          <div className="col-12 mb-2">
            <form>
              <div className="row">
                <div className="col-lg-6 col-12 mb-2">
                  <select className="select ">
                    <option value="value1">عنوان التوصيـل</option>
                    <option value="value1">Mango</option>
                    <option value="value2">Banana</option>
                    <option value="value3">Cherries</option>
                  </select>
                </div>
                <div className=" col-lg-6 col-12  mb-2">
                  <select className="select">
                    <option value="value1">طريقه الدفع؟</option>
                    <option value="value1">Mango</option>
                    <option value="value2">Banana</option>
                    <option value="value3">Cherries</option>
                  </select>
                </div>
              </div>
            </form>
          </div>

          <div className="col-12 mt-3">
            <div className="total">
              <h2>
                الاجمـالي : <span>560 ج.م</span>
              </h2>
              <form>
                <Button label="تـأكـيد" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDelivery;
