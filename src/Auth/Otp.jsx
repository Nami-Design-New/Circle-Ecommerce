import React, { useState } from "react";
import Button from "../inputs/Button.jsx";
import ottp from "../../public/images/ottp.svg";

const OTPPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(null);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    //move to next input
    if (value !== "" && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  // handle submit
  const handleSubmit = () => {
    const otpCode = otp.join("");
    if (otpCode.length === 4) {
      console.log("OTP Code:", otpCode);
      // هنا يمكنك إرسال OTP للتحقق
    } else {
      setError("يرجى إدخال رمز OTP كاملاً.");
    }
  };

  return (
    <div className="otp-container">
      <div className="container">
        <div className="row m-auto">
          <div className="col-12">
            <div className="image">
              <img src={ottp} alt="otp" />
              <p className="Otp_advice">
                من فضلك ادخل رمز التحقق المرسل الي رقم الجوال...
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="otp-inputs">
              {otp.map((value, index) =>
                <input
                  key={index}
                  type="text"
                  id={`otp-input-${index}`}
                  value={value}
                  onChange={e => handleChange(e, index)}
                  maxLength={1}
                  autoFocus={index === 0}
                />
              )}
            </div>
            <Button label="تسجيل الدخول" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
