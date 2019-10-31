const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("index.html");
});

app.get("/prototype", function(req, res) {
    res.render("prototype.html");
});

app.get("/gameloop", function(req, res) {
    res.render("gameloop.html");
});

app.get("/doublebuffer", function(req, res) {
    res.render("doublebuffer.html");
});

app.get("/biblio", function(req, res) {
   res.render("biblio.html");
});

// //server listener
// app.listen("8081", "0.0.0.0", function() {
//     console.log("Express Server is Running...")
// });

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Running Express Server...");
});
