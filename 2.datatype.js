// datatype and  type of variable in javascript

// there are two type of  datatype in js are primitive and non primitive

// primitive data means they are atomic in nature they doesnt need any other data typeo
// like: Number,String

// non primitive are the compositive of other type they need other datatype 
// like Object

// the 7 datatype of variable in js are 
// 1. String are in coding term means text or anything come between : doublequote(""), singlequote('') or backtick(``)
// example of string are 
let a = ("string");
var b = ('string2');
const c = (`string3`);
console.log(a)

// 2. number : they are numerical value 
// example of number are
let d = (1)
console.log(d)

// 3. bollean datatype are true(1) or false(9) value
// example of boolean are 
// Boolean variables can only have two values: true or false
let isSunny = true;
let isRaining = false;

console.log(isSunny); // Output: true
console.log(isRaining); // Output: false

// Boolean values are often used in conditional statements
if (isSunny) {
    console.log("It's sunny today!");
} else {
    console.log("It's not sunny today.");
}

// 4. undefine are the value who has not define ye but we goona define later
// example of undefine are
let value= undefined
let value2; 


// 5. object is used to store key value pair which is Composition of many data type are 
// example of object are 
let coder = {name:"harsh",
    age:21,
    deignation: "software devloper"

}
console.log(coder.age)

// 6. null here come the cofusing one  people are mostly confuse on about null and undefine become they both represent nothing
//  in most language only null used to represent nothingless but there is differnce  null is nothingless it has no value
//   but undefine has no value but it can be later 