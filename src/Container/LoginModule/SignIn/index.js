import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../Component/Fields";
import { formButtonEnable, emailValidator } from "../../../Shared/Validator";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";
import { Values } from "../../../Constants";
import googleIcon from "../../../Shared/Images/googleIcon.png";
import facbookIcon from "../../../Shared/Images/facbookIcon.png";
import githubIcon from "../../../Shared/Images/githubIcon.png";
import "./signInForm.style.css";

const SignInForm = () => {
  let initialState = {
    UserId: "",
    Password: "",
  };

  let initialValidation = {
    UserId: false,
    Password: false,
    emailError: false,
  };

  const [inputValue, setInputValue] = useState(initialState);
  let [isDisabled, setDisabled] = useState(true);
  let [isShowPassword, setShowPassword] = useState(false);
  let [validation, setValidation] = useState(initialValidation);

  const { UserId, Password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    let showBtn = formButtonEnable(inputValue);
    if (!showBtn) {
      return setDisabled(false);
    }
    setDisabled(true);
  };

  const handleValidation = (type) => {
    if (type === Values.Email) {
      if (!emailValidator(UserId)) {
        return setValidation({
          ...validation,
          UserId: true,
        });
      }
    }
    if (type === Values.Password) {
      return setValidation({
        ...validation,
        Password: true,
      });
    }
    setValidation({
      ...validation,
      UserId: false,
    });
  };

  const formHeader = () => {
    return (
      <div className="header-container">
        <h2>{Values.SignIn}</h2>
        <span className="header-content">
          {Values.SignUpLink} <Link to="/signup">{Values.SignUp}</Link>
        </span>
      </div>
    );
  };

  const loginOptions = () => {
    return (
      <div className="login-option-container">
        <div>
          <p>Select preffered sign in option</p>
        </div>
        <div className="login-options">
          <InputField
            type="checkbox"
            value="Email"
            className="login-option"
            label={Values.Email}
          />
          <InputField
            type="checkbox"
            value="Phone"
            className="login-option"
            label={Values.PhoneNumber}
          />
          <InputField
            type="checkbox"
            value="Username"
            className="login-option"
            label={Values.UserName}
          />
        </div>
      </div>
    );
  };

  const bottomLinks = () => {
    return (
      <div className="bottom-links">
        <InputField
          type="checkbox"
          value=""
          className="remember-me"
          label={Values.RememberMe}
        />
        <p className="forgot-password">{Values.ForgotPassword}</p>
      </div>
    );
  };

  const socialLogin = () => {
    return (
      <div className="btn-icons">
        <div className="google-icon">
          <img src={googleIcon} alt="icon" />
        </div>
        <div className="fb-icon">
          <img src={facbookIcon} alt="icon" />
        </div>
        <div className="github-icon">
          <img src={githubIcon} alt="icon" />
        </div>
      </div>
    );
  };

  return (
    <>
      <form className="sigin-form-container">
        {formHeader()}
        <div className="form-wrapper">
          {loginOptions()}
          <div className="form-body">
            <div className="email-wrapper">
              <InputField
                type="text"
                value={UserId}
                label={Values.UserId}
                name={"UserId"}
                className="inputField-body"
                required={true}
                onChange={handleChange}
                border={validation.UserId}
                onBlur={() => handleValidation(Values.Email)}
              />
            </div>
            <div className="error-message">
              {validation.UserId && UserId !== "" && (
                <span>{Values.EmailTooltip}</span>
              )}
              {validation.UserId && UserId === "" && (
                <span>{Values.EmailError}</span>
              )}
            </div>
          </div>
          <div className="form-bottom">
            <div className="password-wrapper">
              <InputField
                type={isShowPassword ? "text" : "password"}
                value={Password}
                placeholder={Values.PasswordPlaceholder}
                label={Values.Password}
                name={Values.NamePassword}
                className="inputField-bottom"
                required={true}
                border={validation.Password && Password === "" ? true : false}
                onBlur={() => handleValidation(Values.Password)}
                onChange={handleChange}
              />
              <i
                onClick={() => setShowPassword(!isShowPassword)}
                className="visibility-icon"
              >
                {isShowPassword ? visibilityOffIcon() : visibilityIcon()}
              </i>
            </div>
            <div className="error-message">
              {Password === "" && validation.Password && (
                <span>{Values.PasswordError}</span>
              )}
            </div>
          </div>
          {bottomLinks()}
          <div className="btn-submit">
            <button
              type="submit"
              disabled={isDisabled}
              className={isDisabled ? "disabled-button" : "form-submit"}
            >
              {Values.SignIn}
            </button>
          </div>
          <div className="signin-line">
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

export default SignInForm;
