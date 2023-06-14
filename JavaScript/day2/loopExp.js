for (let i = 1; i < 6; i++) {
  for (let index = 1; index < 6; index++) {
    if (index <= i) {
      console.log('*')
    } else {
      console.log(' ')
    }
    console.log('\n')
  }
}

const symbol = '*'
console.log(symbol.repeat(1))
console.log(symbol.repeat(2))
console.log(symbol.repeat(3))
console.log(symbol.repeat(4))
console.log(symbol.repeat(5))

for (let index = 0; index < 5; index++) {
  console.log(symbol.repeat(index))
}

for (let index = 5; index >= 1; index--) {
  console.log(symbol.repeat(index))
}

const userName = 'Darshan Sharad Gaikwad'
let count = 0
for (let index = 0; index < userName.length; index++) {
  count++
}
console.log(count)

for (let i = 1; i <= 101; i++) {
  if (i % 2 === 0) {
    console.log(i + ' ')
  }
}

const imputString = 'hello i iove gfg'
const vowel = 'aieou'
for (let i = 0; i < imputString.length; i++) {
  if (vowel.includes(imputString[i])) {
    console.log(`${imputString[i]} is a vowel`)
  } else {
    console.log(`${imputString[i]} is not vowel`)
  }
}
