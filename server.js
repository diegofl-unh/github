const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const userRoute = require("./routes/userRoute");
// const cors = require("cors");

app.use(express.json());
// app.use(cors());

app.use("/api/user", userRoute);
const port = process.env.PORT || 5000;
// console.log(process.env.MONGO_URL);
app.listen(port, () =>
  console.log(`node server iniciado en el puerto ${port}`)
);
