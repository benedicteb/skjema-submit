import { parsePostalCodeRegisterFile } from "../parsePostalCodeRegisterFile";

const validatePostalCode = (postalCode: string): boolean => {
  const validPostalCodes = parsePostalCodeRegisterFile();

  return validPostalCodes.includes(postalCode);
};

export { validatePostalCode };
