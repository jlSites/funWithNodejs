var express = require('express');
var app = express();
var fs = require("fs");

// list all pets by GET
app.get('/pet', function (req, res) {
    console.log(allPets);
    res.end(JSON.stringify(allPets));
})

// add an pet by POST
app.post('/pet', function (req, res) {
    newPet = JSON.parse(req);
    allPets[newPet.name] = newPet;
    console.log(allPets);
    res.end(JSON.stringify(allPets));
})

// get an pet by GET
app.get('/pet/:name', function (req, res) {
    var found = allPets[req.params.name];
    res.end(JSON.stringify(found));
})

// delete an pet by DELETE
app.delete('/pet/:name', function (req, res) {
    delete allPets[req.params.name];
    console.log(allPets);
    res.end(JSON.stringify(allPets));
})


//////
// read file into memory first
var allPets;
fs.readFile(__dirname + "/" + "pets.json", 'utf8', function (err, data) {
    allPets = JSON.parse(data);
    console.log(allPets);
});

// server is listening
var server = app.listen(1338, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Hello RESTful API app listening at http://%s:%s", host, port);
});
