// // alert("It's Alert")

// let yesOrNo = confirm("We need your answer (yes) or (no)")
// let ol = 20
// console.log(yesOrNo);

// let answer = prompt("Are you over (18) years old", "18")

// console.log(answer);

// console.log(typeof(answer));

// let answer = prompt("Are you over (18) years old");
// console.log(answer);
// console.log(answer + 5);

// let answers = []

// answers[0] = prompt("Ваше имя?", '');
// answers[1] = prompt("Ваше фамилия?", '');
// answers[2] = prompt("Сколько вам лет?", '');
// document.write(answers)
// console.log(answers);

// console.log(typeof(answers));

// console.log(null);



//---------------------------------------------------------------------

// console.log('arr' + " - object");
// console.log(4 + " - object");
// console.log(4 + +" - object");
// console.log(4 + +"5");

// let incr = 10;
// let decr = 10;


// increment++;
// decrement--;
// ++incr;
// --decr;
// console.log(++incr);
// console.log(--decr);
// console.log(incr++);
// console.log(decr--);
// console.log(++incr);
// console.log(--decr);



// console.log(5%2); // остаток
// console.log(5%6); // error
// console.log(2*4 == 8); 
// console.log(2*4 == '8');
// console.log(2*4 === '8');
// console.log(2*4 === 8);
// console.log(2 + 2*2 === 8);
// console.log((2 + 2)*2 === 8);
// &&
// ||
// !  // not
// const isChecked = false,
    // isClose = false;

// console.log(2*4 === 8 || 2 + 2*2 === 8);
// console.log(isChecked || isClose);
// console.log(isChecked && isClose);
//   console.log(isChecked || !isClose);   
// console.log(Number.isInteger(123));
// console.log(Number.isInteger(123.1234));
// console.log(!Number.isInteger(123.123));
// console.log(Number.isInteger(9.12314));
// console.log(2**4);
// console.log(isNaN('dqwdwq'));
// console.log(!isNaN('dqwdwq')); // not is not a number
// console.log(isNaN(12312));
// console.log(!isNaN(12312));
//

// let x = 5;
// let y = 3;
// x = x + y
// console.log(x);
// x += x + y
// x -= x + y
// x *= x + y
// x /= x + y
// console.log(x);

// console.log(5 > 2);
// console.log(5 < 2);
// console.log(5 !== 2);
// console.log(5 === 2);
// console.log(5 <= 5);
// console.log(5 < 5);
// console.log(5 >= 2); 
let n = 10.1521342314

console.log(n.toPrecision(2));
console.log(n.toFixed(2));


// let numbersLesson
//! integer  =>  целая цыфра  =>  int       =>  1
//! float    =>  не целая цыфра  => float   =>  1.100
//! +	Addition
//! -	Subtraction
//! *	Multiplication
//! /	Division
//! **	Exponentiation (ES2016) => степень
//! %	Modulus (Division Remainder)  =>  остаток
//! ++	Increment
//! --	Decrement
//! =	  x = y	       x = y
//! +=	  x += y	   x = x + y
//! -=	  x -= y	   x = x - y
//! *=	  x *= y	   x = x * y
//! /=	  x /= y	   x = x / y
//! %=	  x %= y	   x = x % y
//! **=	 x **= y	   x = x ** y


//!  ==	equal to (проверяет только значения)
//!  ===	equal value and equal type
//!  !=	not equal
//!  !==	not equal value or not equal type
//!  >	    greater than
//!  <	    less than
//!  >=	greater than or equal to
//!  <=	less than or equal to

//!  &&	and  =>  и      ...ham
// ex:   1 == 1  &&  3 == 3  &&  5 == 5  =>  true
//       1 == 2  &&  3 == 3  &&  5 == 5  =>  false
//!  ||	or   =>  или    ... yoki ...
// ex:   1 == 1  ||  3 == 2  ||  5 == 2  =>  true
// ex:   1 == 2  ||  3 == 2  ||  5 == 2  =>  false
//!  !	not  =>  не ... ... emas
// ex:   1 != 1   =>  false
//       1 != 2   =>  true

//! typeof	    Returns the type of a variable
// ex:  typeof("John")   =>  string

//! The maximum number of decimals is 17.

//! NaN       =>  is a 'not a number'
//! parseInt(Number) => converts a number into Number() object
// RU:                 преобразует строку в целое число
// ex:  parseInt("10")  =>  10
//      parseInt("qwe") =>  NaN - Not a Number

//! isNaN() => checks if the object inside paratneses
//            appears to not be a Number
//            Returns a Boolean value that indicates whether
//            a value is the reserved value NaN (not a number)
// ex:   isNaN(10)     =>  false
//       isNaN("qwe")  =>  true

//! Division by 0 (zero) generates Infinity
// Infinity is a number: typeof Infinity returns number


//! .toFixed()	    Returns a number written with a number of decimals
// ex: 10.345.toFixed(2)  =>  10.35

//!  .toPrecision()	Returns a number written with a specified length
//  ex: 10.345.toPrecision(2)  =>  10


// console.log(Number.isInteger(5%2));
// console.log(5 >= 3 && 3 < 2);
// console.log(5 >= 3 || 3 < 2);

// let x = 6
// let y = 7

// let z = x + y

// z = x
// x = y
// z += x + y
// // console.log(!isNaN('weqfwef'));
// // console.log(!20 < 10);
// console.log(!isNaN()); 
// console.log(Number.isInteger(23.2));
// console.log(Number.isInteger(parseInt(123.5234)));
// console.log(!20 < 10);
// console.log(30 >= 20);


// console.log(!isNaN('test') && Number.isInteger(23) || !20 < 10 && 30 >= 20);