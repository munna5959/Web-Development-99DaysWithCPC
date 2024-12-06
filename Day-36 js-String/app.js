
// You can take strings with single Quote
const fullName = 'Munna Hosain';

// OR You can take strings with dubble quote
const country = "Bangladesh";

const sen = "I'm form Bangladesh"
const sen2 = 'I\'m form Bangladesh'

const quatation = 'Bill Gates says "Some text" '
const quatation2 = "Bill Gates says \"Some text\""
const quatation3 = "Bill Gates says \n \"Some text\""

let info = "Munna " + "Hossain"
let info2 = fullName + " " + country
let info3 = "I am " + fullName + " I am from " + country

let info4 = `I am ${fullName} I am from ${country} ${5+9}` 
let info5 = `I am ${fullName}
 I am from ${country} 
 ${20 +10}` 


const fullName2 = new String("Abir")
const fullName3 = "Abir"
fullName[1] = "o";
// console.log(info5.length);
// console.log(info5.charAt(2));
// console.log(info5.indexOf('a'));
// console.log(info5.toUpperCase());
// console.log(info5.toLocaleUpperCase());
// console.log(info5.toLowerCase());
// console.log(info5.toLocaleLowerCase());
document.getElementById('title').innerText = info5

const student = "Munna Hossain";
/*
  A  L  I      H  O  S  S  A  I  N
  0  1  2  3   4  5  6  7  8  9 10
-11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 

*/
console.log(student.length);

student.slice(6); // ssain
student.substring(6); // ssain

student.slice(-6); // ossain
student.substring(-6); // Ali Hossain

student.slice(3, 8); // Hoss
student.substring(3, 8); // Hoss

student.slice(-8, -3); // Hoss
student.substring(-8, -3); // ""

student.slice(-8, 3); // ""
student.substring(-8, 3); // Ali

/*
* Trim
*/

const someText = "          Munna           "
console.log(someText.trim());
console.log(someText.trimStart());
console.log(someText.trimEnd());

/*
* Replace
*/
const url = "https://ali.com/new%20Blog"
console.log(url.replace("%20", "-"));

console.log(info5.split(" "));