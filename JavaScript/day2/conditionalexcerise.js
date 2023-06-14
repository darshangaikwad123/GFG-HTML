const str1="anillllllll";
const str2="Darshanllllllllllll";
const str3="virutiwari";

const strlen1=str1.length;
const strlen2=str2.length;
const strlen3=str3.length;
console.log(strlen1);
console.log(strlen2);
console.log(strlen3);

if(strlen1>strlen2 && strlen1>strlen3)
{
    console.log(`String 1 is large`);
}else if(strlen2>strlen1 && strlen2>strlen3)
{
    console.log(`string 2 is large`);
}else{
    console.log(`String 3 is large`);
}


if(strlen1<strlen2 && strlen1<strlen3)
{
    console.log(`String 1 is small`);
}else if(strlen2<strlen1 && strlen2<strlen3)
{
    console.log(`string 2 is small`);
}else{
    console.log(`String 3 is small`);
}