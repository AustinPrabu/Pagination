/** @format */

const cust = require("../models/cust.model");
module.exports = {
  index: function (req, res) {
    cust.get(req.con, function (err, rows) {
      if (err) {
        console.log(err);

        let data = {
          status: "error",
          message: "error_message",
          data: "",
        };
        res.send(data);
      } else {
        let data = {
          status: 200,
          message: "success_message",
          data: rows,
        };
        res.send(data);
        console.log(data, "data");
      }
    });
  },
};
