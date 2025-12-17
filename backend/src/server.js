import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Success from ap i" });
});

app.listen(ENV.PORT, () =>
  console.log(`Connected with the server ${ENV.PORT}`)
);
