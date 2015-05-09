var express = require('express'),
    router = express.Router();

router.use(function(req, res, next) {
    console.log("hi");
    next();
});