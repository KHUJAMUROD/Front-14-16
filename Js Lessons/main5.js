'use strict'


// function showFirstMessage() {
//     console.log('Hello world');
// }

// showFirstMessage();
//-----------------------------------


// let hi = "Hello World"

// function showFirstMessage(hi) {
//     console.log(hi);
// }

// showFirstMessage(hi);
//-----------------------------------


// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 20;
//     num = 10
//     console.log(num);
// }

// showFirstMessage("Hello World");
// console.log(num);
//------------------------------------


// function calc(a, b) {
//     console.log('test1');
//     console.log('test2');
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

//------------------------------------

// const anotherNum = ret();

// function ret() {
//     let num = 52
//     return console.log(num);
// }
// anotherNum;

// const anotherNum2 = function ret2() {
//     let num = 50;
//     return console.log(num);;
// };


// console.log(anotherNum2());
// console.log(anotherNum);

//---------------------------------------

// logger();

// const logger = function () {
//     console.log('Function Expression');
// };

// logger()
//---------------------------------------
// let b = 4
// const calc3 = a => a + b;
// const calc2 = (a, b) => a + b;
// const calc = (a, b) => {return  a + b};

// console.log(calc2(2, 3));
// console.log(calc3(2));
// console.log(calc2(2, 4));
// console.log(calc3(2));
//---------------------------------------------


// function convert(amount) {
//     console.log(28 * amount);
// }

// convert(500)

// ---------------------------------------------

// const usdCurr = 20;
// const eurCurr = 32;


// function convert(amount, curr) {
    // console.log(curr * amount);
// }

// convert(500, usdCurr)
// convert(500, eurCurr)
//---------------------------------------

// const usdCurr = 20;
// const eurCurr = 32;
// const discount = 0.9;


// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// };

// promotion(convert(500, usdCurr));
// convert(500, usdCurr);
// convert(500, eurCurr);
// const res = convert(500, usdCurr);
// promotion(res);


// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if(i === 3) return
//     }
//     console.log('Done');
// }
// test()


//

// function doNothing() {};
// console.log(doNothing() === undefined);

// let anyName = 'John'

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }

// console.log(sayHello(anyName));

// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }

//     let str = '';

//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//             // Это тоже самое, что и
//             // str = str + num * i + "---"
//         }
//     }

//     return str;
// }

// console.log(getMathResult(10, 5));



// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20


// function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0;
//     let area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }


// console.log(calculateVolumeAndArea(5));


// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.round(2.4));

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// console.log(getCoupeNumber(1));

// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//         return "Ошибка, проверьте данные";
//     }

//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hoursStr = '';

//     switch (hours) {
//         case 0:
//             hoursStr = 'часов';
//             break;
//         case 1:
//             hoursStr = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hoursStr = 'часа';
//             break;
//         default:
//             hoursStr = 'часов';
//     }

//     return `Это ${hours} ${hoursStr} и ${minutes} минут`;
// }

// console.log(getTimeFromMinutes(60));


// function findMaxNumber(a, b ,c, d) {
//     // Самое простое - это использовать Math.max :)
//     // А оптимизировать такую проверку мы научимся совсем скоро
//     if (typeof(a) !== 'number' ||
//         typeof(b) !== 'number' ||
//         typeof(c) !== 'number' ||
//         typeof(d) !== 'number') {
//         return 0;
//     } else {
//         return Math.max(a, b ,c, d);
//     }
// }

// console.log(findMaxNumber(1, 5, '6', '10'));
// console.log(findMaxNumber(1, 5, 6.6, 10.5));






// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "error";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// console.log(fib('weruywrh'));
