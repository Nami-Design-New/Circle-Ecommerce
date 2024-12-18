// Input.js
import React from "react";

const Input = ({
  type = "text",
  id,
  name,
  value,
  placeholder,
  onChange,
  required = false
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      className="input-field"
    />
  );
};

export default Input;
