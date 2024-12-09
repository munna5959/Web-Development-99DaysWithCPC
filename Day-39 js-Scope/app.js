
let car = 'BMW'; // Global Scope

console.log(car);

if (true) {
  console.log(car);
  let bike = 'R15';
  /*
  * Local Scope
  ! Locally Scope variables are only accessible inside the scope that they've been defined and declared
  ? Local Scope provides with some level of security to our code
  */
  console.log(bike);
  if (true) {
    let fish = 'Hilsha';
    console.log(fish);
  }

}


function firstName() {
  let cycle = 'Duronto';
  cycle = 'Ranger Max';
  console.log(cycle);
  console.log(car);

  // Automatically Global Variable
  person = 'Munna Hosain'; // Not Recomanded
  console.log(person);
  function lastName() {
    let fruits = 'Banan';
    console.log(cycle);
    console.log(fruits);
  }

  lastName();
}
firstName();
console.log(person);

let x = 100;
console.log(x);
function main() {
  let x = 10;
  console.log(x);
}
main();
console.log(x);

// Automatically Global Variable
/*
? You can access this outside scope
! It will not work with strict Mode]
! Its a bad prectice
*/
function autoGlobal() {
  name = 'Munna Hosain';
}
autoGlobal();
console.log(name);
