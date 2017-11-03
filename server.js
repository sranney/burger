var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var app = express();

var port = process.env.PORT || 3000;
//body-parser middleware to parse clientside passed data
app.use(bodyParser.urlencoded({extended:false}));//just use querystring
//handlebars middleware for creating html content
app.engine("handlebars", exphbs({ defaultLayout: "main" }));//make the main.handlebars be the layout template
app.set("view engine","handlebars");//set the express view engine as handlebars

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");
app.use("/", routes);//middleware to use router listeners

app.listen(port);//listen on port