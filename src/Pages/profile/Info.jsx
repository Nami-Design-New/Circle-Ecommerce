import React from "react";
import Input from "../../inputs/Input.jsx";
import Button from "../../inputs/Button.jsx";

export const Info = () => {
  return (
    <section className="Register_section">
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
              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder="الاسم الاول"
                required={true}
              />
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="Form_group">
              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder=" الاسم الاخير"
                required={true}
              />
            </div>
          </div>
          <div className="col-12 col-lg-12 mb-3">
            <div className="Form_group">
              <select className="select">
                <option value="value1">المدينه</option>
                <option value="value1">Mango</option>
                <option value="value2">Banana</option>
                <option value="value3">Cherries</option>
              </select>
            </div>
          </div>

          <div className="Form_group">
            <Button
              label="تعـديل حسـاب"
              // onClick={handleClick}
              className="primary"
              // disabled={isDisabled}
            />
          </div>
        </div>
      </form>
    </section>
  );
};
