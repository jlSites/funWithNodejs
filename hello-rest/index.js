var express = require('express');
var app = express();
var fs = require("fs");

// Add headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// list all pets by GET
app.get('/pet', function (req, res, next) {
    console.log(allPets);
    res.end(JSON.stringify(allPets));
});

// add a pet by POST
app.post('/pet', function (req, res, next) {
    console.log(">>req=", req);
    console.log(">>req.body=", req.body);
    newPet = JSON.parse(req.body);
    allPets.push(newPet);
    console.log(allPets);
    res.end(JSON.stringify(allPets));
});

// get a pet by GET
app.get('/pet/:name', function (req, res, next) {
    var found;
    for (i = 0; i < allPets.length; i++) {
        if (allPets[i].name === req.params.name) {
            found = allPets[i];
            break;
        }
    }

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
    console.log(allPets);
});


// server is listening
var server = app.listen(1338, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Hello RESTful API app listening at http://%s:%s", host, port);
});
