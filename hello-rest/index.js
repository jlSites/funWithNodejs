var express = require('express');
var app = express();
var fs = require("fs");

// list all heros by GET
app.get('/hero', function (req, res) {
   fs.readFile( __dirname + "/" + "heroes.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

// add an hero by POST
var hero = {
   "hero4" : {
      "email" : "hero4@abc.com",
      "skill" : "light",
      "phone" : "44444444",
      "id": 4
   }
}

app.post('/hero', function (req, res) {
   // First read existing heros
   fs.readFile( __dirname + "/" + "heroes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["hero4"] = hero["hero4"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// get an hero by GET
app.get('/hero/:id', function (req, res) {
   // First read existing heros
   fs.readFile( __dirname + "/" + "heroes.json", 'utf8', function (err, data) {
       heros = JSON.parse( data );
       var hero = heros["hero" + req.params.id] 
       console.log( hero );
       res.end( JSON.stringify(hero));
   });
})

// delete an hero by DELETE
app.delete('/hero/:id', function (req, res) {
   // First read existing heros
   fs.readFile( __dirname + "/" + "heroes.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["hero" + req.params.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

// server is listening
var server = app.listen(1338, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Hello RESTful API app listening at http://%s:%s", host, port);
});
