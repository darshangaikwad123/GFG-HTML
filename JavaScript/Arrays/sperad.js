// const arr=[1,2,3,4,5];
// console.log("Array",arr);
// console.log(...arr)
//spread operoutor used unpack the array and basically avoids mutation


const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9];
 
const arr3=[...arr1,6,7,...arr2,10,11]
console.log(arr3);

//doesnot mututated array

