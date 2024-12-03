// Arrays reduces the complexity of using multiple varible in huge number
const language = ['html','CSS','Javascript','C++',true ,20];

//there is anothore way to take an array----- 
const language2 = new Array('Java','Python','C#');

//Accessing Array through console.log
console.log(language);
console.log(language2);
console.log(language[3]); //accessing specific index value
//add or updaing value of a array 
language2[3]='React.js'; //add new value
language2[2]='Swift'; // Update value
console.log(language2);

//Array to string convertion and join
console.log(language2.toString());
console.log(language2.join('-')); // join all item with the symble

//Lenght of array
console.log(language.length);

//first and last item of array
console.log(language[0]);
console.log(language[(language2.length)-1]);

//deleting last item or adding item using pop and push
language2.pop(); //delete the last item
console.log(language2);
language2.push('MongoDB'); //add  item in the end
console.log(language2);
language2.unshift('Bootstrap'); // add item in the beganing
console.log(language2);
language2.shift();    // delete the firt item
console.log(language2);

//Update or Delete item from anywhre of the array
language2.splice(2,2); //remove 2 item from index 2
console.log(language2);
language2.splice(1,0, 'Assembly','php'); // Add 2 item from index 1 and delete 0 item 
console.log(language2);

//Add two or more arrays
const x=[1,2,3,4];
const y=[5,6,7];
const z=[8,9,10];
const p=x.concat(y,z);
console.log(p);





