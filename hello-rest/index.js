'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require("fs");

// Add headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// list all pets by GET
app.get('/pet', function (req, res, next) {
    console.log(">>get=", allPets);
    res.end(JSON.stringify(allPets));
});

// add/update a pet by POST
app.post('/pet', function (req, res, next) {
    //console.log(">>req=", req);
    console.log(">>post=req.body=", req.body);
    var postPet = req.body;
    var found = -1;
    for (var j = 0; j < allPets.length; j++) {
        if (allPets[j].name === postPet.name) {
            found = j;
            break;
        }
    }

    console.log(">>found=", found);
    if (found != -1) {
        // should replace
        allPets.splice(found, 1, postPet);
    } else {
        // should new
        allPets.push(postPet);
    }

    res.end(JSON.stringify(postPet));
});

// get a pet by GET
app.get('/pet/:name', function (req, res, next) {
    var found;
    for (var i = 0; i < allPets.length; i++) {
        if (allPets[i].name === req.params.name) {
            found = allPets[i];
            break;
        }
    }

	console.log(">>get=found=", found);
    res.end(JSON.stringify(found));
});

// delete a pet by DELETE
app.delete('/pet/:name', function (req, res, next) {
    var found = -1;
    for (i = 0; i < allPets.length; i++) {
        if (allPets[i].name === req.params.name) {
            found = i;
            break;
        }
    }

    console.log(">>found=", found);
    if (found != -1) {
        allPets.splice(found, 1);
    }

    console.log(allPets);
    res.end(JSON.stringify(allPets));
});


//////
// read file into memory first
var allPets;
fs.readFile(__dirname + "/" + "pets.json", 'utf8', function (err, data) {
    allPets = JSON.parse(data)["data"];
    console.log(">>all=", allPets);
});


// server is listening
var server = app.listen(1338, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Hello RESTful API app listening at http://%s:%s", host, port);
});
