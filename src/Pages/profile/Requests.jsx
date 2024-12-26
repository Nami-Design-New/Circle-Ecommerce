import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PaymentDelivery from "../Products/Payment-delivery";

const Requests = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 Tabs"
    >
      <Tab eventKey="home" title="الطلبـات الحاليـه" className="Tab">
        <PaymentDelivery />
      </Tab>
      <Tab eventKey="profile" title="الطلبـات السـابقـه" className="Tab">
        <PaymentDelivery />
      </Tab>
    </Tabs>
  );
};

export default Requests;
