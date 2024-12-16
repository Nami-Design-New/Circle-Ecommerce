import React from "react";
import sec1 from "../../public/images/sec1.svg";

const ProductCard = () => {
  return (
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
  );
};

export default ProductCard;
