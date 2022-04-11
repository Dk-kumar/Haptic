import React, { useState } from "react";
import InputField from "../../../Component/Fields";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";
import "./registrationForm.style.css";

const SignUpForm = () => {
  let initialState = [{
    suffix: '',
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    countryCode: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  }]
  const [inputValue, setInputValue] = useState(initialState);
  const { suffix, title, firstName, lastName, email, userName, countryCode, phoneNumber, password, confirmPassword } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const formHeader = () => {
    return (
      <div className="header-container">
        <h2>Sign up</h2>
        <span>
          Already have an account? <a href="">Sign in</a>
        </span>
      </div>
    );
  };

  return (
    <>
      <form className="form-container">
        {formHeader()}
        <div className="form-wrapper">
          <div className="form-header">
            <InputField
              type="text"
              value={suffix}
              placeholder=""
              label="Suffix"
              name="Suffix"
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={title}
              placeholder=""
              label="Title"
              name="Title"
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={firstName}
              placeholder=""
              label="Firstname"
              name="Firstname"
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={lastName}
              placeholder=""
              label="Lastname"
              name="Lastname"
              className="inputField-header"
              onChange={handleChange}
            />
          </div>
          <div className="form-body">
            <div className="email-wrapper">
              <InputField
                type="email"
                value={email}
                placeholder=""
                label="Email"
                name="Email"
                className="inputField-body"
                required={true}
                onChange={handleChange}
              />
              <InputField
                type="checkbox"
                name="Email"
                className="inputField-checkbox"
                onChange={handleChange}
              />
              <p className="email-description">
                Click the checkbox to use email us predefined sign in option
              </p>
            </div>
            <InputField
              type="text"
              value={userName}
              placeholder=""
              label="Username"
              name="Username"
              className="inputField-body"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="form-bottom">
            <InputField
              type="text"
              value={countryCode}
              placeholder=""
              label="Country Code"
              name="countryCode"
              className="inputField-bottom"
              required={true}
              onChange={handleChange}
            />
            <div className="phone-wrapper">
              <InputField
                type="text"
                value={phoneNumber}
                placeholder=""
                label="Phone Number"
                name="phoneNumber"
                className="inputField-bottom"
                onChange={handleChange}
              />
              <InputField
                type="checkbox"
                name="Email"
                className="inputField-checkbox"
                onChange={handleChange}
              />
              <p className="phone-description">
                Click the checkbox to use phone us predefined sign in option
              </p>
            </div>

            <div className="password-wrapper">
              <InputField
                type="password"
                value={password}
                placeholder=""
                label="Password"
                name="password"
                className="inputField-bottom"
                required={true}
                onChange={handleChange}
              />
              <i
                className="visibility-icon"
              >
                {visibilityOffIcon()}
              </i>
            </div>
            <div className="password-wrapper">
              <InputField
                type="password"
                value={confirmPassword}
                placeholder=""
                label="Confirm Password"
                name="confirmPassword"
                className="inputField-bottom"
                required={true}
                onChange={handleChange}
              />
              <i
                className="visibility-icon"
              >
                {visibilityOffIcon()}
              </i>
            </div>
          </div>
          <div className="btn-submit">
            <InputField
              type="button"
              value="Create account"
              placeholder=""
              className="form-submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
