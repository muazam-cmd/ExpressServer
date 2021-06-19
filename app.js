const express = require("express");
const PORT = 5000;
const app = express();
app.use(express.json())


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://muazamshahid:muazam12345@cluster0.jmq0v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify:false
})
mongoose.connection.on("connected", () => {
    console.log("Mongo Database connected")
})
mongoose.connection.on("error", (err) => {
    console.log("Error connecitng the database", err)
})
app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/home", (req, res) => {
  res.send("HOME ROUTE")
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

