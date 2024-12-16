import React from "react";
import "../../assets/styles/_Products.scss";
import search from "../../../public/images/search.svg";

const Products = () => {
  return (
    <section className="AllProuducts">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <div className="search">
              <input
                className="search-txt"
                type="text"
                name=""
                placeholder="بحث...  "
              />

              <a className="search-btn" href="#">
                <img src={search} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
