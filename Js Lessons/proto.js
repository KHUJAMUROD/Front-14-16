'use strict'


// let str = 'text'
// let strObj = new String(str)

// let num = 123
// let objNum = new Number(num)

// console.log(typeof (num));
// console.log(typeof (objNum));
// console.log(typeof (str));
// console.log(typeof (strObj));



// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };

// const john = {
//     health: 100,
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier)
// const john = Object.create(soldier);
// const john2  = {...soldier}


// console.log(john.health);
// console.log(john.armor);
// john2.sayHello();
// console.log(john);


// console.log(john2.armor);
// console.log(john2.health);
// console.log(john2.sayHello());

//Exercise



// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50250
// }



// let square = 0;
// let volume = 0;

// function isBudgetEnough(data) {


//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     })

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// };

// console.log(isBudgetEnough(shoppingMallData));


// const students = ['Peter', 'Andrew', 'Ann', 'Mark',
//     'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi',
//     'Sam', 'Alucard', 'Melissa',
//     'Satoro Godjo', 'Sukuna'];

// function sortStudentsByGroups(arr) {

//     arr.sort();

//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// console.log(sortStudentsByGroups(students));


// let arrStr = ['Peter', 'Andrew', 'Ann', 'Mark',
//     'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi',
//     'Sam', 'Alucard', 'Melissa',
//     'Satoro Godjo', 'Sukuna']


// let arrNum = [5, 67, 21, 123, 456, 9, 8]    

// console.log(arrNum.sort((a, b) => a - b)); //for number
// console.log(arrNum.sort()); // for string