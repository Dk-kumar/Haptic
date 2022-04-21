import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../Component/Fields";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";
import { Values } from "../../../Constants";
import {
  emailValidator,
  phoneNumberValidator,
  formButtonEnable,
} from "../../../Shared/Validator";
import "./signUpForm.style.css";

//Meterial UI components
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SignUpForm = () => {
  const handelFields = () => {
    if (window.innerWidth > 776) {
      return {
        Suffix: "",
        Title: "",
      };
    }
  };

  let initialState = {
    ...handelFields(),
    Firstname: "",
    Lastname: "",
    Email: "",
    Username: "",
    CountryCode: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  };

  let initialValidation = {
    Firstname: false,
    Lastname: false,
    Username: false,
    CountryCode: false,
  };

  let handelShowHide = {
    passwordField: false,
    confirmPasswordField: false,
  };

  let toolTipMessage = {
    emailError: "hidden",
    phoneNumberError: "hidden",
  };

  const [inputValue, setInputValue] = useState(initialState);
  let [isDisabled, setDisabled] = useState(true);
  let [isShowTooltip, setTooltip] = useState(toolTipMessage);
  let [isShowPassword, setShowPassword] = useState(handelShowHide);
  let [validation, setValidation] = useState(initialValidation);

  const {
    Suffix,
    Title,
    Firstname,
    Lastname,
    Email,
    Username,
    CountryCode,
    PhoneNumber,
    Password,
    ConfirmPassword,
  } = inputValue;

  const { emailError, phoneNumberError } = isShowTooltip;
  const { passwordField, confirmPasswordField } = isShowPassword;

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "PhoneNumber") {
      if (isNaN(value)) return false;
    }
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    let showBtn = formButtonEnable(inputValue);
    if (
      showBtn === false &&
      emailError === "hidden" &&
      phoneNumberError === "hidden"
    ) {
      setDisabled(false);
    }
  };

  const handleValidation = (type) => {
    const { Email, PhoneNumber } = inputValue;
    if (type === Values.Email) {
      if (!emailValidator(Email)) {
        return setTooltip({
          ...isShowTooltip,
          emailError: "visible",
        });
      }
    }

    if (type === Values.PhoneNumber) {
      if (!phoneNumberValidator(PhoneNumber)) {
        return setTooltip({
          ...isShowTooltip,
          phoneNumberError: "visible",
        });
      }
    }
    if (type === Values.FirstName) {
      return setValidation({
        ...validation,
        Firstname: true,
      });
    }

    if (type === Values.LastName) {
      return setValidation({
        ...validation,
        Lastname: true,
      });
    }

    if (type === Values.UserName) {
      return setValidation({
        ...validation,
        Username: true,
      });
    }

    if (type === Values.CountryCode) {
      return setValidation({
        ...validation,
        CountryCode: true,
      });
    }

    setTooltip({
      ...isShowTooltip,
      emailError: "hidden",
      phoneNumberError: "hidden",
    });
  };

  const handelIcon = (field) => {
    if (field === "password") {
      setShowPassword({
        ...isShowPassword,
        passwordField: !passwordField,
      });
    } else {
      setShowPassword({
        ...isShowPassword,
        confirmPasswordField: !confirmPasswordField,
      });
    }
  };

  const formHeader = () => {
    return (
      <div className="header-container">
        <h2>{Values.SignUp}</h2>
        <span className="header-content">
          {Values.SignInLink} <Link to="/">{Values.SignIn}</Link>
        </span>
      </div>
    );
  };

  const socialLogin = () => {
    return (
      <div className="socialLogin-container">
        <InputField
          type="button"
          value={Values.GoogleLogin}
          placeholder=""
          className="google-login"
        />
        <InputField
          type="button"
          value={Values.FaceBookLogin}
          placeholder=""
          className="google-login"
        />
        <InputField
          type="button"
          value={Values.GitHubLogin}
          placeholder=""
          className="github-login"
        />
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
              value={Suffix}
              label={Values.Suffix}
              name={Values.Suffix}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Title}
              label={Values.Title}
              name={Values.Title}
              className="inputField-header"
              onChange={handleChange}
            />
            <div>
              <InputField
                type="text"
                value={Firstname}
                label={Values.FirstName}
                name={Values.FirstName}
                className="inputField-header"
                onChange={handleChange}
                required={true}
                onBlur={() => handleValidation(Values.FirstName)}
              />
              <div className="error-message">
                {Firstname === "" && validation.Firstname === true && (
                  <span>Firstname is required</span>
                )}
              </div>
            </div>
            <div>
              <InputField
                type="text"
                value={Lastname}
                label={Values.LastName}
                name={Values.LastName}
                className="inputField-header"
                onChange={handleChange}
                required={true}
                onBlur={() => handleValidation(Values.LastName)}
              />
              <div className="error-message">
                {Lastname === "" && validation.Lastname === true && (
                  <span>Lastname is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-body">
            <div className="email-wrapper">
              <div className="email-checkbox">
                <InputField
                  type="email"
                  value={Email}
                  label={Values.Email}
                  name={Values.Email}
                  className="inputField-body"
                  required={true}
                  onChange={handleChange}
                  onBlur={() => handleValidation(Values.Email)}
                />
                <InputField
                  type="checkbox"
                  name={Values.Email}
                  className="inputField-checkbox"
                  onChange={handleChange}
                />
              </div>
              <div className="error-message">
                {emailError === "visible" && Email !== "" && (
                  <span>{Values.EmailTooltip}</span>
                )}
                {emailError === "visible" && Email === "" && (
                  <span>{Values.Required}</span>
                )}
              </div>
              <p className="signUp email-description">
                {Values.EmailPredefinedOption}
              </p>
            </div>
            <div>
              <InputField
                type="text"
                value={Username}
                label={Values.UserName}
                name={Values.UserName}
                className="inputField-body"
                required={true}
                onChange={handleChange}
                onBlur={() => handleValidation(Values.UserName)}
              />
              <div className="error-message">
                {Lastname === "" && validation.Username === true && (
                  <span>Username is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="form-bottom">
            <div className="code-wrapper">
              <div className="countrycode-wrapper">
                <label>Country Code</label>
                <Box
                  sx={{ m: 1, flexBasis: "24%", margin: "1rem 0rem 0rem 0rem" }}
                  size="small"
                >
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={CountryCode}
                      label=""
                      name={Values.NameCountryCode}
                      onChange={handleChange}
                    >
                      <MenuItem value={+91}>+91</MenuItem>
                      <MenuItem value={+862}>+862</MenuItem>
                      <MenuItem value={+99}>+99</MenuItem>
                      <MenuItem value={+7432}>+7432</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="phone-wrapper">
                <div className="phone-chekbox">
                  <InputField
                    type="text"
                    value={PhoneNumber}
                    label={Values.PhoneNumber}
                    name={Values.NamePhoneNumber}
                    length="10"
                    required={true}
                    className="inputField-bottom phoneNumberField"
                    onChange={handleChange}
                    onBlur={() => handleValidation(Values.PhoneNumber)}
                  />
                  <InputField
                    type="checkbox"
                    name={Values.Email}
                    className="inputField-checkbox"
                    onChange={handleChange}
                  />
                </div>
                <div className="error-message">
                  {phoneNumberError === "visible" && PhoneNumber !== "" && (
                    <span>{Values.MobileValidationError}</span>
                  )}
                  {phoneNumberError === "visible" && PhoneNumber === "" && (
                    <span>{Values.Required}</span>
                  )}
                </div>
                <p className="signUp phone-description">
                  {Values.PholePredefinedOption}
                </p>
              </div>
            </div>
            <div className="passwordField">
              <div className="password-wrapper">
                <InputField
                  type={passwordField ? "text" : "password"}
                  value={Password}
                  label={Values.Password}
                  name={Values.NamePassword}
                  className="inputField-bottom"
                  required={true}
                  onChange={handleChange}
                />
                <i
                  onClick={() => handelIcon("password")}
                  className="visibility-icon"
                >
                  {passwordField ? visibilityIcon() : visibilityOffIcon()}
                </i>
              </div>
              <div className="password-wrapper">
                <InputField
                  type={confirmPasswordField ? "text" : "password"}
                  value={ConfirmPassword}
                  label={Values.ConfirmPassword}
                  name={Values.NameConfirmPassword}
                  className="inputField-bottom"
                  required={true}
                  onChange={handleChange}
                />
                <i
                  onClick={() => handelIcon("confirmPassword")}
                  className="visibility-icon"
                >
                  {confirmPasswordField ? visibilityIcon() : visibilityOffIcon()}
                </i>
              </div>
            </div>
          </div>
          <div className="btn-submit">
            <button
              type="submit"
              disabled={isDisabled}
              className={isDisabled ? "disabled-button" : "form-submit"}
            >
              {Values.CreateAccount}
            </button>
          </div>
          <div className="lines">
            <div className="line-left"></div>
            <span>OR</span>
            <div className="line-right"></div>
          </div>
          {socialLogin()}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
