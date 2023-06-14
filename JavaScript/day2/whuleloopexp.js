let readlineSync=require("readline-sync");
let number=readlineSync.question("enter the number");

while(number>=50)
{
    number=readlineSync.question("Enter a number less than 50 -")
}
console.log("number accepted");