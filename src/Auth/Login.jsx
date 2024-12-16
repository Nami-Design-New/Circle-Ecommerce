import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";

const Login = () => {
  const [selected, setSelected] = useState("EG");

  return (
    <form className="Login_section">
      <h1>اهلا بـك..!</h1>
      <h3>سجل الدخول في موقعنا و اطلب الآن ..</h3>
      <ReactFlagsSelect
        countries={["EG", "GB", "FR", "DE", "IT"]}
        selected={selected}
        onSelect={code => setSelected(code)}
        className="input_flag "
      />
      <div className="Form_group">
        <input
          className="form-control"
          type="text"
          placeholder="رقم الجوال.. "
        />
      </div>

      <div className="Form_group">
        <button className="Auth_btn">دخول</button>
      </div>

      <Link to="register" className="Link_register">
        {" "} ليس لديك حسـاب ؟
      </Link>
    </form>
  );
};

export default Login;
