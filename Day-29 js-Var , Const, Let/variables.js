// JavaScript Variables
/*
 * JavaScript variable names are case-sensitive
 ! Variable names cannot contain spaces.
 * Variables cannot be the same as reserved keywords such as `if` or `const`.
 * By convention, JavaScript variable names are written in camelCase.
 * Variables should be given descriptive names that indicate their content and usage (e.g. `sellingPrice` and `costPrice` rather than `x` and `y`).
 * You can not add number first
 * _, $ is acceptable but - not accaptable
 */

/*
 * Var Variable
 * You can re declare
 * You can re assaign
 * Global Scooped
 * var is hosted
 */

var a = 10;
var a = 20;
a = 'Bangladesh';
{
  var blocked='30';
  console.log(a);
}
console.log(blocked);
console.log(a);

let fruits='Jackfruit';
var division='Rangpur';
console.log(country);

// var division;
// console.log(division);
// countrys='Rangpur';

console.log(`${fruits} is my fav, ${fruits} I like to eat`);

/*
 * let Variable
 ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 */

let b=10;
b=11;
{
  console.log(b);
}
// console.log(people);
// let people='SomeOne';

/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
const c=10;
{
  const d=50;
  console.log(c);
  console.log(d);
}

const person = {
  firstName:'Munna Hosain';
  age: 30;
};
person.division='Rangpur';
person.age=21;

console.log(person);

let $firstName1='Munna';
