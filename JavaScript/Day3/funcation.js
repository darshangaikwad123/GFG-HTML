//function decleration or function statement
function greetMessage(name,city) {
  console.log(`welcome ${name} to GFG and come from ${city} `)
}

greetMessage("prakesh","mumbai")
greetMessage("Darshan","nashik")
greetMessage("Vineet","pune")


greetMessage("prakesh")


function calSum(min,max){
    var result=0;
    for(let i=min;i<max;i++)
    {
    result+=i
    }
    console.log(result);
}

calSum(1,10);