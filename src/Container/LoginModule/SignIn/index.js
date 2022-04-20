import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../../../Component/Fields";
import { formButtonEnable } from "../../../Shared/Validator";
import { visibilityIcon, visibilityOffIcon } from "../../../Shared/Icons";
import { Values } from "../../../Constants";
import "./signInForm.style.css";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SignInForm = () => {
  let initialState = {
    Email: "",
    Username: "",
    CountryCode: "",
    PhoneNumber: "",
    Password: "",
  };
  
  const [inputValue, setInputValue] = useState(initialState);
  let [isDisabled, setDisabled] = useState(true);
  let [isShowPassword, setShowPassword] = useState(false);

  const { Email, Username, CountryCode, PhoneNumber, Password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    let showBtn = formButtonEnable(inputValue);
    if (showBtn === false) {
      setDisabled(false);
    }
    console.log(inputValue);
  };

  const formHeader = () => {
    return (
      <div className="header-container">
        <h2>{Values.SignIn}</h2>
        <span className="header-content">
          {Values.SignUpLink} <Link to="/">{Values.SignUp}</Link>
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

  const siginUpLink = () => {
    return (
      <span className="header-content">
        {Values.SignUpLink} <Link to="/">{Values.SignUp}</Link>
      </span>
    );
  };

  return (
    <>
      <form className="form-container">
        {formHeader()}
        <div className="form-wrapper">
          <div className="form-body">
            <div className="email-wrapper">
              <InputField
                type="text"
                value={Username}
                placeholder={Values.UserName}
                label={Values.UserName}
                name="Username"
                className="inputField-body"
                required={true}
                onChange={handleChange}
              />
              <InputField
                type="email"
                value={Email}
                placeholder={Values.Email}
                label={Values.Email}
                name={Values.Email}
                className="inputField-body"
                required={true}
                onChange={handleChange}
              />
            </div>
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
                    name={Values.NameCountryCode}
                    label=""
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
            </div>
            <div className="password-wrapper">
              <InputField
                type={isShowPassword ? "text" : "password"}
                value={Password}
                placeholder={Values.PasswordPlaceholder}
                label={Values.Password}
                name={Values.NamePassword}
                className="inputField-bottom"
                required={true}
                onChange={handleChange}
              />
              <i
                onClick={() => setShowPassword(!isShowPassword)}
                className="visibility-icon"
              >
                {isShowPassword ? visibilityIcon() : visibilityOffIcon()}
              </i>
            </div>
          </div>
          <div className="btn-submit">
            <button
              type="submit"
              disabled={isDisabled}
              className={isDisabled ? "disabled-button" : "form-submit"}
            >
              {Values.SignIn}
            </button>
          </div>
          <div className="lines">
            <div className="line-left"></div>
            <span>OR</span>
            <div className="line-right"></div>
          </div>
          {socialLogin()}
        </div>
        <div className="signUp-link">{siginUpLink()}</div>
      </form>
    </>
  );
};

export default SignInForm;
