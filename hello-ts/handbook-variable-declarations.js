var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
// let rather than var
var fee = 23.65;
var feeToo = 45.76; //not recommended
//const
var livesForCat = 9;
//livesForCat = 4; //error as readonly
var kitty = {
    name: "blah",
    lives: livesForCat
};
//okay
kitty.name = "xyz";
//Destructuring by Array
var input = [34, 29];
var first = input[0], second = input[1];
console.log(first);
function blah(_a) {
    var first = _a[0], second = _a[1];
    console.log(second);
}
var blahCalled = blah(["hero", 34]);
var _a = [2, 3, 4, 5], start = _a[0], rest = _a.slice(1);
console.log(rest); // outputs [3,4,5]
//Destructuring by Object
var hero = {
    a: "foo",
    b: 12,
    c: "bar"
};
var a = hero.a, b = hero.b;
(_b = { a: "baz", b: 101 }, a = _b.a, b = _b.b);
var renamed = hero.a, passthrough = __rest(hero, ["a"]); //property renaming
var _b;
//TODO...
//# sourceMappingURL=handbook-variable-declarations.js.map