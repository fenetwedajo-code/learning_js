'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(' i can drive');

//const interface = 'audio';
//const if = 534;

//  function 
function logger() {
  console.log('my name is fenet');
}

// calling // running // running 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `juice with ${apples} apples and ${oranges} oranges`;
  //console.log(juice);
  return juice;
}


const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);



// function declaration 
function calcAge1(birthYear) {
  return  2037 - birthYear;;
}

const age1 = calcAge1(1991);
console.log(age1);
// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1992);
console.log(age1, age2);


// function expression 
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age2);

// arrow function 
const calcAge3 =  birthYear => 2037 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
const applePieces = cutFruit(apples);
const orangePieces = cutFruit(oranges);

  const juice = `juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
  //console.log(juice);
  return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement}years`); 
   

  } else {
    console.log(`${firstName} has already retired`);
    return -1;
    
  }
 // return 
}

console.log(yearsUntilRetirement(1950, 'fenet'));
*/
const friends =["michael","steven","peter"];
friends.push('jay');// adding data to the end
console.log(friends);
// learning objects
const fenet = {
  firstName: 'fenet ',
  lastName: 'wedajo',
  age: 30,
  friends: ['michael', 'steven', 'peter']
};
console.log(fenet);
console.log(fenet.lastName);
console.log(fenet['lastName']);

const nameKey = 'Name';
console.log(fenet['first' + nameKey]);
console.log(fenet['last' + nameKey]);