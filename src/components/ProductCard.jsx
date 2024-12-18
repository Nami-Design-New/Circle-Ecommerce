import React from "react";
import cart2 from "../../public/images/cart2.svg";
import heart from "../../public/images/heart.svg";

const ProductCard = ({ ImgUrl, title, PriceAfter, PricePefore, discount }) => {
  return (
    <div className="Product_card">
      <img src={ImgUrl} alt="products" className="product_img" />
      <h3 className="Product_title">
        {title}
      </h3>

      <div className="Product_price">
        <h4 className="price_after">
          {PriceAfter}
        </h4>
        <p className="price_pefore">
          {PricePefore}
        </p>

        <div className="cart">
          <img src={cart2} alt="cart" />
        </div>
      </div>

      <div className="discount">
        {discount}
      </div>

      <div className="Heart">
        <img src={heart} alt="Fav" />
      </div>
    </div>
  );
};

export default ProductCard;
