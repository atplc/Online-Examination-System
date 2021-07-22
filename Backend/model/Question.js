const mongoose = require("mongoose");

const question_schema = mongoose.Schema({
  id: Number,
  question: String
})

module.exports = mongoose.model("Question",question_schema)
