import React from "react";
import "./fieldStyle.css";

const InputField = ({
  value,
  label,
  name,
  length,
  className,
  required,
  type,
  onChange,
  onBlur,
}) => {
  return (
    <div className={className}>
      {label && (
        <label className={required && "required-field"} htmlFor="input-field">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        name={name}
        maxLength={length && length}
        className="form-control"
        onChange={onChange}
        onBlur={onBlur ? (e) => onBlur(e) : null}
      />
    </div>
  );
};

export default InputField;
