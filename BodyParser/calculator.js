const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
   //res.sendFile("index.html");
   res.sendFile(__dirname + "/index.html");
} );

app.post("/", (req, res)=>{
    console.log(req.body)
    var result = req.body.num1 + req.body.num2
    res.send("Resault is "+result)
});

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
