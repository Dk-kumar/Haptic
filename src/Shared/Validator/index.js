export const emailValidator = (email) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};

export const phoneNumberValidator = (number) => {
    const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return numberRegex.test(number)
}