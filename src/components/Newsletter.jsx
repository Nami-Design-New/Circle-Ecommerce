import React from "react";
import "../assets/styles/_home.scss";
import { Link } from "react-router-dom";

const Newsletter = () => {
  return (
    <section className="newslletter">
      <div className="content">
        <h2>
          احصل علي خصم يصل الى <span>20%</span>
        </h2>
        <Link to="contactus" className="Contact_Us">
          {" "}contact us
        </Link>
      </div>
    </section>
  );
};

export default Newsletter;
