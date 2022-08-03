/** @format */
module.exports = {
  get: function (con, callback) {
    con.query("SELECT * FROM customer", callback);
  },
};
