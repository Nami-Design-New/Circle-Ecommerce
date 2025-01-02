import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="AllCategorys">
      <div className="container">
        <div className="row mt-5 p-2">
          <div className="col-12 col-lg-3 mb-2">
            <Link to="/subCategories" className="category_Box">
              <h2 className="Category_name"> اسم الفئه</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
