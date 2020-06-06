import express from "express";
import { checkHealth } from "./routes/health";
import cors from "cors";
import { CORS_ALLOWED_ORIGIN } from "./config";
import { handleFormSubmit } from "./routes/handleFormSubmit";
import { body } from "express-validator";
import { validatePostalCode } from "./validators";
const { check, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

app.use(cors({ origin: CORS_ALLOWED_ORIGIN }));

app.get("/health", checkHealth);

app.post(
  "/submit-form",
  [
    check("name").not().isEmpty().trim().escape(),
    check("email").isEmail().normalizeEmail(),
    check("phone")
      .not()
      .isEmpty()
      .isAlphanumeric()
      .isLength({ min: 8, max: 8 }),
    check("comment").trim().escape(),
    body("postalCode")
      .isAlphanumeric()
      .isLength({ min: 4, max: 4 })
      .custom(validatePostalCode),
  ],
  handleFormSubmit
);

export default app;
