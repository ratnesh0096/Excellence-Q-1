import "./styles.css";
let array=[4,3,1,6,5,8,10];

for(let i=0; i<array.length; i++){
  if(array[i]%2===0){
    console.log(array[i]);
  }
}
document.getElementById("app").innerHTML = `
<h1>
Question 1
</h1>
Define an array of numbers (use any random numbers). 
Write a program to print only the even numbers of the array. 
Do not use any library functions, need to do via for loops only

`;
