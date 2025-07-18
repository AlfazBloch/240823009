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

// const num = 1234
// let temp = num
// let rev = 0

// while(temp>0){
    
//         let r = temp % 10
//         rev = rev * 10 + r
//         temp = Math.floor(temp / 10)
    
// }


// console.log(rev);

//8.Palindrome Check (Number)

// const num=313
// let temp = num
// let rev = 0

// while(temp>0){
//         let r = temp % 10
//         rev = rev * 10 + r
//         temp = Math.floor(temp/10)
// }

// if(rev === num){
//         console.log(`${num} is Palindrome number`);
// }else{
//         console.log(`${num} is not a palindrome number`);
// }

//9. Check Prime Number

// const num = 12
// let flag = false
// for(let i=2;i<num;i++){

//         if(num%i==0){
//                 flag=true
//                 break
//         }
// }

// if (!flag) {
//         console.log(`${num} is a prime number`);
// } else {
//         console.log(`${num} is not a prime number`);
// }

// 10. Count Digits in a Number

// const num = 5023
// let count = 0
// let temp = num
// while(temp>0){

//         temp = Math.floor(temp/10)
//         count++
// }

// console.log(`${count} digits in ${num} number`);

//11.Sum of Digits

// const num = 123
// let sum = 0
// let temp = num

// while(temp>0){

//         let r = temp % 10
//         sum += r 
//         temp=Math.floor(temp/10)
// }

// console.log(`${sum} is sum of ${num} number`)


//12. Check Armstrong Number

// const num = 370
// let temp = num
// let arm = 0

// const digits = num.toString().length

// while(temp>0){

//         let digit = temp % 10

//         arm += Math.pow(digit,digits)

//         temp = Math.floor(temp/10)
// }

// if(arm === num){
//         console.log(`${num} is an armstrong number`);
// }else{
//         console.log(`${num} is not an armstrong number`);
// }

// 13. Generate Fibonacci Series

// const num = 7
// let temp1 = 0
// let temp2 = 1

// console.log(`${temp1}`);
// console.log(`${temp2}`);

// for(let i=1;i<=num-2;i++){


//         const temp3 = temp1 + temp2
//         temp1 = temp2
//         temp2 = temp3

//         console.log(`${temp3}`);

// }


// 14. Check Vowel or Consonant

// const input = "c"

// if("aeiou".includes(input)){

//         console.log(`${input} is vowel`);
// }else{
//         console.log(`${input} is consonant`);
// }


// 15. Simple Calculator

// const a = 4
// const b = 2
// const symbol = "*"

// switch (symbol) {
//         case "+":
//                 console.log(a+b);
//                 break;
//         case "-":
//                 console.log(a-b);
//                 break;  
//         case "*":
//                 console.log(a*b);
//                 break;
//         case "/":
//                 console.log(a/b);
//                 break;
// }


// 16. Find GCD (HCF)