import React from "react";
import CategoryCard from "../../components/CategoryCard";
import sec1 from "../../../public/images/sec1.svg";
import Search from "../../inputs/SearchInputs";

const Categories = () => {
  return (
    <section className="AllCategorys">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            <Search />
          </div>
        </div>

        <div className="row mt-5 p-2">
          <div className="col-12 col-lg-3 mb-2">
            <CategoryCard title="ssss" ImgUrl={sec1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
