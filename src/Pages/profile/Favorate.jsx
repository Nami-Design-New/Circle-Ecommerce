import React from "react";
import ProductCard from "../../components/ProductCard";
import pro1 from "../../../public/images/pro1.svg";

const Favorate = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-lg-3 mb-2">
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
  );
};

export default Favorate;
