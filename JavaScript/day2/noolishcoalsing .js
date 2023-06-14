//nullish coalesing used in null or undfinded only

// let firstName='Darshan';
// console.log(firstName ?? "Gaikwad")

// let firstName = ''
// console.log(firstName ?? 'Gaikwad')

let firstName
console.log(firstName ?? 'Gaikwad')
//nullish coaling does not understand falsy value
// falsy value "" ,0 consider as falsy value but it is not falsy value for me then used nullish coalesing

//e.g

let a = 0
console.log(a ?? 2)

let c = ''
console.log(c ?? 'darsh')
