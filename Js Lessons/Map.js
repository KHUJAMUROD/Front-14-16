// 'use strict'

// const user = {
//     name: 'Alex',
//     // 4: 'Alex',
//     // {}: 'Alex',
//     surName: 'Smith',
//     birthday: '20/04/1993',
//     showMyPublicData: function () {
//         console.log(`${this.name} ${this.surname}`);
//     },
// };


// // console.log(Object.entries(user));

// // console.log(typeof(Object.keys(user)[0]));

// const shops = [
//     { rice: 500 },
//     { oil: 200 },
//     { bread: 50 },
//     // ['key1'],
//     // ['key2'],
//     // ['key3'],
// ];

// const map = new Map();
// // const map = new Map(
// //     [
// //         [{ paper: 400 }, 8000]
// //     ]
// // );
// // map.set(shops[0], 5000);
// // map.set(shops[1], 10000);
// // map.set(shops[2], 15000);

// // console.log(map);

// const budget = [5000, 10000, 15000];

// shops.forEach((shop, i) => {
//     map.set(shop, budget[i])
// })

// // console.log(map.entries());

// // console.log(map.get(shops[0]));
// // console.log(map.keys());
// // console.log(map.delete(shops[0]));
// // console.log(map.clear());
// // console.log(map.has(shops[0]));
// // console.log(map.size);
// // map.keys()
// // console.log(map.keys());
// // console.log(Array.isArray(map.keys()));
// // console.log(map.keys());

// // for (let shop of map.keys()){
// //     // console.log(Array.isArray(shop));
// //     console.log(shop);
// // }

// const goods = [];

// // for (let shop of map.keys()){
// //     // goods.push(Object.keys(shop))
// //     goods.push(Object.keys(shop)[0])
// // }

// // console.log(goods);

// // for (let price of map.values()){
// //     console.log(price);
// // }

// // for (let price of map.entries()){
// //     console.log(price);
// // }

// // for (let [shop, price] of map.entries()){
// //     console.log(shop, price);
// // }


// // map.forEach((value, key, map) => {
// //     console.log(key, value)
// // })


// // const userMap = new Map(Object.entries(user))
// // console.log(userMap);

// // console.log(map);
// // const newUserObj = Object.fromEntries(userMap)
// // console.log(newUserObj);



// // Set()

// const arr = [1, 1, 2, 2, 3, 4, 24, 35, 7, 7]
// const arr2 = ['alex', 'ann', 'mark', 'alex', 'ann']

// const set = new Set(arr)
// const set2 = new Set(arr2)

// // console.log(set);
// // console.log(set2);

// set2.add('john').add('mark')
// set2.add('melissa')


// // console.log(set2);
// // set.delete(7)
// // console.log(set.has(24));
// // set.clear();
// // console.log(set);
// // console.log(set.size);

// // for (let value of set2) console.log(value)

// // set2.forEach((value, valueAgain, set) => {
// //     console.log(value, valueAgain);
// // })


// // console.log(set2.values());
// // console.log(set2.keys());
// // console.log(set2.entries());

// // function unique(arr) {
// //     return Array.from(new Set(arr));
// // }
// // console.log(unique(arr2));


// // BigInt

// // console.log(Math.pow(2, 53));
// // console.log(Number.MAX_SAFE_INTEGER);

// // const bigInt = 12314324123471247128748912749134123n;

// // const anotherBigInt = BigInt(1242328390482304812903481849012834284234908) 



// // // console.log(typeof(bigInt));
// // // console.log(typeof(anotherBigInt));

// // // console.log(5n + 1); // error 
// // // console.log(Math.round(5n)); // error

// // // console.log(1n + 2n);

// // // console.log(5n / 2n); //без дробной части
// // // console.log(2n > 1n); 
// // // console.log(2n > 1); 
// // // console.log(2n > 5); 
// // // console.log(2n == 2); 
// // // console.log(2n === 2); 

// // let bigInt2 = 1n;
// // let number = 2;

// // // console.log(bigInt2 + number); // error
// // // console.log(bigInt2 + BigInt(number));

// // // console.log(Number(bigInt2) + number);
// // // console.log(+bigInt2 + number); // error

// // // console.log(Number(1247889132474123472389471834718974911n));
// // // console.log(Number(anotherBigInt));





// // function amountOfPages(summary){
// //     let result = '';
// //     let n = 0;

// //     for (let i = 1; i <= summary; i++) {
// //       result += i;
// //       if (result.length === summary) {
// //         n = i;
// //         break;
// //       }
// //     }

// //     return n;
// // }

// // // console.log(amountOfPages(100));


// // // function amountOfPages(summary) {
// // //     let totalLength = 0;
// // //     let pages = 0;

// // //     while (totalLength < summary) {
// // //         pages++;
// // //         totalLength += pages.toString().length;
// // //     }

// // //     return pages;
// // // }

// // // console.log(amountOfPages(100));


// // function amountOfPages(summary){
// //     let result = '';
// //     let n = 0;

// //     for (let i = 1; ; i++) {
// //         result += i;
// //         if (result.length >= summary) {
// //             n = i;
// //             break;
// //         }
// //     }

// //     return n;
// // }

// // console.log(amountOfPages(100));



// // Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// // Это должно экономить ресурсы компьютера
// function isPangram1(string){
//     string = string.toLowerCase();
//     return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//     return string.indexOf(x) !== -1;
// });
// }

// console.log(isPangram1("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram1("Hello World"));




// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram2(string){
//     return 'abcdefghijklmnopqrstuvwxyz'.split('')
//     .every((x) => string.toLowerCase().includes(x));
// }

// console.log(isPangram2("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram2("Hello World"));





// // При помощи цикла
// function isPangram3(str) {
//     letters: for (var c = 0; c < 26; c++) {
//         for (let i = 0; i < str.length; i++) {
//             let s = str.charCodeAt(i)
//             if (s < 65 || s > 90 && s < 97 || s > 122) continue
//             if (s === 65 + c || s === 97 + c) continue letters
//         }
//         return false
//     }
    
//     return true
    
// }

// console.log(isPangram3("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram3("Hello World"));




// // При помощи Set
// function isPangram4(string) {
//     return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
// }

// console.log(isPangram4("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram4("Hello World"));




// // С использованием регулярных выражений
// function isPangram5(string){
//     return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
// }

// console.log(isPangram5("The quick brown fox jumps over the lazy dog"));
// console.log(isPangram5("Hello World"));


// Вариант с циклом
// function deepCount(a){
//     let count = a.length;
//     for (let i=0; i<a.length; i++)
//     if (Array.isArray(a[i])) count += deepCount(a[i]);
//     return count;
// }

// console.log(deepCount([1, 5, 3,]));


// Вариант с методом reduce
// function deepCount(a){
//     return a.reduce((s,e) =>
//     s+(Array.isArray(e) ? 
//     deepCount(e) : 0),a.length);
// }


// deepCount(["1", 5, "3", ["10"]])
// deepCount([1, 2, [3, 4, [5]]])
// deepCount([])  
// deepCount([[[[[[[[[]]]]]]]]])
