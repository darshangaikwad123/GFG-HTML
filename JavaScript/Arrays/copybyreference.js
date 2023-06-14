// let arr=[1,2,3]; //is referencing to memory location =abc123
// let arr2=arr; //it is also pointing to the same memory location
// console.log("arr2 " +arr2);
// console.log("arr" +arr);

// arr2.push(4);
// console.log("updated arr2 " +arr2);
// console.log("updated arr  " +arr);

// //array reference same memeory loaction
// //soiution of this copy is called as shallow copy

// //solution to avoid this uesd sperad operator nothing but for loop
// let arr3=[...arr]
// console.log(arr3);
// arr3.push(9);
// console.log(arr3);
// console.log("updated arr  " +arr);


let arr4=[1,2,3,4];
let arr5=[];

for (let i = 0; i < arr4.length; i++) {
arr5.push(arr4[i])    
}

console.log(arr5);

let str="Darshan"
let arr=[...str];
console.log(arr);


