// create the code that will call the ORM 
// functions using burger specific input for 
// the ORM.

var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        })
    },

    create: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res);
        });
    },

    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        })
    }
};

    // create the code that will call 
    // the ORM functions using burger 
    // specific input for the ORM. = object related mapping

// example cat orm and model
// var orm = {
//   all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },


module.exports = burger;