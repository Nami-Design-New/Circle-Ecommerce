import React from "react";
import location from "../../../public/images/location.svg";
import address from "../../../public/images/address.svg";
import Layer from "../../../public/images/Layer.svg";
import Button from "../../inputs/Button.jsx";

const Invoice = () => {
  return (
    <section className="Invoice">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12 mb-3">
            <div className="invoice_Tilte">
              <h1> الـفـاتوره</h1>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-3">
            <div className="invoice_card">
              <img src={location} alt="location" />
              <div className="address">
                <p>الفرع</p>
                <h2>شارع الحريه</h2>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-3">
            <div className="invoice_card">
              <img src={address} alt="location" />
              <div className="address">
                <p>عنوان التوصيل</p>
                <h2>شارع الحريه-الجيزه</h2>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4 mb-3">
            <div className="invoice_card">
              <img src={Layer} alt="location" />
              <div className="address">
                <p>طريقه الدفع</p>
                <h2> كاش</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-lg-12 mb-3">
            <div className="invoice_Tilte">
              <h1> طلبـاتك</h1>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-3">
            <div className="invoice_order">
              <h2>جمبري</h2>
              <div className="address">
                <p className="quant">2 x</p>
                <h2 className="price">25ج.م </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-3">
            <div className="invoice_order">
              <h2>جمبري</h2>
              <div className="address">
                <p className="quant">2 x</p>
                <h2 className="price">25ج.م </h2>
              </div>
            </div>
          </div>

          <div className="col-12 mt-3">
            <div className="total">
              <h2>
                الاجمـالي : <span>560 ج.م</span>
              </h2>
              <form>
                <Button label="إرسـال الطلب" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
