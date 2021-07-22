const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

//database Connection
require("./mongo")

//Models
require("./model/Question")


//MiddleWare
app.use(bodyParser.json())

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
      question.id = req.body.id;
      question.question = req.body.question;

      await question.save()
      res.send(question)
    }
   catch (error) {
     res.status(500)
  }
});


app.listen(777, function () {
  console.log("Server is Running on Port 777");
})
