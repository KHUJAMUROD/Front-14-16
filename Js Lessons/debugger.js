'use strict'

// function hello() {
//     console.log('Hello world');
// }

// hello() 

// function hi(text) {
//     console.log(text);
// }

// hi('hello world');

// const arr = [1, 14, 4, 30, 54]
// const sorted =  arr.sort(compareNum);

// function compareNum(a, b) { 
//     return a - b;
// }

// console.log(sorted);


//------------------------------------------------------------------        

//Динамическуая типизацыя


// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));  
// console.log(String(4));  
// console.log(4);     

// //2)
// console.log(typeof(5 + '' + 5));
// console.log(5 + '' + 5);
// console.log(5  5);

// const num = 5;

// console.log(typeof("https://vk.com/catalog/" + num));

// const fontSize = 26 + 'px';

// // To number

// console.log(typeof(Number('4')));
// console.log(Number('4'));
// console.log(typeof(+"4"));
// console.log(typeof(parseInt("15px")));
// console.log(typeof(Math.round('5.5')));
// let answ = +prompt('Hello', "")

// console.log(typeof(answ))
// // To Boolean

//Negatives
// 0, '', null, undefined, NaN, false, -0:


// //1)

// let switcher = -0

// // if (switcher) {
// //     console.log('Working...');  
// // }else{
// //     console.log("It's Negative");
// // }

// switcher = 1

// if (switcher) {
//     console.log('Working...');  
// }else{
//     console.log("It's Negative");
// }

// //2)
// console.log(Boolean(-0))
// console.log(!!(-0))
// console.log(typeof(-0))
// console.log(typeof(-0))
// console.log(typeof(!!(-0)))
// console.log(typeof(Boolean(-0)))


//------------------------------------------------------------------

//лексическое окружение


// let number = 5;

// function logNumber() {

//     console.log(number);
// }

// logNumber();

// number = 6

// logNumber();



// let number = 5;

// function logNumber() {
//     let number = 4;
//     console.log(number);
// }

// logNumber();

// number = 6

// logNumber();

// let number = 5;

// function logNumber() {
//     console.log(number);
// }

// number = 6

// // logNumber();

// number = 8

// logNumber();

// function createCounter() {
//     let counter = 0

//     const myFunction = function () {
//         counter = counter + 1
//         return counter
//     }

//     return myFunction;
// }

// const increment = createCounter()

// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// const c4 = increment()

// console.log(c1, c2, c3, c4); 


// {
//     let msg = "Hello"
// }

// console.log(msg);

// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//         let num = 3;
//         console.log(num);
//     }
// }