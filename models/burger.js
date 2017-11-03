var orm = require("../config/orm.js");

module.exports = {

	getAll: function(cb){
		orm.selectAll("burgers",cb);
	},
	insert: function(burger,cb){
		orm.insertOne("burgers",burger,cb);
	},
	update: function(burger,cb){
		console.log(burger);
		orm.updateOne(burger,cb);
	}
}