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
    if(window.innerWidth > 776) {
      return {
        Suffix: "", 
        Title: ""
      }
    }
  }

  let initialState = {
    ...(handelFields()),
    Firstname: "",
    Lastname: "",
    Email: "",
    Username: "",
    CountryCode: "",
    PhoneNumber: "",
    Password: "",
    ConfirmPassword: "",
  };
  console.log(initialState)
  let handelEyeIcon = {
    inputTypePassword: "password",
    inputTypeConfirmPassword: "password",
    isVisiblePassword: false,
    isVisibleConfirmPassword: false,
  };
  let toolTipMessage = {
    emailError: "hidden",
    phoneNumberError: "hidden",
  };
  const [inputValue, setInputValue] = useState(initialState);
  let [isDisabled, setDisabled] = useState(true);
  let [isShowTooltip, setTooltip] = useState(toolTipMessage);
  let [toggleIcon, setToggleIcon] = useState(handelEyeIcon);

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
  const {
    inputTypePassword,
    inputTypeConfirmPassword,
    isVisiblePassword,
    isVisibleConfirmPassword,
  } = toggleIcon;

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
    console.log(inputValue);
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

    setTooltip({
      ...isShowTooltip,
      emailError: "hidden",
      phoneNumberError: "hidden",
    });
  };

  const handelIcon = (field) => {
    if (field === "password") {
      if (inputTypePassword === "password") {
        return setToggleIcon({
          ...toggleIcon,
          inputTypePassword: "text",
          isVisiblePassword: true,
        });
      } else {
        return setToggleIcon({
          ...toggleIcon,
          inputTypePassword: "password",
          isVisiblePassword: false,
        });
      }
    } else {
      if (inputTypeConfirmPassword === "password") {
        return setToggleIcon({
          ...toggleIcon,
          inputTypeConfirmPassword: "text",
          isVisibleConfirmPassword: true,
        });
      } else {
        return setToggleIcon({
          ...toggleIcon,
          inputTypeConfirmPassword: "password",
          isVisibleConfirmPassword: false,
        });
      }
    }
  };

  const formHeader = () => {
    return (
      <div className="header-container">
        <h2>{Values.SignUp}</h2>
        <span className="header-content">
          {Values.SignInLink} <Link to="/signin">{Values.SignIn}</Link>
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

  const siginInLink = () => {
    return (
      <span className="header-content">
        {Values.SignInLink} <Link to="/signin">{Values.SignIn}</Link>
      </span>
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
              placeholder={Values.Suffix}
              label={Values.Suffix}
              name={Values.Suffix}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Title}
              placeholder={Values.Title}
              label={Values.Title}
              name={Values.Title}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Firstname}
              placeholder={Values.FirstName}
              label={Values.FirstName}
              name={Values.FirstName}
              className="inputField-header"
              onChange={handleChange}
            />
            <InputField
              type="text"
              value={Lastname}
              placeholder={Values.LastName}
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
                value={Email}
                placeholder={Values.Email}
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
              <p className="email-description">
                {Values.EmailPredefinedOption}
              </p>
              <div className="error-message">
                {emailError === "visible" && Email !== "" && (
                  <span>{Values.EmailTooltip}</span>
                )}
                {emailError === "visible" && Email === "" && (
                  <span>{Values.Required}</span>
                )}
              </div>
            </div>
            <InputField
              type="text"
              value={Username}
              placeholder={Values.UserName}
              label={Values.UserName}
              name={Values.UserName}
              className="inputField-body"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="form-bottom">
            <InputField
              type="text"
              value={CountryCode}
              placeholder=""
              label={Values.CountryCode}
              name={Values.NameCountryCode}
              className="inputField-bottom"
              required={true}
              onChange={handleChange}
            />
            <div className="code-wrapper">
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
              <div className="phone-wrapper">
                <InputField
                  type="text"
                  value={PhoneNumber}
                  placeholder={Values.PhoneNumber}
                  label={Values.PhoneNumber}
                  name={Values.NamePhoneNumber}
                  length="10"
                  className="inputField-bottom"
                  onChange={handleChange}
                  onBlur={() => handleValidation(Values.PhoneNumber)}
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
                <div className="error-message">
                  {phoneNumberError === "visible" && PhoneNumber !== "" && (
                    <span>{Values.MobileValidationError}</span>
                  )}
                  {phoneNumberError === "visible" && PhoneNumber === "" && (
                    <span>{Values.Required}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="password-wrapper">
              <InputField
                type={inputTypePassword}
                value={Password}
                placeholder={Values.PasswordPlaceholder}
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
                {isVisiblePassword ? visibilityIcon() : visibilityOffIcon()}
              </i>
            </div>
            <div className="password-wrapper">
              <InputField
                type={inputTypeConfirmPassword}
                value={ConfirmPassword}
                placeholder={Values.RepeatPassowrdPlaceholder}
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
                {isVisibleConfirmPassword
                  ? visibilityIcon()
                  : visibilityOffIcon()}
              </i>
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
        <div className="signIn-link">{siginInLink()}</div>
      </form>
    </>
  );
};

export default SignUpForm;
