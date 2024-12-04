const express = require('express')
const app = express()

//Read write files - (fs = Files System) node.js
let fs = require('fs/promises')

async function createRobotFile () {
    const head = await fs.readFile('head.txt' , 'utf8')
    const body = await fs.readFile('body.txt' , 'utf8')
    const leg = await fs.readFile('leg.txt' , 'utf8')
    const feet = await fs.readFile('feet.txt' , 'utf8')

    const text = head + '\n' + body + '\n' + leg +'\n'+ feet
    await fs.writeFile('robot.txt' , text , 'utf8')
}

//Call Function
createRobotFile()




//open server
app.listen(3000 ,() => {
    console.log("Server เปิดแล้วไอโง่ on port 3000!!")
})