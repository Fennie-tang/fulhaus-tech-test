const express = require('express')
const app = express()

app.get("/", function (req, res) {
  res.status(200).json({massage:'Hello World'});
})

app.listen(8000)