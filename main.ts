// function checkNumberType(number: number): void {
//     if (number === 0) {
//         console.log("The number is zero.");
//     } else if (number % 2 === 0) {
//         console.log("The number is even.");
//     } else {
//         console.log("The number is odd.");
//     }
// }

// // Test the function
// checkNumberType(0); // Output: The number is zero.
// checkNumberType(2); // Output: The number is even.
// checkNumberType(7); // Output: The number is odd.

function numberCheak(number:number): void{
    if (number === 0){
        console.log("the number is zero")
    }else if (number % 2 === 0){
        console.log("the number is even")
    }else {
        console.log("the number is odd")
    }
}
//test the function
numberCheak(0) //the answer -- the number is zerro
numberCheak(8) //the answer -- the number is even
numberCheak(5) //the answerr -- the number is odd
