import React from "react";
import swip2 from "../../public/images/swip2.webp";

const About = () => {
  return (
    <section className="About_us ">
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img src={swip2} width="808" height="458" alt="Lobby Image" />
          </div>

          <div className="about-us-info">
            <h2>من نحن </h2>

            <p>
              في سيركل، نحن نعتبر أن التسوق ليس مجرد عملية شراء، بل هو تجربة
              ممتعة ومريحة للجميع. منذ [سنة التأسيس]، قمنا بتوفير مجموعة متنوعة
              من المنتجات عالية الجودة التي تلبي احتياجات الأسرة بأكملها. نحن
              نلتزم بتقديم أفضل تجربة تسوق لعملائنا من خلال توفير منتجات موثوقة
              وخدمة عملاء ممتازة.
            </p>

            <a href="#" title="About Us Button">
              المزيد
            </a>
          </div>
        </div>

        <div id="history-section">
          <div className="history-image">
            <img
              src="https://digitalupgrade.com/images/building_pic.jpg"
              width="951"
              height="471"
              alt="Building Pic"
            />
          </div>

          <div className="history-info">
            <h2>مهمتنا</h2>

            <p>
              مهمتنا هي أن نقدم لك تجربة تسوق استثنائية تلبي جميع احتياجاتك
              اليومية. نهدف إلى تزويدك بمجموعة واسعة من المنتجات الطازجة،
              المعلبة، المجمدة، والمنتجات الصحية، بالإضافة إلى العروض الخاصة
              التي تساعدك على التوفير في ميزانيتك.
            </p>

            <a href="#" title="History Button">
              المزيد
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
