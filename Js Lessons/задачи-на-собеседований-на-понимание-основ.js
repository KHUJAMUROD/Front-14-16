'use strict'

// let x = 5; alert(x++);
// console.log(x);

// console.log([] + false - null + true);
// console.log(typeof([] + false));
// console.log([] + null);
// console.log(false - null);
// console.log(typeof(false - null));
// console.log(false - null + []);
// console.log(0 + '');
// console.log(typeof(false - null + []));
// console.log(typeof(false - null));
// console.log(false - null + true);
// console.log([] + false - null);

let y = 1;
let x = y = 2;
// alert(x++);
// alert(x++);
// console.log(x++);


// console.log([] + 1 + 2);


// console.log('1'[0]);
// alert("Og'abek"[0]);
// 
// console.log(2 && 1 && null && 0 && undefined);


// console.log(1 && 2 && 10 && -22);
// console.log(!!(1 && 2));
// console.log(Boolean(1 && 2));
// console.log(1 && 2);
// console.log(!!(1 && 2) === (1 && 1));
// console.log((1 && 2) !== (1 && 1));

// alert(null || 2 && 3 || 4)

// const a = [1, 2, 3];
// const b = [1, 2, 3];


// const o = 3
// const z = 3
// console.log(a === b);
// console.log(z === o);


// console.log(+"Infinity")
// console.log(typeof(+"Infinity"));

// console.log('Ёжык' > "яблоко");
// console.log("яблоко" > "яблоко");
// console.log("яблоко" === "яблоко");

// console.log(0 || "" || 2 || undefined || true || false);



// Задание:

// У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций,
//  которые работают неправильно и он не может понять почему. Нужно исправить функции так,
//   чтобы они давали всегда правильный результат.

// 1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё 
// - результат все время неправильный. Необходимо найти причины и исправить.

// 2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать 
// их и сравнивать с средним чеком (averageLunchPrice).

// Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного 
// меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.

// 3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их 
// в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп.
//  Сейчас эта функция только в начале разработки и должна менять данные про официантов.

// Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых 
// официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike!
//  Необходимо найти причину и немедленно исправить, чтобы данные были разделены.





// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Закрыто' : answer = 'Открыто';

//     return anwser;
// }

// console.log(isOpen(openNow))

// console.log('test'.slice(0, -2));
// console.log('test'.slice(0, 'test'.length - 4));

// function isAverageLunchPriceTrue(fDish, sDish, average) {
//     if (+fDish.price.slice(0, -1) + (sDish.price) < average) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(
//     isAverageLunchPriceTrue(restorantData.menu[0],
//         restorantData.menu[1], restorantData.averageLunchPrice)
// );

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     copy.waitors[0] = { name: 'Mike', age: 32 };
//     return copy;
// }

// console.log(transferWaitors(restorantData));









const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0],
    restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    // Нам просто нужно менять весь массив данных,
    // а не лезть напрямую менять каждого из сотрудников
    // Так как это верхний уровень объекта, то значение
    // будет меняться только у копии
    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

// // console.log(restorantData);
console.log(transferWaitors(restorantData));



