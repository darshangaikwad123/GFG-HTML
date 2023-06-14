const availabeleSize=["S","M","L","XL","XXL","XXXL"];
const readlineSync=require("readline-sync")
const userSize=readlineSync.question("Which size of shirt do you want (S/M/XL/XXL/XXXL) :-)")
const isSizeAvaiable=availabeleSize.includes(userSize);
if(isSizeAvaiable)
{
    console.log("Size is avaiable");
}
else
{
    console.log("Size is not avaiable");
}