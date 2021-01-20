const express = require('express')
const app = express()
const port = 3000
const path = require("path")

const fs = require("fs")

const bodyParser = require('body-parser')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/index.html"));
});
app.get("/api/notes", function (req, res) {
    return res.sendFile(path.json(__dirname, "Develop/db/db.json"));
});  

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
  });