var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {

        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function () {
        res.redirect("/burgers");
    });
});

router.post("/burgers/create/:id", function (req, res) {

    var id = req.params.id;

    console.log("id", id);

    burger.update(id, function () {
        res.redirect("/burgers");
    });
});



// Export routes for server.js to use.
module.exports = router;
