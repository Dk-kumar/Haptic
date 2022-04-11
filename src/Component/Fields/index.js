import React from "react";
import './fieldStyle.css'

const InputField = ({ value, label, name, className, required, placeholder, type, onChange }) => {

  return (
    <div className={className}>
    {label && <label className={required && "required-field"} htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  </div>
  );
};

export default InputField;