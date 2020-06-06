const REGEX = /^(\d{8})$/;

const validatePhone = (phone: string) => {
  if (phone === "") {
    return "";
  } else if (phone.match(REGEX) === null) {
    return "Ugyldig telefon-nummer";
  }

  return "";
};

export default validatePhone;
