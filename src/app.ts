import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./router";
import "dotenv/config";

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(morgan("combined"));

app.use("/api/v1/", router);

export default app;
