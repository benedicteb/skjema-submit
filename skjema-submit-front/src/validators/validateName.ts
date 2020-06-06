const validateName = (name: string): string => {
  if (name === "") {
    return "";
  } else if (name.length <= 2) {
    return "Navnet er for kort";
  }

  return "";
};

export default validateName;
