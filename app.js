const express = require("express")
const app = express()


app.use(express.json())


app.get("/", (req, res) => {
  res.send(`
    <h2>Welcome!</h2>
    <h4>This is the main page</h4>
    <p>a b c d e f g h i j k l m n o p q r s t u v x y z</p>
  `)
})

app.get("/something", (req, res) => {
  res.json({
    data: "this was it."
  })
})

module.exports = { app }