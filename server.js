const express = require('express')

const app = express()

app.listen('3001')

app.use(express.static('public'));

app.route('/').get((req, res) => res.sendFile("public/script.js"));
app.route('/').get((req, res) => res.sendFile("public/style.css"))
app.route('/').get((req, res) => res.sendFile(__dirname + "/index.html"));
