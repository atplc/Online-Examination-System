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
      const question = qData.results[0].question;

      res.send(question);
    })
  })

//  res.send("Server is up and running.")
})




app.listen(3000,function(){
  console.log("Server is running on port 3000 ");
})
