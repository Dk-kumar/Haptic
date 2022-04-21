export const emailValidator = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const phoneNumberValidator = (number) => {
  const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return numberRegex.test(number);
};

export const userNameValidator = (name) => {
  const nameRegex = name.length > 6 ? true : false 
  return nameRegex
}

export const formButtonEnable = (fieldValue) => {
  let empty = Object.values(fieldValue).map((elem) => {
    if (elem === "") {
      return false;
    }
  });
  return empty.includes(false);
};

export const formValidation = (inputField, name) => {
  let fields = inputField;
  let errorsMessage = {};
  let formIsValid = true;
  
  if (!fields["Firstname"] && name === 'Firstname') {
    formIsValid = false;
    errorsMessage["Firstname"] = "Firstname is required";
  }

  if (!fields["Lastname"] && name === "Lastname") {
    formIsValid = false;
    errorsMessage["Lastname"] = "Lastname is required";
  }
  if (!fields["Username"] && name === "Username") {
    formIsValid = false;
    errorsMessage["Username"] = "Username is required";
  }

  if(!userNameValidator(fields["Username"]) && fields["Username"] !== '') {
    formIsValid = false;
    errorsMessage["Username"] = "Minimum 6 characters is required";
  }

  if (!fields["Email"] && name === "Email") {
    formIsValid = false;
    errorsMessage["Email"] = "Email is required";
  }

  if(!emailValidator(fields["Email"]) && fields["Email"] !== '') {
    formIsValid = false;
    errorsMessage["Email"] = "Make sure your email is valid";
  }

  if (!fields["PhoneNumber"] && name === "Phone") {
    formIsValid = false;
    errorsMessage["Phonenumber"] = "Number is required";
  }

  if(!phoneNumberValidator(fields["PhoneNumber"]) && fields["PhoneNumber"] !== '') {
    formIsValid = false;
    errorsMessage["Phonenumber"] = "MX phone number must be 10 digits";
  }

  if (!fields["Password"] && name === "Password") {
    formIsValid = false;
    errorsMessage["Password"] = "Password is required";
  }

  if (!fields["ConfirmPassword"] && name === "ConfirmPassword") {
    formIsValid = false;
    errorsMessage["ConfirmPassword"] = "Confirmpassword is required";
  }

  return {
    formIsValid,
    errorsMessage,
  };
};
