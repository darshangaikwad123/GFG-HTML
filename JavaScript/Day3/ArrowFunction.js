const calculateSum=function(x,y){
    return x+y;
}
console.log(calculateSum(13,14));

const res=(x,y)=>x+y;


console.log(res(10,20));

const cal=(x,y)=>{
    if(x>y)
    return x+y;
    else
    return x-y;
}

const sum=(x,y)=> x>y?x+y:x-y;
const output=sum(150,17)
console.log(output);