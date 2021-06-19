const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("HOME ROUTE")
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

