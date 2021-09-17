const express = require("express");
const mongoose = require("mongoose");
const schoolRoute = require("./routes/school");
const studentRoute = require("./routes/student");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect("mongodb://localhost:27017/schoolDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected Successfully");
});

//routes
app.use("/school", schoolRoute);
app.use("/student", studentRoute);

//Server Port
app.listen(5000, () => {
  console.log("Server up and running");
});
