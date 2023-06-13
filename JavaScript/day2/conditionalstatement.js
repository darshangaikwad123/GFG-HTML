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

var readlineSync = require('readline-sync')
let age = readlineSync.question('How old are u ?')
if (age > 18) {
  console.log('adulat person')
} else {
  console.log('adulat not')
}
