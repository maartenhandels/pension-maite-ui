export const validateEmail = (email) => {
  console.info("Checking if " + email + " is a valid email");
  return /\S+@\S+\.\S+/.test(email);
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
