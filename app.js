import express from "express";
import mongoose from "mongoose";
import schoolRoute from "./routes/school";
import studentRoute from "./routes/student";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//MongoDB connection
mongoose.connect(process.env.MONGO_CONNECTION, {
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
