export const emailValidator = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

export const phoneNumberValidator = (number) => {
    const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return numberRegex.test(number)
}

export const formButtonEnable = (fieldValue) => {
 let empty = Object.values(fieldValue).map(elem => {
   if(elem === '') {
     return false
   }
 })
 return empty.includes(false)
}