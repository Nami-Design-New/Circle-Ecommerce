import React from "react";
import app from "../../public/images/app.webp";
import playStore from "../../public/images/playStore.webp";
import appStore from "../../public/images/appStore.webp";

import { Link } from "react-router-dom";

const DowenloadApp = () => {
  return (
    <section className="Download_app">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center ">
            <div className="content">
              <h2>
                {" "}اجعل التسوق عبر الإنترنت أسهل من خلال تطبيق الهاتف المحمول
                الخاص بنا
              </h2>
              <div className="Store">
                <Link>
                  <img src={playStore} alt="app" />
                </Link>
                <Link>
                  <img src={appStore} alt="app" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="Images">
              <img src={app} alt="app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DowenloadApp;
