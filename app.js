const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
const items = ["Breakfast", "Shopping"];
const workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  const day = date.vaar();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});

app.post("/", function(req, res) {
  if (req.body.list === "Work") {
    workItems.push(req.body.listItem);
    res.redirect("/work");
  } else {
    items.push(req.body.listItem);
    res.redirect("/");
  }
});

app.post("/delete", function(req, res) {
  const itemIndex = req.body.index;
  if (req.body.list === "Work") {
    workItems.splice(itemIndex, 1);
    res.redirect("/work");
  } else {
    items.splice(itemIndex, 1);
    res.redirect("/");
  }
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
