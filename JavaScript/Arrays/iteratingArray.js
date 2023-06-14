let s1="prakesh";
let s2="Ashish";
let s3="Riya";
let s4="Adarsh";

let arr=["prakesh","darshan","Mama","sunny",1,2,3,4,["HTML","CSS","JS"],{schoolName:"SITE"}]
console.log(arr);
let arr1=["prakesh","darshan","Mama","sunny"];
// console.log(arr1)
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);

// arr1.forEach((val,num)=>
// {
//     console.log(num+" "+val);
// }
// )

// for(let name of arr1)
// {
// console.log(name)
// }

for(let name in arr1)
{
    console.log(arr1[name])
}

