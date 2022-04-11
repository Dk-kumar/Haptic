import React, { useState } from "react";
import InputField from "../../../Component/Fields";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";
import { Values } from "../../../Constants";
import "./signUpForm.style.css";

const SignUpForm = () => {
  let initialState = [
    {
      suffix: "",
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      countryCode: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  ];
  const [inputValue, setInputValue] = useState(initialState);
  const {
    suffix,
    title,
    firstName,
    lastName,
    email,
    userName,
    countryCode,
    phoneNumber,
    password,
    confirmPassword,
  } = inputValue;

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
        <h2>{Values.SignUp}</h2>
        <span>
          {Values.ExistingCustomer} <a href="">{Values.SignUp}</a>
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
              label={Values.Suffix}
              name={Values.Suffix}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={title}
              placeholder=""
              label={Values.Title}
              name={Values.Title}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={firstName}
              placeholder=""
              label={Values.FirstName}
              name={Values.FirstName}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={lastName}
              placeholder=""
              label={Values.LastName}
              name={Values.LastName}
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
                label={Values.Email}
                name={Values.Email}
                className="inputField-body"
                required={true}
                onChange={handleChange}
              />
              <InputField
                type="checkbox"
                name={Values.Email}
                className="inputField-checkbox"
                onChange={handleChange}
              />
              <p className="email-description">
                {Values.EmailPredefinedOption}
              </p>
            </div>
            <InputField
              type="text"
              value={userName}
              placeholder=""
              label={Values.UserName}
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
              label={Values.CountryCode}
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
                label={Values.PhoneNumber}
                name="phoneNumber"
                className="inputField-bottom"
                onChange={handleChange}
              />
              <InputField
                type="checkbox"
                name={Values.Email}
                className="inputField-checkbox"
                onChange={handleChange}
              />
              <p className="phone-description">
                {Values.PholePredefinedOption}
              </p>
            </div>

            <div className="password-wrapper">
              <InputField
                type="password"
                value={password}
                placeholder=""
                label={Values.Password}
                name="password"
                className="inputField-bottom"
                required={true}
                onChange={handleChange}
              />
              <i className="visibility-icon">{visibilityOffIcon()}</i>
            </div>
            <div className="password-wrapper">
              <InputField
                type="password"
                value={confirmPassword}
                placeholder=""
                label={Values.ConfirmPassword}
                name="confirmPassword"
                className="inputField-bottom"
                required={true}
                onChange={handleChange}
              />
              <i className="visibility-icon">{visibilityOffIcon()}</i>
            </div>
          </div>
          <div className="btn-submit">
            <InputField
              type="button"
              value={Values.CreateAccount}
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
