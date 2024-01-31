const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const app = express();
const cors = require("cors");
const authRoutes = require("./routes/auth");
const cardRoutes = require("./routes/card");
const port = 4000;

app.use(bodyParser.json());
app.use(cors());
connectDB();
app.use("/auth", authRoutes);
app.use("/", cardRoutes);
app.listen(port, () => {
  console.log("Server is running");
});
