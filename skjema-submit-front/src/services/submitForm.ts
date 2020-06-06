const submitForm = (
  name: string,
  email: string,
  phone: string,
  postalCode: string,
  comment: string
) => {
  return fetch("/submit-form", {
    method: "POST",
    body: JSON.stringify({ name, email, phone, postalCode, comment }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response;
  });
};

export default submitForm;
