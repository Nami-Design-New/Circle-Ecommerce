import React from "react";
import Input from "../inputs/Input";
import Button from "../inputs/Button.jsx";
// import MapComponent from "../components/Map.jsx";
import address from "../../public/images/address.svg";

const ContactUs = () => {
  return (
    <section className="Contact-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12 mb-5 m-auto">
            <form
              className="Login_section"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <h1> تـواصل معنـا</h1>
              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder=" الاسم"
                required={true}
              />

              <Input
                type="email"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder=" البريد الالكتروني"
                required={true}
              />

              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder=" عنوان الرسـاله"
                required={true}
              />
              <Input
                type="text"
                id="name"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder="الرساله "
                required={true}
              />

              <div className="Form_group">
                <Button
                  label=" إرســال"
                  // onClick={handleClick}
                  className="primary"
                  // disabled={isDisabled}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="Adresses">
              <div className="branch">
                -
                <img src={address} alt="address" />
                <h3>فرع شارع الجمهوريه</h3>
              </div>

              <div className="branch">
                -
                <img src={address} alt="address" />
                <h3>فرع شارع النصر</h3>
              </div>
            </div>
          </div>
          <div className="col-12 m-auto">
            <MapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
