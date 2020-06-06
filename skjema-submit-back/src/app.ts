import express from "express";
import { checkHealth } from "./routes/health";
import cors from "cors";
import { CORS_ALLOWED_ORIGIN } from "./config";

const app = express();

app.use(express.json());

app.use(cors({ origin: CORS_ALLOWED_ORIGIN }));

app.get("/health", checkHealth);

export default app;
