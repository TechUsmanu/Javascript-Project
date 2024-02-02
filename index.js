/*let age = 25;
let year = 2024; 
let email = 'ugarba202@gmail.com';

console.log(age, year); 
age = 40;

// log this to console//

/* log this to console
console.log(age);
console.log(email);


const name = 'usman';

console.log(name);
// strings//

let firstName = 'usman';
let lastName = 'umar';
// string concertination//

let fullName = firstName + ' ' + lastName;
console.log(fullName);

 // getting chracters

 console.log(fullName[3]);

 // string length

 console.log(fullName.length);

 // string methods

 console.log(fullName.toUpperCase());
 let result = firstName.toLowerCase();

 console.log(result); 
 let index = email.indexOf('m');
 console.log(index);

 // common string method i javascript 1  example 1
 let email = 'ugarba202@gmail.com';
 //let result = email.lastIndexOf('i');

 // slice to start from one index to the assign last index number
 //let result= email.slice(4, 11);


 // substr to count from the index to its last index assign
 //let result = email.substr(4, 15);

//repace meaning to replace any value of change from one to another
 let result =email.replace('u', 'a')
 console.log(result);*/

// example 2 of data types in js (numbers)

// let radius = 10;
// const pi = 3.14;

///console.log(radius, pi);

//math operation +, - * / (** to the power of) (% remainder) (-- ++ is the same thing with adding 1)
// += is taking the current value to add

// console.log(10/2);
// let result = radius % 3;
// let result = pi * radius **2;

// order of opertion (BODMAS)
// let result = 5* (10-3)**2;
//  console.log(result)

// let likes = 10;
// likes++;
// likes--;

// likes+= 10;
// likes-=10;
// likes*=0;
// likes/=10;

// console.log(likes)

// Nan = not a number (its use in somthing that dosent make sense)
//  console.log(5/ 'hello');
// how to concertinate in numbers is thesame on how to concertinate in words

// templete strings
// const title ='best reads of 2019';
// const author ='mario';
// const likes = 30;

//  concertintion way
// let result ='the blog called' + title + ' by ' + author + ' has ' + likes + 'likes';
// console.log(result)

// templete string(it uses backtics) always use dollar sign and curelybraces${}
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result)

// creating html templete

// let html = `
//  <h2>${title}</h2>;
//  <p>${author}</p>
//  <span>this blog has ${likes}</span>
// `;
// console.log(html)

// ARRAY collection of datas or object you can store anything inseide an array numbers string etc
 
// let names =['usman','umar','garba'];

// names[1] = 'asmee';
// console.log(names[1]);

// Array method
// let result = names.join('_');
// let result =names.indexOf('umar');
// console.log(result);

// null an Undefined 

// boolean operations
// console.log(true, false, 'true', 'alse');

// let email = 'ugarba202@gmail.com';

// let result = email.includes('@');
// console.log(result);
// let email = 'ugarba202@gmail.com';
// let names = ['usman', 'umae', 'garba'];
// comparison operators (== to check somthing if its equal to return boolean)
// != not equal
// == equal == is also callled abstract or loose equality

// console.log(age == 25 equal);
// console.log(age != 20 not equal);
// console.log(age > 25 graterthan);
// console.log(age < 25 lessthan);
// console.log(age <= 25 greterthan or equal to); 
// console.log(age >= 25 lessthan or equal to);  

// let name = 'asman';

// console.log(name == 'asman');
// console.log(name =='umar');

// let age = 25;
// // loose comparison (different types can still be equal)
// // console.log(age == 25);

// loose comparison (different types can still be equal)
// let age = 30;

// console.log(age == 30);
// console.log(age = '30');
// console.log(age != 30);
// console.log(age != '30');

// in javascript lower case letter are greater than upprcase letter
// example of comparison operation if a user login if is true it will execute somthing 
// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'Shaun');
// console.log(name > 'cryastal');
// console.log(name < 'Chaun');

// // strict comparison(=== meaning thesame value and the same type) (different types cannot be equal)
// console.log(age === 25 thesame value and the same type);
// console.log(age === '25');
// strict comparision (!== meaning thesame type and the same value) 
// let age = 25
// console.log(age !== 25);
// console.log(age !== '25');

// type conversion (typing one data  one data type into another data type
// let score = '100';
// score = Number(score);
// console.log(score + 11);
// console.log(typeof score)
// let result = String('hello');
// console.log(result, typeof result);

// let result = Boolean(100);
// console.log(result)


// this will log NaN(not a number because we add string to a number)



// LECTURE 3 LOOPS & CONDITIONS

// Loop is a type of control flow in javascript and a loop is also a conditional statememtfor checkijng constions
/* (if somthing is true){ 
    do somthing...
} */

// types of loops

// for loops to loops over up to a certain number of times

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];
// // one iteratiio through the array is cycling through the data

// for (let i = 0; i < names.length; i++){
//     // console.log(names[i]);
//     // use templete string
//     let html = `<div>${names[i]}</div>`
//     console.log(html);
//     // iteration is one  cycling throught the data
// }


// WHILE LOOP (while loop and for loop are thesame there only difference is the syntax)

// let i = 0

// while( i < 5){
//          console.log('in loop:', i);
//          i++;
//  }

//  const names = ['shaun', 'mario', 'luigi'];

//     let i = 0;
//     while(i < names.length){
//         console.log(names[i]);
//         i++;
//     }

    // DO while loop your condition to run onces even if the condtion is not through

//     let i = 5;
//    do{
//         console.log('val of i is: ', i)
//         i++;
//     } while(i < 5);


// if statemet(conditional statemet)

// const age = 20;

// if(age > 20 );{
// console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'mario', 'luigi', 'yoshi'];

// if (ninjas.length > 3){
//     console.log("that' is a lot f ninjas")
// }

// const password = 'p@ssword';

// if (password.length >=8){
//     console.log('that password is long enough')
// }

// else if   & else statement

// const password = 'p@ss1234';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8){
//     console.log('that password is long enough');
// } else {
//     console.log('password is not long enough');
// }

// logical operators OR it most be not true || AND && this must be truth

// const password = 'pssword12345';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong');
// }else if(password.length >= 8 || password.includes('@')){
//     console.log('that password is strong enough');
// } else {
//     console.log('password is not long enough');
// }

// LOGICAL NOT (!)

// break and countinue  

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     // it will skip and countinue

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrat you got the top score!');
//         break;
//         // it will break at the point
//     }
// }


// SWITCH STATEMET is use to test multiple values

// const grade = 'C';

// switch(grade){
//     case 'A':
//     console.log('you got an A!');
//     break;
//     case 'B':
//     console.log('you got an B!');
//     break;
//     case 'C':
//     console.log('you got an C!');
//     break;
//     case 'D':
//     console.log('you got an D!');
//     break;
//     case 'E':
//     console.log('you got an E!');  
//     break;
//     default:
//     console.log('not a valid grade');   

// }

// using if statement
// if (grade === 'A'){
     
// }else if(grade === 'B'){
    
// } else if(grade ==='C'){

// } else if (grade === 'D'){

// } else if (grade === 'E'){
     
// } else{

// }

// VARIABLES AND BLOCK SCOPE(global vaiavle is declear in the root of a variable not in a code block and it can be accessed any where in the code)

// local vriable is define inside a code block and you can only get access to them in the code block
// let age = 30;

// // but let and const can be used in block scope varible

// if (true){
//    const age = 40;
//    const name = 'usman'
//     console.log('inside code block' , age, name);

//     if(true){
//         const age = 60;
//         console.log('inside 2nd code block ', age);
//     }
// }

// console.log('out side code block' , age, name);



// FUNCTIONS METHODS CHAPTER 3

// funcion allow us to define a block which we call and execute when ever we want.

// when creating the function function () {}

// when calling the function ()

// a method is a small function that o somthing

//  to create a function follow the followig procedures

// function decleration this is when we dont decleare a fuction inside avariable)

// function greet(){
//     console.log('hello there');
// }
// function expression(this is when we store a function inside a variable)
// const speak = function(){
//    console.log('good day !');
// }

// //  calling or revorking the function
// greet();
// greet();
// greet();
// greet();
// // speak();
// // speak();
// // speak();


// // check on hoesting in javascript it works with functions decleration not not function expression
// function greet(){
//     console.log('hello there');
// }

// // argument and parameter

// const speak = function(name, time){
//     console.log(`good day! ${time} ${name}`);
// }

// speak('mario', 'morning');
// // when we declear a value inside a function is called parameter
// // When we recieve a value is called an argument

// // returning values

// const calcArea = function(radius){
//     return area = 3.142 * radius**2;
// }
// // when calling the function
// const area = calcArea(5);
// console.log(area);

// Arrow function note arrow function works when we only have one parameter
// when there is more data types we need morethan one parameter
// arrow function can also works wen returning on online of code remove the paranthesis

// const calArea = radius =>  3.14 * radius**2;
// const area = calArea(5);
// console.log('area is:', area);

// worked example
// const greet = function(){
//     return 'hello, world';
// }

// using the arrow function
// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = (products, taxt) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] *taxt;
//     }
//     return total;
// };

// console.log(bill([10,15,30], 0.2));


// const name = 'shaun';
// // functios
// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // metthods
// let resulTwo = name.toUppercase();
// console.log(resutTwo);

// callback and foreach

// method and funtions are thesame thing 


// let people = ['marrio', 'junaid', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// };

// // for each is a method which iterate over an array
// // people.forEach((person, index) =>{
// //     // this is a callback function
// //     console.log(index, person) 
// // });

// // another way of calling function
// people.forEach(logPerson);

// get a refence to the 'ul' 

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigui', 'shaun', 'chun-li'];

// let html = ``;
 
// people.forEach (person => {
//     // create a html templete for each person
//   html += `<li style="color: purple"> ${person}</li>`
// })

// console.log(html);
// ul.innerHTML = html;

// OBJECTS

// Objects in real life has properties & things they can do

// objects literals

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'ugarba202@gmil.com',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things make with marmite']
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age)
// console.log(user.email)

// console.log(user['name']) 
// // to update a name use the above code
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user)

// how to add methos tho this objects

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'ugarba202@gmil.com',
//     location: 'berlin',
//     blogs: ['why mac & cheese rules', '10 things make with marmite'],
//     login:function(){
//         console.log('the user logged out');
//     },
//     logout: function(){
//         console.log('the user logged out');
//     },

//     logBlogs: function(){
//         // to access the blog use (this keywords)
//         console.log(this);

//     }
// };
// user.logBlogs();
// user.login();
// user.logout();




// const name = 'mario';
// name.toUppercase
// gobal objet is known as the window object



//  primitive and non primitive types this is stored on somthing called the stack

// numbers  100
// strings  'strings'
// booleans  true
// null
// unefined
// symbols


// Refrence types this are stored on a heep

// all the types of objects
// arrays
// functions
// dates
// all other objects


// primitive vlues

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// if we change one of the variable it ddnt affect other 

// Rerence values

// const userOne = {name: 'usman', age: 30};
// const userTwo  = userOne;

// console.log(userOne, userTwo);

// userOne.age = 50;
// userOne.name = 'garba';
// console.log(userOne, userTwo);

// interacting with the webpage DOM documemt object Model

// DOM



