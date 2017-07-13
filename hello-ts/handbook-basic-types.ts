//Boolean
let married = false;
let isDone: boolean = true;

//Number
let age = 23;
let decimal: number;
let binary: number = 0b1010;
let hex: number = 0xf00d;
let octal: number = 0o744;

//String
let color: string = 'red';
color = "green";
let sentence = `the sky 
is ${color}`; //template strings

//Array
let list: number[] = [1, 2, 3];
let listArray: Array<number> = [4, 5, 6]; //by generic
let blahArray = [];
let stringArray: string[];
let numberArray = [45, 34];

//Tuple to express an array with different element types
let z: [string, boolean]; //just declare it 
let x: [string, number] = ["blah", 23];
x[1] = 45;
x[2] = "okay by union type"; //2 is outside the set of known indices

//Enum
enum Color { RED, BLUE, YELLOW };
let redFace: Color = Color.RED;

//Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; //still okay
notSure.ifItExists(); //okay as this function might exist at runtime
notSure.toFixed();

let notSureList: any[] = [23, true, "free"];
notSureList[2] = 45;

//Void
function warnUser(): void {
    alert("blah");
}
let unusable: void = null;
let unusableToo: void = undefined;

//Null and Undefined
//they are subtypes of all other types
let u: undefined = undefined;
let n: null = null;

//Never
function fail(): never {
    throw new Error("blah error");
}

//Type assertions
let someValue: any = "blah";
let blahLength = (someValue as string).length;
let blahLengthToo = someValue.length; //okay but no type info