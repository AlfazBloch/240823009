// console.log("Hello World")

// 1.Check Even or Odd
// const num = 7
// if (num % 2 === 0){
//     console.log(`${num} is even number`);
// }else{
//     console.log(`${num} is odd number`);
// }

// 2.Find the Maximum of Two Numbers

// const num1 = 5
// const num2 = 9

// if(num1 > num2){
//     console.log(`${num1} is maximum`);
// }else{
//     console.log(`${num2} is maximum`);
// }


// 3. Check Leap Year

// const year = 2014

// if (year % 4 == 0){
//     console.log(`${year} is a leap year.`);
// }else{
//     console.log(`${year} is not a leap year.`);
// }


//4.Sum of Natural Numbers

// const n = 5
// let sum = 0
// for(let i=1;i<=n;i++){
//     sum+=i
// }

// console.log(`${sum} is sum of ${n} natural number.`);

//5.Factorial of a Number

// const num = 4
// let factorial = 1
// for (let i = 1;i<=num;i++){
//     factorial *= i
// }

// console.log(factorial);

//6. Print Multiplication Table

// const num = 3

// for(let i=1;i<=10;i++){

//     console.log(`${num} X ${i} = ${num*i}`);
// }

//7.Reverse a Number

const num = 1234
let temp = num
let rev = 0

while(temp>0){
    
        let r = temp % 10
        rev = rev * 10 + r
        temp = Math.floor(temp / 10)
    
}


console.log(rev);