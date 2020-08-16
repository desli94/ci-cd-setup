const express = require("express")
const app = express()


app.use(express.json())


app.get("/", (req, res) => {
  res.send("It's working")
})

app.get("/something", (req, res) => {
  res.json({
    data: "this was it."
  })
})

module.exports = { app }