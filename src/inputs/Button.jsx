import React from "react";
import "../assets/styles/_inputs.scss";

const Button = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
