// let rather than var
let fee = 23.65;
var feeToo = 45.76; //not recommended

//const
const livesForCat = 9;
//livesForCat = 4; //error as readonly

const kitty = {
    name: "blah",
    lives: livesForCat
}

//okay
kitty.name = "xyz";

//Destructuring by Array
let input = [34, 29];
let [first, second] = input;
console.log(first);

function blah([first, second]: [string, number]) {
    console.log(second);
}
let blahCalled = blah(["hero", 34]);

let [start, ...rest] = [2, 3, 4, 5];
console.log(rest); // outputs [3,4,5]

//Destructuring by Object
let hero = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = hero;
({ a, b } = { a: "baz", b: 101 });
let { a: renamed, ...passthrough } = hero; //property renaming

//TODO...
