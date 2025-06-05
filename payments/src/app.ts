import express from "express";
import "express-async-errors";

import cookieSession from "cookie-session";
import {
  currentUser,
  errorHandler,
  NotFoundError,
} from "@abraham-org-tickets/common";
import { CreateChargeRouter } from "./routes/new";

const app = express();
app.set("trust proxy", true); // Trust the first proxy (for Heroku)
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // secure: process.env.NODE_ENV !== "test",
  })
);

app.use(currentUser);
app.use(CreateChargeRouter);

app.all("*", async () => {
  throw new NotFoundError("Route not found");
});

app.use(errorHandler);

export { app };
