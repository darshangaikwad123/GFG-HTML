/*
*
*
*/
const readlineSync=require("readline-sync");

const uername=readlineSync.question("what is your name !!!!");
const userAge=readlineSync.question("what is your age !!!")
console.log(`Welcome ${uername} into GFG andage of prash ${userAge}`);

const yearOfBirth=2023+Number(userAge);

console.log(`you were bprn in the year ${yearOfBirth}`);