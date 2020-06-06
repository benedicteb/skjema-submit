const validatePostalCode = (postalCode: string) => {
  if (postalCode === "") {
    return "";
  }

  const postalCodeAsInt = parseInt(postalCode);

  if (postalCodeAsInt > 9999 || postalCodeAsInt < 1000) {
    return "Ugyldig postnummer";
  }

  return "";
};

export default validatePostalCode;
