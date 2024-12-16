import React from "react";
import "../assets/styles/_Auth.scss";
import { Outlet } from "react-router-dom";
import Logo from "../../public/images/Logo.svg";

const AuthLayout = () => {
  return (
    <section className="Auth_layout">
      <div className="row">
        <div className="col-12 col-lg-7 p-0">
          <div className="Auth_logo">
            <img src={Logo} alt="Logo" />
          </div>
        </div>

        <div className="col-12 col-lg-5 Auth_pages p-0">
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
