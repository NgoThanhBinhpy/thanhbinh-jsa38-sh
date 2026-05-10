let q = 1;
var w = 2;
const e = 3;

// var / let có thể gán lại
// var có scope rộng hơn let
// const ko thể gán lại

const emplyNumber = null;
const undefinedVariable = undefined;
const NotaNumber = NaN;

console.log(typeof emplyNumber);
console.log(typeof undefinedVariable);
console.log(typeof NotaNumber);

const fullname = "firstname" + " " + "lastname";
const a = "               a               ";
console.log(fullname);
console.log(fullname.length);
console.log(fullname[0]);
console.log(fullname.endsWith("lastname"));
console.log(fullname[fullname.length - 1]);
console.log(fullname.toUpperCase());
console.log(fullname.toLowerCase());
console.log(fullname.split(" "));
console.log(a.trim());
