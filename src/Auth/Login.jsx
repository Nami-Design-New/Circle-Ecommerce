import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { Link } from "react-router-dom";
import Input from "../inputs/Input";
import Button from "../inputs/Button.jsx";

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

      <Input
        type="text"
        id="name"
        name="name"
        // value={formData.name}
        // onChange={handleInputChange}
        placeholder="رقم الجوال"
        required={true}
      />

      <div className="Form_group">
        <Button
          label="تسجيـل الدخـول"
          // onClick={handleClick}
          className="primary"
          // disabled={isDisabled}
        />
      </div>

      <Link to="register" className="Link_register">
        {" "} ليس لديك حسـاب ؟
      </Link>
    </form>
  );
};

export default Login;
