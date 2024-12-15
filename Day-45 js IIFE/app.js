const myFunction = function (a,b){
  console.log(`A simple Function ${a+b}`);
};


myFunction(20,8);
myFunction(26,37);

(function (a,b){
  console.log(a+b);
})(4,4);

(function (a,b){
  console.log(a*b);
})(6,2);

((a,b) => console.log(a*b))(3,5);

//DOM
(function () {
  const h3 = document.querySelector('.h3');
  const h4 = document.querySelector('.h4');
  h3.style.backgroundColor = 'red';
  h4.style.backgroundColor = 'yellow';
})();

const myModule = (function () {
  let privateVar = 'This is a Private Variable';
  function privateFunc() {
    console.log('This is a Private Function');
  }

  return {
    publicVar: 'This is a public variable',
    pubMethod: function () {
      privateFunc();
      return 'This is a public Method';
    },
  };
})();

// console.log(myModule.privateVar); // Unaccessible
// console.log(myModule.privateFunc()); // Unaccessible
console.log(myModule.publicVar); // Accessible
console.log(myModule.pubMethod()); // Accessible