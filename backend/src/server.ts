import express, { NextFunction, Request, Response } from "express";
import 'express-async-errors'
import "reflect-metadata";
import { routes } from "./shared/http/routes";
import "./shared/infra/typeorm/database";
import "./shared/container";
import { AppError } from "./shared/errors/AppError";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
    console.error(err)
    return response.status(500).json({
      status: "error",
      message: "internal server error",
    });
  }
);

app.listen(PORT, () => {
  console.log("🐺 server is running at port 3333");
});
