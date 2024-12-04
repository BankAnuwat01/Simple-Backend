const express = require('express')
const app = express()

let fs = require('fs');

fs.writeFile('demofile1.txt', 'test content', 'utf8', (err) => {
 if(!err) console.log('write complete!!');

 else console.log("Cannot write file")

});

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000 , () => {
    console.log("Server starto 3000 ไอน้อง")
})