
function myFunction(fullName, age, dateOfBirth = 2003) {
  console.log(
    'Hello ' + fullName + ' I am ' + age + ' My Date of Bith ' + dateOfBirth
  );
}
myFunction('Munna', 21, 2003);
myFunction('Hosain', 35, true);


function isSubscribed() {
  console.log('Subcribed');
}
document.getElementById('btn').addEventListener('click', isSubscribed);


(function (message) {
  console.log('I am self-Invokeing Function', message);
})('Hello');

/***Expression of function**** */
let maths = function (x, y) {
  console.log('Testing if I am working of not');
  return x * y;
};

console.log(maths(3, 4));
console.log(maths(4, 4));
console.log(maths(4, 5));

/*
 Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.
 Local variables can only be accessed from within the function.
*/
function newFunc() {
  let firstName = 'Hossain';
  console.log(firstName);
}

newFunc();

function newFuncs() {
  let firstName = 'Hossain';
  console.log(firstName);
}

newFuncs();

/***Anoumous Function******/
let numbers = [4, 5, 6, 7, 8];
let sqNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(sqNumbers);

/* Arrow Functions */

let add = (x, y) => x + y;
console.log(add(5, 6));

/* Nested Functions*/

function greet(firstName) {
  function sayHello() {
    alert('Hello ' + firstName);
  }
  return sayHello();
}
greet('Munna');
