'use strict';

// const num = new Number(3);
// const num = new Function(3);
// console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);

    };
}

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello${this.name}`)
    }
    exit() {
        console.log(`Пользовотель ${this.name} ушел`)

    }
}


User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);

};

const baxa = new User('Baxa', 15);
const alex = new User('Alex', 20);

baxa.exit();

baxa.hello();
alex.hello();

console.log(baxa);
console.log(alex);


//https://learn.javascript.ru/constructor-new