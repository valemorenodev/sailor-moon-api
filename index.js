const cors = require('cors');
const express = require("express");
const mongoose = require("mongoose")

require("dotenv").config()


const app = express();

const Routes = require("./src/Routes/routes");

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

mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongoURL, connectionOptions).then(() => console.log("Conexion exitosa")).catch((err) => console.error(err));

app.use("/App", Routes);

app.listen(process.env.port, () => {
  console.log("Conexión exitosa al puerto ");
})