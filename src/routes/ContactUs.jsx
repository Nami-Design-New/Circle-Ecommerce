import React from "react";
import Input from "../inputs/Input";
import Button from "../inputs/Button.jsx";
// import GoogleMapReact from "google-map-react";

const ContactUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <section>
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
          <div className="col-12">
            <div style={{ height: "100vh", width: "100%" }}>
              {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 m-auto">
            <div style={{ height: "100vh", width: "100%" }}>
              {/* <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
