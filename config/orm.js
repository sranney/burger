var connection = require("./connection.js");


module.exports = {

	selectAll(table,callback){
		var queryString = "select * from ??";
		connection.query(queryString,[table],function(err,response,fields){
			callback(response);
		});
	},

	insertOne(table,newBurger,callback){
		var queryString = "insert into ?? (burger_name) values (?)";
		connection.query(queryString,[table,newBurger],function(err,response,fields){
			callback(response);
		});
	},

	updateOne(burgerName,callback){
		var queryString = "update burgers set devoured = true where burger_name = ?";
		connection.query(queryString,[burgerName],function(err,response,fields){
			console.log(err);
			console.log(response);
			callback();
		});
	}

}
