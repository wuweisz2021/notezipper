require ('dotenv').config();

// import path from "path";
// import noteRoutes from "./routes/noteRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const mongoose = require("mongoose");
const userModel = require("./models");
const validator = require('validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //cross-orign resource sharing
const app = express();
const port = 5000; // Must be different than the port of the React app
app.use(cors());// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
mongoose.connect("mongodb+srv://mongouser:" + process.env.MONGODB_PWD +"@cluster0.z0czpjb.mongodb.net/myFirstDB?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
});

app.use(express.json()); // to accept json data

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);

// --------------------------deployment------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
