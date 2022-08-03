/** @format */
const cust_express = require("express");
const cust_router = cust_express.Router();
const custController = require("../controller/cust.controller");

cust_router.get("/", custController.index);

module.exports = cust_router;
