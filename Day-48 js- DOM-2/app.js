// Add text inside tags

let headTitle = document.querySelector('h1');
// headTitle.innerText = 'Hello CPC';
headTitle.innerText = headTitle.innerText + ' Munna';

// Change text
let boxes = document.querySelectorAll('.box');
// boxes[0].innerText = 'New text';
// boxes[1].innerText = 'New text';

// let newNum = 1;
// for (box of boxes) {
//   box.innerText = `Box No ${newNum}`;
//   newNum++;
// }

// Create Element----------------------

let learnBtn = document.createElement('button');
learnBtn.innerText = 'Learn More';

let heroArea = document.querySelector('.hero');
heroArea.append(learnBtn); // Last
// heroArea.prepend(learnBtn); // Fast
// heroArea.before(learnBtn); // Before
// heroArea.after(learnBtn); // After

// Add Element----------------------

// function addFruits(nameFruits) {
//   const li = document.createElement('li');
//   li.innerHTML = `${nameFruits}`;

//   document.querySelector('ul').appendChild(li);
// }
// addFruits('Orange');
// addFruits('Graps');

// Optimized-------------------------

function addFruitsOP(nameFruits) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(nameFruits));

  document.querySelector('ul').appendChild(li);
}
addFruitsOP('Orange');
addFruitsOP('Graps');

// Edit--------------------------

const editFruits = document.querySelector('li:first-child');
// console.log(editFruits);
// editFruits.innerText = 'Jackfruit';
editFruits.textContent = 'Apples';

const newFruits = document.createElement('li');
newFruits.textContent = 'Lemon Juice';
editFruits.replaceWith(newFruits);

// Edit with Tag----------------------

const editTag = document.querySelector('li:last-child');
// editTag.outerHTML = '<p>Lichi</p>';

// Remove------------------------

editTag.remove();