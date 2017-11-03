var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();
var choices = {};
//home page
router.get("/",function(req,res){
	burger.getAll(function(data){
		console.log(data);
		choices = {data:data};
		res.render("../views/index",choices);
	});
});

//pushing new burgers to mysql db
router.post("/new",function(req,res){
	console.log(req);
	burger.insert(req.body.burger,function(data){
		console.log(data);
		res.redirect("/");
	});
});

//updating devour to true
router.post("/eat",function(req,res){
	burger.update(req.body.burger,function(){
		res.redirect("/");
	});
});

module.exports = router;