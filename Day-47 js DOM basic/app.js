
const box = document.querySelector('.box');
box.style.backgroundColor = 'red';
box.style.width = '150px';
box.style.height = '100px';

document.getElementById('box').style.backgroundColor = 'blue';

const menuItem = document.querySelectorAll('a');
// menuItem[2].style.color = 'red';
menuItem.forEach(function (i) {
  i.style.color = 'red';
  i.style.fontSize = '24px';
});

const cusClass = document.getElementsByClassName('nav-link');

const convertedClass = Array.from(cusClass);
// for (let i = 0; i < cusClass.length; i++) {
//   console.log(cusClass[i]);
// }
convertedClass.forEach(function (i) {
  i.style.backgroundColor = '#262626';
  i.style.margin = '0 0 15px';
  i.style.padding = '10px 20px';
});

// document.querySelector('.box').id;
// document.querySelector('.box').className;

document.querySelector('.box').getAttribute('id');
document.querySelector('.cta').setAttribute('class', 'text-white cta');