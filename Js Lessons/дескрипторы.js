'use strict'

// дескрипторы и методы обектов

// const birthday = Symbol('birthday');

// const user = {
//     'name': 'Alex',
//     'surName': 'Smith',
//     // birthday: '20/04/1993',
//     // [Symbol('birthday')]: '20/04/2021',
//     // [birthday]: '20/04/2021',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surName}`);
//     },
// };

// writable
// enumerable
// configurable

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: prompt('gender')});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// user.name = 'John' // for error

// console.log(user.showMyPublicData());
// user.showMyPublicData()

// Object.defineProperty(user, 'gender', { value: 'male',});
// Object.defineProperty(user, 'gender', { value: 'male', writable: true, configurable: true});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));

// Object.defineProperty(user, 'birthday', {writable: false});
// user.birthday = '1234234' // for error


// Object.defineProperty(user, 'birthday', {value: prompt("Date?"), enumerable: true, configurable: true,});
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// user.birthday = '2000/07/01' // for error    
// console.log(Object.getOwnPropertyDescriptor(user, 'birthday'));

// for (let key in user) console.log(user[key]);
// for (let key in user) console.log(key);

// Object.defineProperty(user, 'showMyPublicData', { enumerable: false });

// for (let key in user) console.log(key);
// for (let key in user) console.log(user[key]);


// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
// console.log(Object.getOwnPropertyDescriptor(user, birthday)); // for Symbol

// Object.defineProperties(user, {
//     name: {writable: false},
//     surName: {writable: false}
// } );


//  Object.preventExtensions()
//  предотвращает добавление новых свойств к
//  объекту (то есть, предотвращает расширение
//  этого объекта в будущем).



//  Object.preventExtensions(user)
//  user['gender'] = 'male'




// Object.isExtensible()
// Статический Object.isExtensible() метод определяет,
// является ли объект расширяемым (можно ли добавлять 
// к нему новые свойства).

// console.log(Object.isExtensible(user));


// Object.seal(user) 

//  user['gender'] = 'male'
// console.log(Object.getOwnPropertyDescriptors(user));

//  запечатывает объект, предотвращая
//  добавление новых свойств к 
//  объекту и делая все существующие
//  свойства не настраиваемыми.
//  Значения представленных 
//  свойств всё ещё могут изменяться,
//  поскольку они остаются записываемыми.



// Object.freeze(user)
// console.log(Object.getOwnPropertyDescriptors(user));


// Статический Object.freeze()метод замораживает объект.
//  Замораживание объекта предотвращает расширение и делает 
//  существующие свойства недоступными для записи и настройки.
//  Замороженный объект больше нельзя изменить: нельзя добавить
//  новые свойства, нельзя удалить существующие свойства,
//  нельзя изменить их перечисляемость, настраиваемость,
//  возможность записи или значение, а прототип 
//  объекта нельзя переназначить. freeze()возвращает тот 
//  же объект, который был передан.


// Метод Object.isFrozen() определяет, был ли объект заморожен.


//Метод Object.isSealed() определяет, является ли объект запечатанным.




// const user = {
//     name: 'Alex',
//     surName: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     },
// };


// Статический Object.keys()метод возвращает 
// массив собственных перечислимых имен
//  свойств данного объекта со строковыми ключами.

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



// Статический Object.values()метод
//  возвращает массив собственных
//   перечислимых значений свойств со 
//   строковыми ключами данного объекта.



// Статический Object.entries()метод
//  возвращает массив собственных 
//  перечислимых пар ключ-значение 
//  свойства со строковым ключом.

// --------------------------------------------

// Итерируемые конструкторы



const user = {
    name: 'Alex',
    surName: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    },
};



// for (let value of user) { // error
//     console.log(value);
// }


// const arr = ['b', 'a', 'c']

// for (const key in user) {
//     console.log(user[key]);
// }

// for (const key in arr) {
//     console.log(arr[key]);
// }

// const str = 'Some Text'

// for (const key in str) {
//     console.log(str[key]);
// }

// for (let value of user) { // error
//     console.log(value);
// }

// const arr = ['b', 'a', 'c']

// for (let key of arr) { 
//     console.log(key);
// }

// for (const key in arr) { 
//     console.log(key);
// }


// for (const key of arr) {
//     console.log(key);
// }

// for (const key of user) {  //error
//     // console.log(key);
//     console.log(user[key]);
// }

// console.log(arr)
// console.dir(Array)

// Array.prototype.someMethod = function () {}
// console.dir(Array)


// const arr = ['b', 'a', 'c']

// for (let key in arr) {
//     console.log(key);
// }

// for (let key of arr) {
//     console.log(key);
// }


// console.dir(Symbol);

// const salaries = {
//     john: 500,
//     mark: 1000,
//     ann: 5000,
//     sayHello: function () {
//         console.log('Hello');
//     }
// }

// salaries[Symbol.iterator] = function () {
//     return {
//         current: this.john,
//         last: this.ann,
//         next() {
//             if (this.current < this.last) {
//                 this.current = this.current + 500;
//                 return { done: false, value: this.current }
//             } else {
//                 return { done: true ,}
//             }
//         }
//     }
// }

// for (let res of salaries) {
//     console.log(res);
// }

// const iterator = salaries[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());





