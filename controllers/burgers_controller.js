// Create the router for the app,
// import express and set up router function
var express = require("express");
var router = express.Router();

// import models burger.js
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res){
    db.Burger.findAll({}).then(function(data){
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);
    })
});

router.post("/", function(req, res){
    // console.log(req.body.name);
    db.Burger.create({
        burgerName: req.body.name,
        devoured: req.body.devoured
    }).then(function(){
        res.redirect("/");
    });
});

router.put("/:id", function(req, res){
    var condition = req.params.id;

    db.Burger.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: condition
        }
    }).then(function(){
        res.redirect("/");
    })
});

router.delete("/:id", function(req, res){
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.redirect("/");
    })


    // var condition = "id = " + req.body.id;

    // console.log("condition", condition);

    // burger.delete(condition, function(){
    //     res.redirect("/");
    // });
});

// export routes for server.js to use
module.exports = router;
