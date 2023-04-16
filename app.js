const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const { errorHandler } = require("./middleware");
const {api: ctrl } = require("./routes");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/auth", ctrl.authRouter);
app.use("/user", ctrl.userRouter);
app.use("/tasks", ctrl.taskRouter);
app.use("/columns", ctrl.columnsRouter);

app.use(errorHandler);

module.exports = app;
