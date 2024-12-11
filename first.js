console.log("Welcome");

// print all the no. from 0-100.
//for(i=0;i<=100;i++){
//    console.log(i);
//}

//print all the even no. from 0-100.
//for( num = 0 ; num <= 100 ; num++ ) {
//    if(num%2===0) {
//      console.log("Even no. =",num);
//    }
//}

/*creating a game where you start with any random game number. 
Ask the user to keep guessing the game number until the user enters correct value.
let gameNum = 25;
let userNum = prompt("Guess the Gamenumber :")
while(userNum != gameNum ){
    userNum = prompt("You guessed it wrong , Guess Again :");
}
console.log("Congratulation! You Entered the Correct Number")*/


/*Generate a username for the user with the help of prompt .
the username will start with '@', followed with username and 
end with the username length. 

let str = prompt("Enter Your Name :");
let FullName = "@" + str + str.length;
console.log(FullName);*/

/*for a given array with prices of 5 items [250,645,300,900,50] 
all item have an offer of 10% off on them. Change the array to 
store the final price after applying the offer.

let prices = [250,645,300,900,50];

for(let i =0; i<prices.length; i++){
    offer = prices[i]/10;
    prices[i] -= offer;
}

console.log(prices); */


/* Create an array to store the companies > "Bloomberg", "Microsoft", 
"Uber", "Google", "IBM", "Netflix". 
a) Remove the first company from the array.
b) Remove "Uber" and add "OLA" in its place.
c) Add Amazon at the end. 

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
  
companies.push("Amazon"); // Third Part of the question.
console.log(companies);

companies.shift(); // First part of the question.
console.log(companies);

companies.splice(2,1,"OLA"); // Second part of the question. also the index is changed due to previous shift.
console.log(companies); */

/* Create a function using the "function" keyword that takes a 
   string as an argument and returns the number of vowels. */

   

   function countVowels(str){
       let count = 0;
        for(const char of str ){
           if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
              count++;
           }
        }
       console.log(count);
      }