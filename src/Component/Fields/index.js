import React from "react";
import './fieldStyle.css'

const InputField = ({ value, label, name, length, className, required, placeholder, type, onChange, onBlur }) => {

  return (
    <div className={className}>
    {label && <label className={required && "required-field"} htmlFor="input-field">{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      maxLength={length && length}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur ? (e) => onBlur(e) : null}
      required
    />
  </div>
  );
};

export default InputField;