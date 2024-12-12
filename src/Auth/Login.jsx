import React from "react";
import logo from "../../public/images/logo.svg";

const Login = () => {
  return (
    <section className="Login_section">
      <div className="row">
        <div className="col-6 col-lg-6">login</div>

        <div className="col-6 col-lg-6">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Login;
