const mongoose = require("mongoose");

const question_schema = mongoose.Schema({
  question: String,
  correct_answer:String,
  incorrect_answer1:String,
  incorrect_answer2:String,
  incorrect_answer3:String,

})

module.exports = mongoose.model("Question",question_schema)
