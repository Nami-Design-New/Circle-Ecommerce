import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../assets/styles/_profile.scss";
import user from "../../public/images/user.svg";
import edit from "../../public/images/edit.svg";
import req from "../../public/images/req.svg";
import fav from "../../public/images/fav.svg";
import Delete from "../../public/images/Delete.svg";
import logout from "../../public/images/logout.svg";

const Profile = () => {
  return (
    <section className="Profile_layout">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3">
            <div className="Profile_Dashpoard">
              <div className="Profile_img">
                <img src={user} alt="profile" />
                <h2>عبوده الدالي</h2>
              </div>

              <ul className="List">
                <li>
                  <Link className="Link_profile">
                    <img src={edit} alt="edit" />

                    <span>تعديـل الحسـاب</span>
                  </Link>
                </li>

                <li>
                  <Link to="requests" className="Link_profile">
                    <img src={req} alt="rate" />

                    <span> طلباتي </span>
                  </Link>
                </li>

                <li>
                  <Link to="favorates" className="Link_profile">
                    <img src={fav} alt="rate" />
                    <span> المفضله </span>
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
