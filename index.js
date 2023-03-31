const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose")

const port = 3030;
const app = express();

const Routes = require("./Routes/routes");

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.use(express.json());

const corsOption = {
  origin: "*",
  method: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  credentials: true
};

app.use(cors(corsOption));

const mongoURL = "mongodb+srv://michigordoelegante:superpantera@cluster0.rqzi6mu.mongodb.net/sailorMoon"

mongoose.set("strictQuery", false);
mongoose.connect(mongoURL, connectionOptions).then(() => console.log("***---Successful connection to the data base---***")).catch((err) => console.error(err));

app.use("/App", Routes);

app.listen(port, () => {
  console.log(" ***---Successful connection to the port---***");
  console.log("http://localhost:3030/App");
})