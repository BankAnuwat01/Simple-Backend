const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//GET PATH ไปยัง bmiCalculator เพื่อแสดง bmiCalculator.html
app.get("/bmiCalculator", (req, res)=>{
   res.sendFile(__dirname + "/public/index.html");
});

app.get("/bmiCalculator", (req, res)=>{
   res.sendFile(__dirname + "/public/bmiCalculator.html");
});

app.post("/", (req, res)=>{
    console.log(req.body)
    var result = (Number(req.body.num1)) / (Math.pow(10,-4)*(Math.pow(Number(req.body.num2),2)))
    var result = parseFloat(Number(result))

    if(result < 18.5) res.send("คุณมีค่า BMI = "+result+" คุณอยู่ในเกณฑ์ = ผอมเกินไป");
    else if(result > 18.6 && result < 22.9) res.send("คุณมีค่า BMI = "+result+" คุณอยู่ในเกณฑ์ = น้ำหนักปกติ");
    else if(result > 23.0 && result < 24.9) res.send("คุณมีค่า BMI = "+result+" คุณอยู่ในเกณฑ์ = น้ำหนักเกิน");
    else if(result > 25.0 && result < 29.9) res.send("คุณมีค่า BMI = "+result+" คุณอยู่ในเกณฑ์ = อ้วน");
    else if(result > 30.0) res.send("คุณมีค่า BMI = "+result+" คุณอยู่ในเกณฑ์ = อ้วนมาก");

});

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000 Noob");
});
