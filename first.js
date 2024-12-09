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
end with the username length.*/ 

let str = prompt("Enter Your Name :");
let FullName = "@" + str + str.length;
console.log(FullName);