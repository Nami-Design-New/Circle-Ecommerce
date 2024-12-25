import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/_profile.scss";
import user from "../../public/images/user.svg";
import edit from "../../public/images/edit.svg";
import rate from "../../public/images/rate.svg";
import Delete from "../../public/images/Delete.svg";
import logout from "../../public/images/logout.svg";

const Profile = () => {
  return (
    <section className="Profile_layout">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="Profile_Dashpoard">
              <ul className="List">
                <li>
                  <img src={user} alt="profile" />
                  <h2>عبوده الدالي</h2>
                </li>

                <li>
                  <Link to="editProfile" className="Link_profile">
                    <img src={edit} alt="edit" />

                    <span>تعديـل الحسـاب</span>
                  </Link>
                </li>

                <li>
                  <Link to="rate" className="Link_profile">
                    <img src={rate} alt="rate" />

                    <span> تقييم التطبيق</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="Link_profile">
                    <img src={logout} alt="delete" />

                    <span> تسجيـل الخروج</span>
                  </Link>
                </li>

                <li>
                  <Link to="/" className="Link_profile">
                    <img src={Delete} alt="delete" />

                    <span style={{ color: "#df1c26" }}>حـذف الحسـاب</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
