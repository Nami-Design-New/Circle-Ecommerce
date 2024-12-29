import React from "react";
import Search from "../inputs/SearchInputs";

const Header = () => {
  return (
    <section className="Header_section">
      <div className="content">
        <Search />
        <div className="title">
          <h1>خضروات صحية تستحق أن تأكلها طازجة</h1>
          <p>
            نحن نستورد ونبيع أفضل أنواع اللحوم والخضروات والتي يتم الحصول عليها
            بعناية فائقة من المزارع
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
