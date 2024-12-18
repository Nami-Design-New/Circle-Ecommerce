import React from "react";
import "../../assets/styles/_Products.scss";
import Search from "../../inputs/SearchInputs";
import ProductCard from "../../components/ProductCard";
import pro1 from "../../../public/images/pro1.svg";

const Products = () => {
  return (
    <section className="AllProuducts">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <Search />
          </div>
        </div>

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
    </section>
  );
};

export default Products;
