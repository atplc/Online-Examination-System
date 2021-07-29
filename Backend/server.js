const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")

//database Connection
require("./mongo")

//Models
require("./model/Question")


//MiddleWare
app.use(bodyParser.json())
   .use(morgan())

const Question = mongoose.model("Question")

app.get("/OnlineExaminationSystem",async function(req,res){
  try{
    const question = await Question.find({})
    res.send(question)
  }catch(error){
    res.status(500)
  }
});

app.post("/OnlineExaminationSystem",async function(req,res){
     try {
      const question = new Question();

    question.question = req.body.question;
    question.correct_answer = req.body.correct_answer;
    question.incorrect_answer1 = req.body.incorrect_answer1;
    question.incorrect_answer2 = req.body.incorrect_answer2;
    question.incorrect_answer3 = req.body.incorrect_answer3;


      await question.save()
      res.send(question)
    }
   catch (error) {
     res.status(500)
  }
});

app.get("/OnlineExaminationSystem/:QId",async function(req,res){
  try {
    const question = await Question.findOne({ _id:req.params.QId})
    res.send(question)
  } catch (error) {
    res.status(500)
  }
});

app.put("/OnlineExaminationSystem/:QId",async function(req,res){
  try {
    const question = await Question.findByIdAndUpdate({
      _id:req.params.QId
    },req.body,{
      new:true
    //  runValidators:true
    });
    res.send(question)
  } catch (error) {
    res.status(500)
  }
});

app.delete("/OnlineExaminationSystem/:QId",async function(req,res){
  try {
    const question = await Question.findByIdAndRemove({
      _id:req.params.QId
    });
    res.send(question)
  } catch (error) {
    res.status(500)
  }
  });


app.listen(777, function () {
  console.log("Server is Running on Port 777");
})
