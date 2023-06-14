// const firstName = 'Darshan'
// const nickName = 'Coder'

// const result = firstName || nickName
//  console.log(result);
//======================================
// const firstName = ''
// const nickName = 'Coder'

// const result = firstName || nickName
// console.log(result)

//falsy value "",null,undefined,0
//+++++++++===============================
// const firstName = ''
// const nickName = 'Coder'

// const result = firstName || nickName
// console.log(`Name is ${result}`)

// in falsy value given last falsy value
//const firstName = null
// const nickName = undefined

// const result = firstName || nickName
// console.log(`Name is ${result}`)

// const firstName = null
// const nickName = undefined

// const result = nickName || firstName
// console.log(`Name is ${result}`)

// const firstName = null
// const nickName = "Anana"

// const result = nickName || firstName|| null
// console.log(`Name is ${result}`)

// const firstName = null
// const nickName = ""

// const result = nickName || firstName|| null
//console.log(`Name is ${result}`)

// const firstName = null
// const nickName = ""

// const result = nickName || firstName|| "CDAC Team" // short cicuting
// console.log(`Name is ${result}`)

// let a = 10
// let b
// console.log(a + (b || 0))
// let a= 10
// let b;
// console.log(a + (b || 0))

// const firstName="DArshan"
// const lastName="Darsh"
// const res=(firstName && lastName)
// console.log(res);

// const firstName="DArshan"
// const lastName=""
// const res=(firstName && lastName)
// console.log(res);

// const firstName="DArshan"
// const lastName=null;
// const res=(firstName && lastName)
// console.log(res);

const firstName = 'DArshan'
const lastName = 'Darsh'
const name1 = null
const res = firstName && lastName && name1
console.log(res)

console.log(3 || 2 || 1)
console.log('' || 0 || 2)
console.log('' || 0 || undefined)
console.log('' || 'null' || '')

console.log(3 && 2 && 1)
console.log('' && 0 && 1)
console.log("undefined"||"null"||"");
