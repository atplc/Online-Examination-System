const express = require("express");
const https = require("https");

const app = express();

app.get("/",function(req,res){
  const url = "https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple"
  https.get(url,function(response){
    console.log(response);

    response.on("data",function(data){
      const qData = JSON.parse(data)
      const temp = qData.results;
      console.log(temp);

      const question = qData.results[5].question;
      const option1 = qData.results[5].incorrect_answers[1];
      const option2 = qData.results[5].incorrect_answers[0];
      const option3 = qData.results[5].incorrect_answers[2];
      const option4 = qData.results[5].correct_answer;

      res.write("<h1> Question : </h1>" + "<h3>" +  question +  "</h3>" );
      res.write(option1);
      res.write(option2);
      res.write(option3);
      res.write(option4);
      res.send();
    })
  })

//  res.send("Server is up and running.")
})




app.listen(3000,function(){
  console.log("Server is running on port 3000 ");
})
