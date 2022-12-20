// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var  bucketItems = ["Wake Up", "Pray", "Food"];

app.get('/', function(req, res) {


  res.render('bucket', {newBucketItems:  bucketItems});

});

app.post("/", function(req, res) {
  bucketItems.push(req.body.listItem);
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
