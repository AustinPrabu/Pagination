const express = require("express");
const app = express();
const con = require("./app/models/db");
const cors = require("cors");

const custRoute = require("./app/routes/cust.routes");
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(function (req, res, next) {
  req.con = con;
  next();
});
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome " });
});
app.use(cors(corsOptions));

app.use("/api/v1/customer", custRoute);
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
