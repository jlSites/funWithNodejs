//Boolean
var married = false;
var isDone = true;
//Number
var age = 23;
var decimal;
var binary = 10;
var hex = 0xf00d;
var octal = 484;
//String
var color = 'red';
color = "green";
var sentence = "the sky \nis " + color; //template strings
//Array
var list = [1, 2, 3];
var listArray = [4, 5, 6]; //by generic
var blahArray = [];
var stringArray;
var numberArray = [45, 34];
//Tuple to express an array with different element types
var z; //just declare it 
var x = ["blah", 23];
x[1] = 45;
x[2] = "okay by union type"; //2 is outside the set of known indices
//Enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["BLUE"] = 1] = "BLUE";
    Color[Color["YELLOW"] = 2] = "YELLOW";
})(Color || (Color = {}));
;
var redFace = Color.RED;
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; //still okay
notSure.ifItExists(); //okay as this function might exist at runtime
notSure.toFixed();
var notSureList = [23, true, "free"];
notSureList[2] = 45;
//Void
function warnUser() {
    alert("blah");
}
var unusable = null;
var unusableToo = undefined;
//Null and Undefined
//they are subtypes of all other types
var u = undefined;
var n = null;
//Never
function fail() {
    throw new Error("blah error");
}
//Type assertions
var someValue = "blah";
var blahLength = someValue.length;
var blahLengthToo = someValue.length; //okay but no type info
//# sourceMappingURL=handbook-basic-types.js.map