'use strict';

// let user = { name: 'Ivan' };


// let map = new WeakMap();
// map.set(user, 'data');
// // const arr = {user};
// user = null;

// // console.log(user);
// // console.log(arr[0]);
// console.log(map.has(user));
// console.log(map);


let cash = new WeakMap();

function cashUser(user) {
    if (!cash.has(user)) {
        cash.set(user, 'Date.now')
    }
    return cash.get(user);
}

let lena = { name: 'Elena' };
let alex = { name: 'Alex' };

cashUser(lena);
cashUser(alex);

lena = null;

console.log(cash.has(lena));
console.log(cash.has(alex));

//Weak Set
// add , has, delete 

let messages = [
    { text: 'Hello ', from: 'John' },
    { text: 'World ', from: 'Alex' },
    { text: '...... ', from: 'M' },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));


