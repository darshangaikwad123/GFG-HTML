const displayName = 'I am a Montor at GFG'
console.log(displayName.length)
const index = displayName.length
const res = displayName.charAt(index - 1) //return char at specifie condition
console.log(res)

//ASCII CODE GIVEN BY chaeCodeAT()

console.log(displayName.charCodeAt(index - 1))
console.log(
  `The ascii code of ${displayName.charAt(0)} is ${displayName.charCodeAt(0)}`,
)






const str="geeks"
for(let i=0;i<str.length;i++)
{
    console.log(String.fromCharCode((str.charCodeAt(i))+2));
}