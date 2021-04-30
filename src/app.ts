import express from "express";
import bodyParser from "body-parser";
import path from "path";

process.on("uncaughtException", (e) => {
  console.log(e);
});

const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Focus <3<br> We are up and aware and caring for you!");
});

// app.use("/user", userRouter);

export default app;