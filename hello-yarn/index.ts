
let age = 23;
console.log('my age from ts with yarn=' + age);

//named function expression
let nf = function ff(a, b) {
    return a + b;
}
let afHasStatements = (a, b) => { let blah = 33; return a + b; };
let afOnlyOneStatement = (a, b) => a + b;

//unnamed function
let uf = function (a, b) {
    return a * b;
}
let afHasParams = (a, b) => a * b;
let afNoParams = () => 34;

//function declaration
console.log("blahme()=" + blahme(11, 22));
function blahme(x, y) {
    return uf(x, y) + nf(x, y);
}

//arrow function are always unnamed
let a = ['blah', 'me', 'she'];
let ufCalled = a.map(function (s) { return s.length; });
console.log(ufCalled);

let afCalled = a.map(s => s.length + 100);
console.log(afCalled);

console.log("aa=" + a.filter(s => s.length >= 3));

