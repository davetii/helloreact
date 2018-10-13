//import './utils.js';
import subtract, {square, add} from './utils.js';
import isSenior,  {isAdult, canDrink} from './Person.js';


console.log('app js is running');
console.log('the square root of 4 is : ' + square(4));
console.log('4 added to 4 is  : ' + add(4, 4));
console.log('3 subtracted from 12 is   : ' + subtract(12, 3));

console.log('Is a 17 year old an adult : ' + isAdult(17));
console.log('Is a 18 year old an adult : ' + isAdult(18));
console.log('Is a 22 year old an adult : ' + isAdult(22));
console.log('Is a 21 year old an adult : ' + isAdult(21));

console.log('Can a 20 year old drink? : ' + canDrink(20));
console.log('Can a 21 year old drink? : ' + canDrink(21));
console.log('Can a 22 year old drink? : ' + canDrink(22));

console.log('Is a 22 year old a senior? : ' + isSenior(22));
console.log('Is a 66 year old a senior? : ' + isSenior(66));
