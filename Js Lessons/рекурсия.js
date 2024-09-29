'use strict'

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++){
//         result *= x
//     }

//     return result;
// }

// console.log(Math.pow(2, 6));
// console.log(2 ** 6);
// console.log(pow(2, 4));

// function pow(x, n) { 
//     if(n === 1){ 
//         return x; 
//     }else{
//         return x * pow(x, n - 1); 
//     }
// }


// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));


// let students = {
//     js: [
//         {
//             name: 'John',
//             progress: 100,
//         }, 
//         {
//             name: "Ivan",
//             progress: 60,
//         }],
//     html: {
//         basic: [{
//             name: 'Peter',
//             progress: 20,
//         }, {
//             name: 'Ann',
//             progress: 18,
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10,
//             some: {
//                 students: [{
//                     name: 'Test',
//                     progress: 100
//                 }],
//                 some2: {
//                     students: [{
//                         name: 'Test',
//                         progress: 100
//                     }]
//                 },
//             }
//         },
//      ],


//     }
// }





// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of Object.values(data)) {

//         if (Array.isArray(course)) {
//             students += course.length

//             for (let i = 0; i < course.length; i++) {
//                 total += course[i].progress
//             }
//         }else{
//             for (let subCourse of Object.values(course)){
//                 students += subCourse.length

//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress
//                 }
//             }
//         }
//     }


//     return total / students
// }

// console.log(getTotalProgressByIteration(students));




let students = {
    js: [
        {
            name: 'John',
            progress: 100,
        },
        {
            name: "Ivan",
            progress: 60,
        }],
    html: {
        basic: [{
            name: 'Peter',
            progress: 20,
        }, {
            name: 'Ann',
            progress: 18,
        }],

        pro: [{
            name: 'Sam',
            progress: 10,
        }],
    },
    semi: {
        students: [{
            name: 'Test',
            progress: 100
        }],
        semi2: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};



// console.log(getTotalProgressByIteration(students));


// console.log(Object.values(students));
// console.log(Object.keys(students));


function getTotalProgressByRecursion(data) {

    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress
        }

        return [total, data.length]
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total
    }
}

// const result = getTotalProgressByRecursion(students)
const result = getTotalProgressByRecursion(students)

console.log(result[0] / result[1]);
console.log(result[0], result[1]);


// Рекурсивная функция для вычисления чисел Фибоначчи:
// Напишите рекурсивную функцию для вычисления n-ного числа Фибоначчи.
//  Числа Фибоначчи определяются как сумма двух 
//  предыдущих чисел в последовательности, начиная с 0 и 1.

// function fibonacci(n) { debugger
//     if (n <= 1) {
//         return n; 
//     } else {
//         return fibonacci(n - 1) + fibonacci(n - 2); 
//     }
// }

// console.log(fibonacci(6)); //output 8 


// fibonacci(6) = fibonacci(5) + fibonacci(4)
// fibonacci(5) = fibonacci(4) + fibonacci(3)
// fibonacci(4) = fibonacci(3) + fibonacci(2)
// fibonacci(3) = fibonacci(2) + fibonacci(1)
// fibonacci(2) = fibonacci(1) + fibonacci(0)
// fibonacci(1) = 1
// fibonacci(0) = 0


// fibonacci(1) = 1
// fibonacci(0) = 0
// fibonacci(2) = 1 + 0 = 1
// fibonacci(3) = 1 + 1 = 2
// fibonacci(4) = 2 + 1 = 3
// fibonacci(5) = 3 + 2 = 5
// fibonacci(6) = 5 + 3 = 8


// Рекурсивная функция для вычисления суммы натуральных чисел до заданного числа:
// Напишите функцию, которая принимает число 
// �
// n и возвращает сумму всех натуральных чисел от 1 до 
// �
// n.


function sumOfNumbers(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sumOfNumbers(n - 1);
    }
}

console.log(sumOfNumbers(5));

// 5 + 4 + 3 + 2 + 1 + 0 = 15




function sumArray(arr) {
    if (arr.length === 0) return 0; 
    return arr[0] + sumArray(arr.slice(1)); 
}
