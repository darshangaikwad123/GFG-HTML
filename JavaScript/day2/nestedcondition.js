const readlineSync = require('readline-sync')
const num = Number(readlineSync.question('Enter a the number'))
if (num % 2 == 0) {
  if (num % 6 == 0) {
    console.log('num is divide by 6 and even')
  }else
  {
    console.log("number is even but not divisible by 6");
  }

}
else{
    console.log("number is odd");
    if (num%5 ==0) {
        console.log(`${num} is divide by 5`);
    }
    else{
        console.log(`${num} is not divide by 5`);
    }
}