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
    db.Burger.create({
        burgerName: req.params.burgerName,
        devoured: req.params.devoured
    }).then(function(data){
        res.redirect("/");
    })
    // burger.create([
    //     "burgerName", "devoured"
    // ], [
    //     req.body.name, req.body.devoured
    // ], function(){
        // res.redirect("/");
    // });
});

router.put("/:id", function(req, res){
    var condition = "id = " + req.params.id;

    // console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(){
        res.redirect("/");
    })
});

router.delete("/:id", function(req, res){
    var condition = "id = " + req.body.id;

    console.log("condition", condition);

    burger.delete(condition, function(){
        res.redirect("/");
    });
});

// export routes for server.js to use
module.exports = router;
