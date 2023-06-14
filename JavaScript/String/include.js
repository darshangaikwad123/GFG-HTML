const str = 'I love code in light mode'
console.log(str.includes('light'))
if (str.includes('light')) {
  console.log('he love coding in light mode')
} else {
  console.log('he love coding in dark mode')
}
const vowels = 'aieouAEIOU'
let flag = false
// for (let char of str) {
//   if (vowels.includes(char)) {
//     console.log(`${char} this character is vowel`)
//   } else {
//     console.log(`${char} this chacter is not vowel`)
//   }
// }

for (let char of str) {
  if (vowels.includes(char)) {
    flag=true;
    break;
  } else {
     flag=false;
}
}

if(flag)
{
    console.log("String has vowels")
}else
{
    console.log("String does not have vowels")
}