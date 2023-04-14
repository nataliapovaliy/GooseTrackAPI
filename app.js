const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler, authMiddleware } = require("./middlewares");
const {api: ctrl } = require("./routes");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
// app.use(express.static("public"));

app.use("/auth", ctrl.authRouter);
app.use(authMiddleware);
app.use("/user", ctrl.userRouter);
app.use("/tasks", ctrl.taskRouter);
app.use("/columns", ctrl.columnsRouter);

app.use(errorHandler);

module.exports = app;
