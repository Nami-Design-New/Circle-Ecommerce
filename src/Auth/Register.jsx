import React from "react";

const Register = () => {
  return (
    <section className="Register_section">
      <h1>اهلا بـك..!</h1>
      <h3>انشئ حسابك الان وتسوق معنـا..</h3>

      <form className="Register_form">
        <div className="row">
          <div className="col-12 col-lg-12 mb-3">
            <div className="Form_group file">
              <input type="file" className="form-image" />
              <span>+</span>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="Form_group">
              <input
                type="text"
                className="form-control"
                placeholder="الاسم الاول.."
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="Form_group">
              <input
                type="text"
                className="form-control"
                placeholder="الاسم الاخيـر.."
              />
            </div>
          </div>
          <div className="col-12 col-lg-12 mb-3">
            <div className="Form_group">
              <select class="select">
                <option value="value1">المدينه</option>
                <option value="value1">Mango</option>
                <option value="value2">Banana</option>
                <option value="value3">Cherries</option>
              </select>
            </div>
          </div>

          <div className="Form_group">
            <button className="Auth_btn">إنشــاء الحسـاب</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
