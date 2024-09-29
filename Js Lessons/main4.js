'use strict'
// negatives  NaN false 0 -0 undefiend '' null


// if (0){
//     console.log('ok');
// }else{
//     console.log('else');
// }

// if (1){
//     console.log('ok');
// }else{
//     console.log('else');
// }




// if (-1){
//     console.log('ok');
// }else{
//     console.log('else');
// }


// if (4 == 4){
//     console.log('ok');
// }else{
//     console.log('Error');
// }

// if (1) {
//     console.log('ok');
// }

// if (0) {
//     console.log('ok');
// }else{
//     console.log('error');
// }


// const num = 40;

// if(num < 45){
//     console.log('1 true');
// }else if (num < 100){
//     console.log('2 true');
// }else{
//     console.log('false');
// 



// const num = 0;

// (num === 50) ? console.log("1 ok") :
// (num === 40) ? console.log('2 ok') : 
// (num === 30) ? console.log('3 ok') : 
// (num === 20) ? console.log('4 ok') : 
// (num === 10) ? console.log('5 ok') : console.log('false');


// console.log('2' === 2);

// const num = 100;
// switch (num) {
//     case 49:
//         console.log('test1');
//         break;
//     case 100:
//         console.log('test2');
//         break;
//     case 50:
//         console.log('test3');
//         break;
//     case 200:
//         console.log('test4');
//         break;
//     default:
//         console.log('not found');
//         break;
// }

let num = 100 

if (num%2 === 0){
    console.log("It's Even");
}else{
    console.log("It's Odd");
}
//--------------------------------------------------------------------------------

// let num = 5;

// while(num <= 4) {
//     console.log(num)
//     num++
// }


// do{
//     console.log(num);
//     num++
// }
// while(num < 0);


// for (let i = 1; i < 8; i++) {
//     console.log(i);
// };


// let num = 50

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++
// };


// for (let i = 1; i <= 10; i++){
//     if(i === 6) {
//         // break
//         // continue;
//     }

//     console.log(i);
// };

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// };





//1  '*
//2   **
//3   ***
//4   ****
//5   *****
//6   ******
//7   '

// let result = '';

// const length = 7;

// for (let i = 1; i < length; i++){
//     for(let j = 0; j < i; j++){
//         result += "*"
//     }
//     result += '\n';

// }
// console.log(result);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if(k === 2) continue first; 
//             console.log(`Third level: ${k}`);
//         }
//     }
// };

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if(k === 2) break first; 
//             console.log(`Third level: ${k}`);
//         }
//     }
// };



// Что за function такой мы узнаем совсем скоро :) 
// Это нужно для автоматических тестов
// Пока нас интересуют циклы и условия

// function firstTask() {

//     for (let i = 5; i < 11; i++) {
//         console.log(i);
//     }
//     // let num = 5
//     // while(num < 11){
//     //     console.log(num);
//     //     num++
//     // }
// }

// firstTask()

// function secondTask() {
//     for (let i = 20; i >= 10; i--) {
//         if (i <= 12) break;
//         console.log(i)
//     }
// }

// secondTask()

// function thirdTask() {
//     for (let i = 2; i <= 10; i++) {
//         if (i % 2 === 0) {
//             console.log(i);
//         }
//     }
// }

// thirdTask()

// for (let i = 1; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }else{
//         console.log(i);
//     }
// }

    function evens() {
        for(let i = 0 ; i <= 20; i++){
            if(i === 16) continue
     
            if(i % 2 === 0){
                console.log(i);
            }
         }  
    }

    evens()
// function fourthTask() {
//     let i = 2;

//     while (i <= 16) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }

// fourthTask()

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// fifthTask()

// let str = 'sometext'
// let arr = [1, 2, 3, 5, 6, 7, 8, 9]
// console.log(arr.length);
// console.log(str.length);


// let result = []
// for (let i = 0; i < arr.length; i ++){
//     result[i] = arr[i]
// }
// console.log(arr);
// console.log(result);

// 1 Заполните новый массив (result) числами из старого (arr). Количество
//  элементов в массиве можно получить как arr.length, а к 
//  элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// 2 Измените данный массив так, чтобы все числа были увеличены в 2 раза,
//  а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// 3 Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Через определенное количество уроков вы убедитесь, что эти задачи можно решить
//  чуть проще, без использования циклов. Но пока мы должны понять, как это все
//   работает внутри, на базовом уровне. Прежде, чем использовать готовые команды.

// Место для первой задачи

// let arr =  [3, 5, 8, 16, 20, 23, 50];
// let str = 'testtext';


// for(let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }



// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 0; i < arr.length; i++){
//         result[i] = arr[i];
//     }
//     // Не трогаем
//     return console.log(result);;
// }
// firstTask()


// // Место для второй задачи
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
    
//     for (let i = 0; i < data.length; i++){
//         if(typeof(data[i]) === 'number'){
//             data[i] = data[i] * 2
//         }else if ((typeof(data[i]) === 'string')){
//             data[i] += ' - done!'
//         }
//     }
    
//     console.log(data);
// }


// function thirdTask() {
// //     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 1; i <= data.length; i++){
//         result[i - 1] = data[data.length - i];
//     }
//     // Не трогаем
//     return console.log(result);
//     // console.log(data[data.length - 1]);
// }


// thirdTask()



// const lines = 5;
// let result = "";

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)