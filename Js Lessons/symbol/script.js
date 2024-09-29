'use strict'

// let id = Symbol("id")

const obj = {
    'name': 'Test',
    // [id]: 1,
    [Symbol("id")]: 1, 
    getId () {
        return this[id]
    }
}

// console.log(obj.getId());

// console.log(Object.getOwnPropertySymbols(obj));
// console.log(Object.getOwnPropertySymbols(obj)[0]);
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);



// let id = Symbol("id")
// let id2 = Symbol("id")
// let id = Symbol()

// console.log(id == id2);


// obj[id] = 1
// console.log(obj[id]);
// console.log(obj['id']); // undefiend
// console.log(obj);
// console.log(obj['id']);


// for (let key in obj) console.log(key);


// const myAwesomeDB = {
//     movies: [],
//     actors: [],
//     id: 123,
//     [Symbol.for('id')]: 123,
// }


// myAwesomeDB.id = '3213414'

// console.log(myAwesomeDB['id']);
// console.log(myAwesomeDB[Symbol.for('id')]);
// console.log(myAwesomeDB);


