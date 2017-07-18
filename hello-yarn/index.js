var age = 23;
console.log('my age from ts with yarn=' + age);
//named function expression
var nf = function ff(a, b) {
    return a + b;
};
var afHasStatements = function (a, b) { var blah = 33; return a + b; };
var afOnlyOneStatement = function (a, b) { return a + b; };
//unnamed function
var uf = function (a, b) {
    return a * b;
};
var afHasParams = function (a, b) { return a * b; };
var afNoParams = function () { return 34; };
//function declaration
console.log("blahme()=" + blahme(11, 22));
function blahme(x, y) {
    return uf(x, y) + nf(x, y);
}
//arrow function are always unnamed
var a = ['blah', 'me', 'she'];
var ufCalled = a.map(function (s) { return s.length; });
console.log(ufCalled);
var afCalled = a.map(function (s) { return s.length + 100; });
console.log(afCalled);
console.log("aa=" + a.filter(function (s) { return s.length >= 3; }));
