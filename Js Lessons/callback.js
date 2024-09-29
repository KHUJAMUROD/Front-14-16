'use strict'

// function first() {
//     setTimeout(function () {
//         console.log('1st');
//     }, 2000);
// } 

// function second() {
//     console.log('2nd');
// };

// first()
// second()

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback()
// }

// function done() {
//     console.log(`Я прошел этот урок!`);
// }

// learnJS('JavaScript', done)

//--------------------------------------------------

// Деструктуризация

// const  obj = new Object();
// const  obj2 = {};
// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

// console.log(typeof([]));
// console.log(typeof({}));

// const options1 = {
//     name: 123,
//     width: 2024,
//     height: 2025,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },

//     makeTest() {
//         console.log('Test');
//     }
// };



// const {черный, красный} = options1.colors // Деструктуризация
// const {border, bg} = options1.colors // Деструктуризация
// const {name, width} = options1  // Деструктуризация

// console.log(черный); //undefined
// console.log(красный);  //undefined
// console.log(border);
// console.log(bg);

// console.log(options);
// console.log(options.name);

// delete options.name

// console.log(options);

// let str = 'testtext'
// let arr = [145, 2123, 4534, 25, 76, 84, 92,]
// console.log(str[str.length - 1]);
// console.log(arr[arr.length - 1]);
// console.log(arr.length - 1);     
// console.log(arr[6]);


// const options = {
//     name: 123,
//     width: 2024,
//     height: 2025,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },

//     makeTest: function () {
//         console.log('Test');
//     }
// };

// for (let key in options2){
//     console.log(`свойство ${key} имеет значение ${options2[key]}`);
// }


// for (let key in options){
//     // console.log(`свойство ${key}
//     // имеет значение ${options.key}`);  // error
//     // console.log(`свойство ${key}
//     // имеет значение ${options['key']}`);  // error
//     // console.log(`свойство ${key}
//     // имеет значение ${options[key]}`);  
// }  


// let str = 'testtext'
// let arr = [145, 2123, 4534, 25, 76, 84, 92,]

// for (let key of options){
//     console.log(key);  // error
// }   


// for (let value of str){
//     console.log(value);  
// }   

// for (let value of arr){
//     console.log(value);  
// }   



// const options = {
//     name: 123,
//     width: 2024,
//     height: 2025,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },

//     makeTest: function () {
//         console.log('Test');
//     },

//     makeTest2() {
//         console.log('Test2');
//     }
// };

// console.log(options.makeTest2());

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key] !== 'object')) {
//         console.log(`свойство ${key} имеет значения ${options[key]}`);
//     }
//     if (typeof (options[key] === 'object')) {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значения ${options[key][i]}`);
//         }
//     }
//     // counter++
// };
// console.log(counter);

// console.log(options['colors']['bg']);
// console.log(options.colors.border);

// console.log(Object.keys(options));
// console.log(Object.values(options));
// console.log(Object.entries(options));
// console.log(Object.entries(options).length);
// options.makeTest();


// const {bg, border} = options.colors
// const {border, bg} = options.colors
// let {width, name, height, colors} = options
// let width;
// let height;
// let name;
// let colors;
// console.log(border);
// console.log(colors);
// console.log(width);
// console.log(height);
// console.log(name);
// console.dir(Number) // do it on browser console
// console.dir(Math) // do it on browser console
// console.dir(String) // do it on browser console
//-----------------------------------------------------------

// Массивы и псевдомассивы


// const arr = [1123, 2312, 353, 445, 564, 645, 732]
// console.dir(arr) // do it on browser console

// let items = [NaN, 0, 15, false, -22, '', undefined, 47, null, 2, 77, -0]
// let negatives = [NaN, 0, false, '', undefined, null, -0]
// let ArrForPositives = []
// let ArrForNegatives = []
// for (let i = 0; i < items.length; i++){
//     if(negatives.includes(items[i])){
//         ArrForNegatives.push(items[i])
//     }else{
//         ArrForPositives.push(items[i])
//     }

// }
// console.log(ArrForPositives);
// console.log(ArrForNegatives);



// const arr = [1123, 2312, 353, 445, 564, 645, 732]


// arr.pop();
// arr.push(8);
// arr.shift();
// arr.unshift(777);
// console.log(arr);


// const arr = [1123, 2312, 353, 445, 564, 645, 732]


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log(arr);


// const arr = [1123, 2312, 353, 445, 564, 645, 732]
// for (let value of arr) {
//     console.log(value);
// }

// console.log(arr.length); // = 7
// arr[99] = 88 // error empty items
// console.log(arr.length); // = 100 
// console.log(arr); //   (92 empty items)



// const arr = [1123, 2312, 353, 445, 564, 645, 732]
// const arr = ['b', 'c', 'a', 'd', 'w', 'z',]
// arr.forEach(function (item, index, array) {
//     console.log(`${index}: ${item}: from array ${array}`);
// })


// console.log(arr.sort()); // сортировка для букв
// console.log(arr.sort((a, b) => a - b)); // сортировка для чисел


// Spread operator


// let a = 5;
// let b = a;

//     b = b + 5

//     console.log(b);
//     console.log(a);

// let obj = {
//     a: 5,
//     b: 1,
// }

// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);



// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
//     return objCopy
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x:7,
//         y:4,
//     },
// }

// const NewCopyObj = copy(numbers)
// NewCopyObj.a = 10
// NewCopyObj.c.x = 10
// console.log(numbers);
// console.log(NewCopyObj);


// // let obj = {}
// // const NewCopyObj = Object.assign(obj, numbers)
// const NewCopyObj = Object.assign({}, numbers)
// NewCopyObj.a = 10
// NewCopyObj.c.x = 10
// console.log(numbers);
// console.log(NewCopyObj);


// const oldArray = ['a', 'b', 'c',];
// const newArray = oldArray.slice()

// newArray[2] = 'avsddqww'

// console.log(oldArray);
// console.log(newArray);


// let video = ['youtube', 'video', 'rutube',]
// let copyVideo = [...video]
// copyVideo[0] = 'instagramm'

// console.log(video);
// console.log(copyVideo);

// let blogs = ['wordpress', 'livejournal', 'blogger',]
// let internet = [...video, ...blogs, 'facebook', 'telegramm'];

// [
//     ['youtube', 'video', 'rutube',],
//     ['wordpress', 'livejournal', 'blogger',],
//     'facebook', 'telegramm'
// ]

// console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

// log(num);
// log(...num);
// log(2, 5, 7)

// const array = ['a', 'b',];

// const newArray2 = [...array];

// newArray2[0] = 10

// console.log(array);
// console.log(newArray2);

// const obj = {
//     one: 1,
//     two: 2
// };

// const newObj = {...obj}
// newObj.one = 10

// console.log(obj);
// console.log(newObj);



const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// function showExperience(plan) {
//     const {exp} = plan.skills;
//     return exp;
// }

// console.log(showExperience(personalPlanPeter));


// function showProgrammingLangs(plan) {
//     let str = '';
//     const {programmingLangs} = plan.skills;
//     for (let key in programmingLangs) {
//         str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }

//     return str;
// }

// console.log(showProgrammingLangs(personalPlanPeter));



// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// console.log(showFamily(family));




// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toUpperCase())
//     })
// }

// standardizeStrings(favoriteCities);


// 0 1 1 2 3 5 8 13


// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
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

// console.log(fib(10));
