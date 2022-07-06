const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date) => {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join("-");
};

export const validateEmail = (email) => {
  console.info("Checking if " + email + " is a valid email");
  return /\S+@\S+\.\S+/.test(email);
};
