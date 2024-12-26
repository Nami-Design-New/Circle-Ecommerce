import React from "react";
import CategoryCard from "../../components/CategoryCard";
import sec1 from "../../../public/images/sec1.svg";

const Categories = () => {
  return (
    <section className="AllCategorys">
      <div className="container">
        <div className="row mt-5 p-2">
          <div className="col-12 col-lg-3 mb-2">
            <CategoryCard title="ssss" ImgUrl={sec1} />
          </div>

          <div className="col-12 col-lg-3 mb-2">
            <CategoryCard title="ssss" ImgUrl={sec1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
