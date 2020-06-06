import * as fs from "fs";

const parsePostalCodeRegisterFile = () => {
  const fileContents = fs
    .readFileSync("data/postnummer_register.txt", {
      encoding: "utf-8",
    })
    .toString();

  const validPostalCodes = fileContents.split("\n").map((line) => {
    return line.split("\t")[0];
  });

  return validPostalCodes;
};

export { parsePostalCodeRegisterFile };
