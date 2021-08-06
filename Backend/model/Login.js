const mongoose = require("mongoose");

const login_schema = mongoose.Schema({
  email:String,
  Password:String,
})

module.exports = mongoose.model("Login",login_schema)
