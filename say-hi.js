//////Syntax
var age = 23;
age++;
--age;
age+=23;
console.log("age=" + age);
console.log("tt=" + typeof age);

var firstName, lastName;
console.log("firstName=" + firstName);
console.log("tt=" + typeof firstName);
lastName = "blah";
firstName = "martins";
console.log("hi, " + firstName + " " + lastName);

//log a date object
var dob = new Date();
console.log("dd=" + dob);
console.log("tt=" + typeof dob);

//one statement, many variables
var person = "john doe", car=  "mazda";

//value=undefined
var carName;
console.log("carName=" + carName);

//the rest of string will be treated as strings
var x = "blah" + 23 + 45;
console.log("x=" + x);

var y = 23 + 45 + "blah";
console.log("y=" + y);


//////Functions
function myFunction(x, y) {
    return x * y;
}
console.log("myFunction=" + myFunction(3, 45));
console.log("myFunction=" + myFunction);
console.log("tt=" + typeof myFunction);


//////Objects
var car = {type:"Volvo", model:"500x", color:"white", start:function(){console.log("start called")}};
console.log("car=" + car.type);
console.log("car=" + car["color"]);
console.log("car.start=" + car.start());
console.log("tt=" + typeof car);


