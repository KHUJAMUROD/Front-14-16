'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// };

// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);

// User.prototype.exit = function () {
//     console.log(`Ползователь ${this.name} ушел`);
// }


class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }

    hello() {
        console.log(`Hello ${this.name}`);
    }

    exit () {
        console.log(`Ползователь ${this.name} ушел`);
    }
}



const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();


ivan.hello()
alex.hello()

console.log(ivan);
console.log(alex);
