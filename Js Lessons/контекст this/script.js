'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());

// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         // console.log(this);
//         function shout() {
//             console.log(this);

//         }
//         shout();

//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log("Hello!" + this.name);

//     };
// }
// let baxa = new ('Baxa', 15);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));



// 1) Обычная функция: this = window, но если use strict - underfined
// 2) Контекст у методов объектов - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red';
    // console.log(this);
    // this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

// const double = (a) => {
//     return a * 2;
// };
const double = (a, b) => a * 2;

console.log(double(4));
