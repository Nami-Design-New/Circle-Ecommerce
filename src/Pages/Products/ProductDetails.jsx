import React from "react";
import "../../assets/styles/_Products.scss";
import product from "../../../public/images/product.png";
import heart from "../../../public/images/heart.svg";
import pri from "../../../public/images/pri.svg";
import Counter from "../../inputs/Counter";
import Button from "../../inputs/Button.jsx";

const ProductDetails = () => {
  return (
    <section className="Products_Deatils">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-3">
            <div className="Product_details_images">
              <img src={product} alt="Product" />
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="Details">
              <div className="Name">
                <h3>اسم المنتج </h3>
                <img src={heart} alt="Heart" />
              </div>
              <div className="Descreption">Descreption</div>
              <div className="Price">
                <h4>
                  <img src={pri} alt="price" /> السـعر :
                </h4>
                <h2>$252</h2>
              </div>
              <Counter />

              <div className="AddToCart">
                <h5>الاجمالي: 25 ج.م</h5>
                <Button label="أضــف للـسـلة" type="submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
