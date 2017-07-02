// import required packages
var express = require("express");
var override = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");

// set up express and port
var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false}));

// Override with POST having ?_method=DELETE in handlebars file
app.use(override("_method"));

// import Handlebars to use the main file.
var handle = require("express-handlebars");
app.engine("handlebars", handle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// import the controller and give the server access to routes.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});