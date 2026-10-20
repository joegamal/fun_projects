

console.log("Hello friend");

//for(var i = 0; i < 3; i++) setTimeout(() => console.log(i));

console.log("###########");


//for(let i = 0; i < 3; i++) setTimeout(() => console.log(i));

//data types 
/***
 * number 
 * big int
 * bool 
 * object
 * undefined 
 * nan "not a number" => not a number is a number
 * null
 * string
 * function => function is of type object
 */

const a = 5;
const a2 = 5.7;
const b = BigInt(5);
const bol = true;
const mun = NaN;
const nul = null;
let undef;
const str = "some string" //primitive string
const strobjno = String("string object")
const strobjwithnew = new String("string object") //string object

const char = "a"

const arr = Array(a, a2, b, bol, mun, nul, undef, str, char, strobjno, strobjwithnew);

arr.map((a) => console.log(typeof a));


