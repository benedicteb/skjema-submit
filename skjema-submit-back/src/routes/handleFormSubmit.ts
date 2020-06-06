import express from "express";
import { validationResult } from "express-validator";

const handleFormSubmit = (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, phone, comment, postalCode } = req.body;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(comment);
  console.log(postalCode);

  res.end();
};

export { handleFormSubmit };
