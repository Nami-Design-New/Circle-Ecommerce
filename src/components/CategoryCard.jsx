import React from "react";
import sec1 from "../../public/images/sec1.svg";

const CategoryCard = ({ ImgUrl, title }) => {
  return (
    <div className="CategoryCard">
      <img src={ImgUrl} alt="" />
      <h3>
        {title}
      </h3>
    </div>
  );
};

export default CategoryCard;
