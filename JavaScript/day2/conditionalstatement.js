// if (condition) {
//     //action
// }

//snytax

// if (true) {
//   console.log('darshan')
// }

// if (1) {
//   console.log('darshan')
// }
// const isloging=true;
// if (isloging) {
//   console.log('darshan');
// }

// if (0) {
//   console.log('darshan')
// }

// if (-10) {
//   console.log('darshan')
// }
// let age=16;
// if(age>18)
// {
//     console.log("adulat person");
// }
// else
// {
//     console.log("adulat not");
// }

// var readlineSync = require('readline-sync')
// let age = readlineSync.question('How old are u ?')
// if (age > 18) {
//   console.log('adulat person')
// } else {
//   console.log('adulat not')
// }

// const readlineSync = require('readline-sync');
// const number=Number(readlineSync.question("Enter a number"));
// const remainder=number%3;
// const remainderafter=number%5;

// if(remainder===0)
// {
//   console.log("fizzz");
// }
// if(remainderafter===0){
//     console.log("buzz");

// }

/*
 *
 *Logical operator using operator
 *
 */

// const readlineSync = require('readline-sync');
// const number=Number(readlineSync.question("Enter a number"));
// const remainder=number%3;
// const remainderafter=number%5;

// if(remainder===0 && remainderafter===0 )
// {
//   console.log("fizzz");
// }else if(remainderafter===0 || remainder===0 ){
//     console.log("buzz");

// }

// const readlineSync = require('readline-sync')
// const number = Number(readlineSync.question('Enter a number'))
// const remainder = number % 3
// const remainderafter = number % 5

// if (remainder === 0 && remainderafter === 0) {
//   console.log('fizzzBuzz')
// } else if (remainderafter === 0) {
//   console.log('buzz')
// } else {
//   console.log('fizz')
// }

// const readlineSync = require('readline-sync')
// const number = Number(readlineSync.question('Enter a number'))
// const remainder = number % 3
// const remainderafter = number % 5
// const remainderafterdivby7 = number % 7

// if (remainder === 0 && remainderafter === 0) {
//   console.log('fizzzBuzz')
// } else if (remainderafter === 0 || remainder === 0) {
//   console.log('buzz')
// } else if (remainderafterdivby7 === 0) {
//   console.log('buzzbuzz')
// }


// const readlineSync = require('readline-sync')
// const number = Number(readlineSync.question('Enter a number'))
// const remainder = number % 3
// const remainderafter = number % 5
// const remainderafterdivby7 = number % 7

// if (remainder === 0 && remainderafter === 0) {
//   console.log('fizzz')
// } 
// if (remainderafter === 0 || remainder === 0) {
//   console.log('buzz')
// }
// if (remainderafterdivby7 === 0) {
//   console.log('buzzbuzz')
// }
// else{
//   console.log("not divisiable by 7");
// }



const readlineSync = require('readline-sync')
const number = Number(readlineSync.question('Enter a number'))
const remainder = number % 3
const remainderafter = number % 5
const remainderafterdivby7 = number % 7

if (remainder === 0 && remainderafter === 0) {
  console.log('fizzz')
} 
else if (remainderafter === 0 || remainder === 0) {
  console.log('buzz')
}
else if (remainderafterdivby7 === 0) {
  console.log('buzzbuzz')
}
else{
  console.log("not divisiable by 3,5,7");
}