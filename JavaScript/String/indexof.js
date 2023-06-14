const displayMessage = 'I am a mentor as GFG'
console.log(displayMessage.indexOf('a', 3))
console.log(displayMessage.indexOf('z'))
const index = displayMessage.indexOf('a', 3)
console.log(index)

// function findCharacter(text,char) {
//     const index=text.indexOf(char);
//     if(index>0)
//     {
//         return "Character found in String"
//     }
//     else{
//         return "Character Not found in String"
//     }
// }

const findCharacter = (text, char) =>
  text.indexOf(char) > 0
    ? 'Character found in String'
    : 'Character Not found in String'
const res = findCharacter('Darshan', 'j')
console.log(res)