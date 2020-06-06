import express from "express";
import { validationResult } from "express-validator";
import { sendEmail } from "../sendEmail";

const handleFormSubmit = (req: express.Request, res: express.Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const { name, email, phone, comment, postalCode } = req.body;

  const notificationEmail = `Hello,
  
the form has been submitted!

Name: ${name}
Email: ${email}
Phone: ${phone}
Postal code: ${postalCode}

Comment: ${comment}
`;

  sendEmail(notificationEmail);

  res.end();
};

export { handleFormSubmit };
