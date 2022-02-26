// javascript (recap) tutorial

// var types ( undefined, null, string, number, boolean , object, ... )

// varible declaralation

var myName = "Beau" ; // able to be used globally

let ourName = "freeBie" ; // able to used within scope

const name = "beebee" ; // immutable

// best practice to end lines with ';'

var a; // declaration

var b = 2 ; // declaration & assignment

console.log(a);

// init w/ assignment operator

var a = 9;

// uninit variables

var a, b, c; 

// tip : use camelCase

// adding numbers

var sum = 10 + 10;
console.log(sum);
var diff = 10 / 1;
var product = 8 * 10;
var quotient = 66/33;

// incrementation

var myVar = 87;
myVar = myVar++

// decrementation

var myVar = 11;
myVar = myVar--;

// decimals ( floats )
var ourDecimal = 5.7
var myDecimal = 0.009

// mult & divide decimals
quotient = 4.4 / 2.0; // 2.2
mult =  2.5 * 2.0; // 5.0

// remainder

var mod = 11 % 3; // 2

// += && -= && *=

var a = 3;
a += 3; // a = a + 3 = 6

var b = 9;
b -= 15; // b = b - 15 = -6

var c = 4.6;
c *= 10; // c = c * 10;

var d = 33;
d /= 11; // d = d / 11 = 3

// string literals

// can be surrounded by single ( ' ' ) or double quotes ( " " )
var lastName = "Brown";
var myNickName = "LadyBug"

// escaping literal quotes in strings
var myStr = "I am a \"quote\" ... ";
var myStr2 = 'I am a "quote" ...';
var myStr3 = `I am a "quote" ...`;

/* other escapes
\' single quote
\" double quote
\\ backlash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
*/

// data types

// strings ( strings are immutable)

// string concatenation
var ourStr = "Me first, " + "then me..."; // w/ + operator

var thisString = "Hee, ";
var thatString = "haaaa";
thisString += " heeee! ";  // w/ += operator
thisString += thatString;

// ...with variables
var user = "Mary";
var varConcat = "Hello; Good Morning " + user + ", Have A Great Day!";

// ( some ) string methods

//.. length
var string8 = "tester";
string8Length = string8.length; // 6

//.. index
var firstChar = string8[0]; // "t"
var lastChar = string8[string8.length - 1]; // "r"
var thirdToLastChar = string8[string8.length - 3]; // "t" tip: 3rd to last char is minus 3

// code example :: madLibs
function wordBlanks(noun, adjective, verb, adverb) {
    // init return string
    var result = "";
    result += "The " + adjective + " " + noun + " " + verb + " to the store " + adverb;
    return result;
};

// ...test
console.log("Madlibs example 1 : " + wordBlanks("dog", "big", "ran", "quickly"));

// arrays ( arrays are mutable )
var arr1 = ["John, 23"]; // elements can be any data type

// nested array ( or multidimensional )
var arr2 = [["Sade Adu", "singer"], ["Quincy Jones", "producer"]];

// indexes
var arrIndex = arr1[1]; // "23"
var nestedArrIndex = arr2[0][0]; // "Sade Adu"

// changes vis bracket notation
var myArray = [18, 64, 99];
myArray[0] = 45; // myArray = [45, 64, 99]

// pop() : append to array
var arr3 = ["The", "Simpsons"];
arr3.push("Show"); // ["The", "Simpsons", "Show"]

// remove from array
var arr4 = [1,2,3];
arr4.pop(); // [1,2]

// shift() : removes final elem
var arr5 = ["The", "Boondocks"];
arr5.shift(); // ["Boondocks"]

// unshift() : add elem to beginning
var arr6 = ["Are", "we", "there", "yet", "?"];
arr6.unshift("Hey..."); // ["Hey...", "Are", "we", "there", "yet", "?"]

// code example : Shopping List
function goShopping(item, quantity) {
    var shoppingList = ["eggs", 2];
    shoppingList += shoppingList.push([item, quantity]);
    return shoppingList;
};

// test
console.log("new shopping list: " + goShopping("bananas", "2") + " ."); // new shopping list: [eggs, 2], [bananas, 2] .

// functions
// functions are re-usable, replicate anywhere

// using parameters with functions
function funkyFuncWithArgs(a, b) {
    return a-b;
}

// test
console.log( "result: " + funkyFuncWithArgs(10,5) + " .")

// var scopes
// global scope - declared outside function block, can be utilized/accessible anywhere
// local scope - declare inside function block, or as parameter. only accessible to func
var globalVar = 10;

function func1() {
    // assign local var - scoped to function
    var maybeGlobal = 5; // local var
}

function func2() {
    var output = "";
    if ( typeof globalVar != "undefined" ) {
        output += "globalVar: " + globalVar;  
    }
    if ( typeof maybeGlobal != "undefined" ) {
        output += "maybeGlobal: " + maybeGlobal;
    }

    return output;
}

func2(); // "globalVar: 10" - maybeGlobal is local to func1 online, therefore undefined in func2

// tip: if variables declared with same name, one in local scope - one in global scope, local takes precedence
var outerWear = "tshirt";

function outfit() {
    var outerWear = "sweater";
    return outerWear; 
}

console.log(outfit()); // "sweater"

// a function without a return line... is undefined

function addTwo (a) {
    var a = a + 2;
}

console.log(addTwo(2)); // undefined

// assignment with functions

var changed = 10;

function change(num) {
    return (num + 5)/3
}

changed = change(10); // 5

// booleans ( true or false , only)

// using conditional logic - if statements

function trueOrFalseIWonder(isItTrue) {
    if ( isItTrue ) return "Yes!";
    return "Naw."; // else
}

console.log(trueOrFalseIWonder(true)); // "Yes!"

// boolean operators , == ( equality operator  - attempts to do type conversion )

function testEqual(val) {
    if ( val == 12 ) {
        return "equal";
    } 
    return "not equal";
}

console.log(testEqual(10))

// boolean operators, pt. ii, === ( strict equality ) !attempt to do type conversion, checks type & val

/* ex: 
3 == 3 ( good )
3 === '3' ( not good )
 */

function testStrictEqual(val) {
    if ( val === 12 ) {
        return "equal";
    } 
    return "not equal";
}

// test
console.log(testEqual('12')); // false

// boolean operators, inequality operator, does type conversion

function notEqual(val) {
    if ( val != 12 ) {
        return "not equal";
    } 
    return "equal";
}

// test
console.log(testEqual(10)); // not equal

// boolean operators, strict inequality operator, does NOT do type conversion

function strictNotEqual(val) {
    if ( val !== 12 ) {
        return "not equal";
    } 
    return "equal";
}

// test
console.log(testEqual(10)); // not equal

// comparison with greater than ( > )

function testGreater(val) {
    if ( val > 100 ) return "greater than 100";
    if ( val > 10 ) return "greater than 10";
    else return "10 or less";
}

// test
console.log(testGreater(10)); // "10 or less"

// comparison with greater than or equal operator ( >= )

function testGreaterOrEqual(val) {
    if ( val >= 100 ) return "100 or over";
    if ( val >= 10 ) return "10 or over";
    else return "less than 10";
}

// test
console.log(testGreaterOrEqual(10)); // "10 or over"

// comparison with less than ( < )

function testLesser(val) {
    if ( val < 100 ) return "less than 100";
    if ( val < 10 ) return "less than 10";
    else return "greater than or equal to 100";
}

// test
console.log(testLesser(20)); // "less than 100"

// comparison with greater than or equal operator ( >= )

function testLessOrEqual(val) {
    if ( val <= 100 ) return "less or equal to 100";
    if ( val <= 10 ) return "less or equal to 10";
    else return "greater than 100";
}

// test
console.log(testLessOrEqual(10)); // "less or equal to 10"

// logical and 

function testLogicalAnd(val) {
    if ( val <= 50 && val >= 25 ) return true;
    else return false;
}

// test 
console.log(testLogicalAnd(30)); // true

// logical or 

function testLogicalOr(val) {
    if ( val >= 50 || val <= 25 ) return "within";
    else return "without";
}

// test 
console.log(testLogicalOr(30)); // "without"

// else statements

function testElse(val) {
    if ( val > 10 ) return "here";
    return "there";
}

// test
console.log(testElse(2)); "there"

// else if ( order matters !! )

function testElseIf(val) {
    if ( val < 5 ) return "less than 5";
    else if ( val < 10 ) return "less than 10";
    else return "10 or greater";
}

function testElseIf2(val) {
    if ( val < 10 ) return "less than 10";
    else if ( val < 5 ) return "less than 5";
    else return "10 or greater";
}

// test
console.log("for input " + val + " this result is correct as expected, " + testElseIf(3) + ", this one isnt: " + testElseIf2(3))
// tip: the first valid statement is executed, this is why order is important

// you can also chain else if statements

function testSize(num) {
    if ( num < 5 ) return "tiny";
    else if ( num < 10 ) return "small";
    else if ( num < 15 ) return "medium";
    else if ( num < 20 ) return "large";
    else return "huge";
}

// test
console.log(testSize(13)); // "medium"

// code example : golf terms

/* 
Strokes Return
1          "Hole-in-one!"
<= par - 2 "Eagle"
par - 1    "Birdie"
par        "Par"
par + 1    "Bogey"
par + 2    "Double Bogey"
par + 3    "Go Home!"
*/

var golfTerms = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes ) {
    if ( strokes == 1 ) {
        return golfTerms[0];
    } else if ( strokes <= par - 2 ) {
        return golfTerms[1];
    } else if ( strokes <= par - 1 ) {
        return golfTerms[2];
    } else if ( strokes == par ) {
        return golfTerms[3];
    } else if ( strokes >= par + 1 ) {
        return golfTerms[4];
    } else if ( strokes >= par + 2 ) {
        return golfTerms[5];
    } else // strokes >= par + 3
        return golfTerms[6];
}

// test
console.log(golfScore(5,4)); //"Birdie"
console.log(golfScore(5,8)); //"Go Home!"

// switch statements
// tip : using case over chained if else, is a better coding practice

function golfScore(par, strokes ) {
    var score = "";
    switch(strokes) {
        case ( strokes == 1 ) : 
            score = golfTerms[0];
            break;                        
        case ( strokes <= par - 2 ) :
            score = golfTerms[1];
            break;
        case ( strokes <= par - 1 ) :
            score = golfTerms[2];
            break;
        case ( strokes == par ) :
            score = golfTerms[3];
            break;
        case ( strokes >= par + 1 ) :
            score = golfTerms[4];
            break;
        case ( strokes >= par + 2 ) :
            score = golfTerms[5];
            break;
        case ( strokes >= par + 3 ) :
            score = golfTerms[6];
            break;
        default :
            score = "Uhh.. just get outta there big fella. This ain't for you...";
            break; 
        }
    return score;
}

// place breaks at the end of case, else the return result will be the run-on of all previous, post the last break
// for example - a run-on case statement...
function spadesHand(card) {
    var cardType = "";

    switch (card) {
        case A:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            cardType = "lowCard";
            break;
        case J:
        case Q:
        case K:
            cardType = "faceCard";
            break;
        default:
            cardType = "joker or bug!" // the input will either be a joker ( hi or lo ) or some invalid input per this case
            break;
        }
    return cardType;
}

// code example : card counting ( switch statement )

/* general rules:
    if low card, incremement count
    if mid card, no change
    if high card, decrement count

    if count is greater than 0, bet. else, hold.
    Simple! ( in theory )
 */
var count = 0;

function cardCounting(card) {
    switch ( card ) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            break;
        case 10:
        case J:
        case Q:
        case K:
        case A:
            count--;
            break;
    }
    
    var holdbet = "Nah.. Hold dat";

    // decisive action : to hold or bet?
    if ( count > 0 ) holdbet = "Bet!";

    return count + " " + holdbet;
}

// test
cardCounting(A); 
cardCounting(2);
cardCounting(4);
cardCounting(8);
console.log(cardCounting(9)); // "1 Bet!"

// variable type: objects

var testObj = {
    "hat": "snapback",
    "shirt": "jersey",
    "shoes": "air force 1s - shamrocks"
};

// assigning objects - dot notation
// referring to above obj...
var hatValue = testObj.hat; // "snapback"

// assigning objects - bracket notation ( can use "" or '' )
// referring to above obj... ( i.e. testObj )
var shoesValue = testObj["shoes"]; // "air force 1s - shamrocks"
var shirtValue = testObj["shirt"]; // "jersey"

// update obj properties - dot notation
var pet = {
    "name" : "Percy",
    "type" : "cat"
};

pet.name = "Papa Percy" // now changed!

// add obj properties - dot notation || bracket notation
// referring to above obj... ( i.e pet )
pet.color = "black"; // new property!
pet["personality"] = "scaredy"; // new property for the scaredy cat!

// delete properties from an object
// referring to above obj... ( i.e pet )
delete pet.name; // no longer has property

// code example : thesaurus [ objects & switch statements ]

function thesaurus(val) {

    var result = "";

    var lookup = {
        "alpha": "major",
        "bravo": "congratulations",
        "chestnut": "brown",
        "dead": "deceased",
        "engulfed": "encased" 
    };

    // assign synonym to result
    result = lookup[val];

    return result;
}

// test
console.log("a synonym for " + val + " is: " + thesaurus(val) + " .");

// checking object for properties
var outfit = {
    "shirt" : "coogi",
    "jewelry" : "rope necklace",
    "bottoms" : "mom jeans",
    "shoes" : "balmains"
};

function checkOutfit(val) {
    if (outfit.hasOwnProperty(val)) {
        return outfit.val;
    } else {
        return "not in outfit!"
    }
}

// test
console.log(checkOutfit("hat")); // "not in outfit!"

// manipulating complex objects : accesing object in array
// note: objects can store string, numbers, arrays and other objects

var myMusicLibrary = [
    {
        title: "Feels Like Summer",
        artist: "Childish Gambinor",
        songwriters = [
            "Childish Gambino",
            "Stephen Glover",
        ],
        release = {
            "year" : "2018",
            "label" : [
                "wolf+rothstein",
                "liberator music",
                "rca"
            ]
        }
    },
    {
        title: "Watermelon Man",
        artist: "Herbie Hancock",
        songwriters = [
            "Herbie Hancock"
        ],
        release = {
            "year" : "1962",
            "label" : "Blue Note"
        }
    } // an object
]; // an array

// test
console.log(myMusicLibrary[1].songwriters); // "Herbie Hancock"

// accessing nested objects
// referring to above obj... ( i.e pet )

console.log(myMusicLibrary[0].release.label[2]); // "rca"

// code example : record collection ( objects )

var recordCollecton = {
    "001" : {
        "artist" : "Joe Jackson",
        "title" : "Big World",
        "reference" : "A&M SP6021"
    },
    "002" : {
        "title" : "School Daze Original Motion Picture Soundtrack",
        "publisher" : "EMI Manhattan Records"
    }, 
    "003" : {
        "artist" : "The Isley Brothers",
        "title" : "Go For Your Guns",
        "reference" : "PZ 34432"
    },
    "004" : {
        "artist" : "B.A. Express",
        "title" : "Energy To Burn",
        "publisher" : "Columbia Stereo"
    }
}; // an object


// a copy for testing ( equivalency ) purposes
var recordCollectionCopy = JSON.parse(JSON.stringify(recordCollecton));
// tip : JSON.parse() constructs the object described by the JSON string
// tip : JSON.stringfy() converts the object or val to a JSON string

function updateRecords(id, prop, value) {
    if ( val === " ") { // if value 'id' blank, delete property
        delete recordCollecton.id.prop;
    } else if ( prop === "tracks") { // add track unless tracks doesnt exist, then create it and add prop
        recordCollecton.id.prop = recordCollecton.id.prop || []; // if propery exists, it is no change. else, it is created with an empty array
        recordCollecton.id.prop.push(value); // add track
    } else {
        recordCollectionCopy.id.prop = value; // update || assign value
    }
    return recordCollectionCopy;
}

// test
console.log(updateRecords("004", "artist", "B.T. Express")); // this prints the entire object but... "B.T. Express" while be instead of "B.A. Exoress". feel free to check it out!

// iterate w/ while loop
var arr10 = [];

var i = 0;
while( i < 5 ) {
    arr10.push(i);
    i++;
}

// test
console.log(arr10); // [0,1,2,3,4]

// iterate w/ for loop
// example 1 - increase by 1
var arr11 = [];

for ( var j = 0; j < 5; j++ ) {
    arr11.push(i);
}

// note: var j = 0 is the initialization. j < 5 is the rule of iteration. j++ is the rule of change. 
// until the rule is no longer true it iterates.

// test 
console.log(arr11); // [0,1,2,3,4]

// example 2 - increase with only odd numbers
var arr12 = [];

for ( var x = 1; x < 10; x+=2 ) {
    arr12.push(x);
}

// test 
console.log(arr12); // [1,3,5,7,9]

// example 2 - count backwards ( i.e. decrement )
var arr13 = [];

for ( var y = 9; x > 0; x-=2 ) {
    arr13.push(x);
}

// test 
console.log(arr13); // [9,7,5,3,1]

// nesting for loops

function multiplyAll(arr) {
    var prod = 1;

    for ( var a = 0; a < arr.length; a++ ) {
        for ( var b = 0; b < arr[b].length; b++ ) {
            prod *= arr[a][b]
        }
    }
    return prod;
}

var product = multiplyAll([1,2], [3,4], [5,6,7]);

// test
console.log(product); // 5040

// do while loop
// note : a do while runs AT LEAST ONCE before handling the while condition
var arr15 = [];
var h = 10;

function testDoWhile(val) {
    do {
        arr15.push(val);
        val++;
    } while ( val < 5 ) {
        arr15.push(val);
    }

    return arr15;
}

// test
console.log(testDoWhile(h)); // [10]

// randon number generator
// type 1 : decimals
function randomFraction() {
    return Math.random(); // this will only return a number zero or greater and lesser than 1
}

// test ( example.. bc this WILL be random each time - good ol truth to function! )
console.log(randomFraction()); // 0.20937

// type 2: whole numbers
var randNumBetweenZeroAnd19 = Math.floor(Math.random()*20); // NOTE! : this is a key concept - to apply the decimal to be scaled to a range... multiple the random decimal by the lowest number just outside the highest number ( max ) in the range. ex. range = 0 - 19? lowest number outside max is 20 !
// note : math.floor rounds down to the nearest whole number
function randWholeNumber (max) { // returns randon number between 0 and max
    return Math.floor(Math.random() * max);
}

// test
console.log(randWholeNumber(10)); // example - 5

// type 3 : range
function randRange (min, max) { // returns randon number between 0 and max
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
// tip: the randon number is generated in the range of 0 to the difference of vals ( min & max ) given, then offset by the min

// test
console.log(randRange(5, 15)); // ex. 7

// parseInt function
// func: ( takes string and return integer). if string !convert to integer, NaN is returned

// ex 1 ) gen
function convertToInteger(str) {
    return parseInt(str);
}

// test
console.log("56"); // 56

// ex 2 ) w/ radix
// tip : radix - the base of a number. ex. 1101, radix : 2 ( binary )
function convertToInteger(str) {
    return parseInt(str, 2); // know compiler knows its a binary
}

// test
console.log(convertToInteger("1101")); //

// ternary oberator
// note : condition ? ifTrue : ifFalse;

// ex 1 ) gen
function isEven(num) {
    return num % 2 ? "even" : "odd"
}

// test
console.log("2 is ... " + isEven(2)); // "2 is even"

// ex 2 ) nested ternary
// tip : build base ternary condition before added nested if it helps keep track! ( like it does for me! )
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// test
console.log(checkSign(10)); // positive
console.log(checkSign(-10)); // negative

// var declaration w/ let & const
// ES6 update! prior, could only declare with var

// tip : let - cannot have a duplicate declaration w/n the same scope. the compiler checks for you!
let catName = "BabyGuh";
let catName = "Nancy"; // this will cause an error

const solid = "0";
solid = 9; // this will cause an error. "const" is read-only. cannot re-assign.

// note : "use strict"; can use at type of file or function to catch javascript declaration mistakes. compiler wakes up with this one!

// ex - let vs var
function printMany(str) {
    "use strict";

    const SENTENCE = str + " is cool!"; // this will cause an error, for const denotes immutablilty. tip: common coding practice is to use CAPITAL letters for const variables

    for ( let i = 0; i < 10; i++) {
        console.log(SENTENCE);
    }

}

// test
console.log(printMany("test")); // err

// strict - note : can reassign array || object. THATS THE ONLY CHANGES ALLOWED!

const s = [ 2, 5, 7];

function editInPlace(s) {
    s[0] = 3;
    return s;
}

console.log(editInPlace(s)); // [3, 5, 7]

// note: if you want to make SURE that even objects && arrays aren't mutable with "const" declaration...

// Object.freeze()

// ex )
function freezeObj() {
    "use strict";

    const MATH_CONSTANTS = {
        PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS); // now cannot be changed AT ALL

    try {
        MATH_CONSTANTS.PI = 99;    // will not work, therefeore enter catch
    } catch ( ex ) {
        console.log(ex);            // display err msg
    }

    return MATH_CONSTANTS.PI;
}

// test
console.log(freezeObj()); // err msg

// Anonymous Functions
// : a function without name

var magic = function() {
    return new Date();
};

// anonymous functions can be converted to an arroe function
// like so...
var magic = () =>  new Date() ;

// OR

const magic = () => new Date(); // note: const is the better practice!

// note: remove "function", keep params, change {} to =>

// ex ) 1
const arr16 = [4, 5.6, -9.8];

const squareList = ( arr ) => {
    const squareIntegers = arr.filter( num => Number.isInteger(num) && num > 0); // an array of all numbers > 0 & integers;
    squareIntegers = squareIntegers.map(x => x * x); // squares each number
    return squareIntegers;
};

// default params
// ex 1 ) function takes function as params  ( !! )
const increment = ( function () {
    return function increment(number, val = 1) { // if val passed in, val is alreaedy init as passed . else, val = 1.
        return number + value;
    };
})();
console.log(increment(5, 2)); // 7
console.log(increment(5));    // 6

// note : if single arg, !need parentheses

// test
console.log(squareList(arr16)); // [16]

// using rest ( ... ) operator
// : takes a variable number of arguments

// w/o rest
const sum = ( function() {
    return function sum(x, y, z) {
        const args = [ x, y, z];
        return args.reduce((a, b) => a + b, 0);
    };
} )();

// test
console.log(sum(1,2,3)); //6

// w/ rest ( can now pass as many operators as wanted ! )
const sum = ( function() {
    return function sum(...args) { // the rest operator
        return args.reduce((a, b) => a + b, 0);  // note: reduce function takes the previous and current value of the argues - preceding the arrow - then applies the rule - after arrow - from the initial to the last elem in arr given. if initial value of this calculation isn't provided - the value after the comma after the rule, the initial value of the array is used.
    };
} )();

// test
console.log(sum(1,2,3)); //6
console.log(sum(1,2,3,4)); //10

// spread operator
// : copies o
// note: can only use as argument to function or array literal

// destructuring assignment

// ex 1 ) gen

// ex 2 ) nested obj

// ex 3 ) assign vars from arrays

// ex 4 ) w/ rest operator

// ex 5 ) to pass obj as function params

// template literals

// create strings

// create objects

// write concise declarative functions

// access - getters & setters ( object )

// import && export

// import vs. require

// use 'export' for code reusability

// use * to import ALL from a file

// export default ( fallback export )
// note: export only one thing from a file

// import default export




