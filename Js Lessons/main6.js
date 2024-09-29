'use strict'


// let StringMethods
// *  /.../            => regular expression (regExp)
// !               RU: регулярное выражение
// *  /.../i           => insensitive
// !               RU: нечувствительный
// *  /.../g           => global
// !               RU: глобальный
// *  string           => text
// !               RU: текст
// *  length           => the length of the string (text)
// !               RU: длина строки (текста)
// *  slice()          => the special part of the string
// !               RU: специальная часть строки
// *  replace()        => replace the string with a new string
// !               RU: заменить строку на новую строку
// *                   can take a special regExp as an parameter
// !               RU: может принимать специальное регулярное выражение
// *  toUpperCase()
// *  toLowerCase()
// *  concat()         => merges two strings 
// !                RU: объединяет две строки
// *  trim()           => removes whitespace in the beginning
// *                      and at the end of the string
// !                RU: удаляет пробелы в начале и в конце строки
// *  split()          => splits the text into many pieces
// !                RU: разделяет текст на множество частей
// *  padStart()       => if the resulting string does NOT reach a 
// *                      given length we can fill it with a sybmol 
// *                      at the start
// !                RU: если полученная строка НЕ достигает заданной
// !                   длины, мы можем заполнить ее символом в начале
// *  padEnd()         => if the resulting string does NOT reach a 
// *                      given length we can fill it with a sybmol 
// *                      at the end
// !                RU: если полученная строка НЕ достигает заданной
// !                     длины, мы можем заполнить ее символом в конце
// *  charAt()         => Returns the character at the specified index
// !                RU: Возвращает символ по указанному индексу
// *  indexOf()        => returns the index of the first
// *                         string or letter that it finds
// *                        didn't work with regex                                    
// !                RU: возвращает индекс первой строки или буквы,
// !                      которую он находит
// *  lastIndexOf()    => returns the last index of the string
// !                RU: возвращает последний индекс строки
// *  search()         => returns the first expression that it finds gives index
// !                RU: возвращает первое выражение, которое он находит
// *  match()          => returns the matched string (all 
// *                         strings if we use /.../gi) 
// *                         gives array
// !                RU: возвращает совпавшую строку (все строки, если
// !                      мы используем /.../gi)
// *  includes()       => returns true if the string is found
// !                RU: возвращает true, если строка найдена
// *  startsWith()     => checks if the string starts with ...
// !                RU: проверяет, начинается ли строка с ...
// *  endsWith()       => checks if the string ends with ...
// !                RU: проверяет, заканчивается ли строка на ...
// *  repeat()         => repeats the string number of times
// !                RU: повторяет строку определенное количество раз
// *  join()           => joins all elements of an array into a string
// !                RU: объединяет все элементы массива в строку




// console.log([1, 2, 3, 5, 6, 7, 8].length);
// console.log('Test text'.length);
// console.log('Test text'.slice(0, 2));
// console.log('Test text'.slice());
// console.log('Test text'.slice(-4, 6));
// console.log('Test text TeSt TeSt TeSt TeSt'.replace(/test/gi, 'done'));
// console.log('Test text'.toLowerCase());
// console.log('Test text'.toUpperCase());
// console.log('              Test text             ');
// console.log('              Test text             '.trim());
// console.log('test text'.concat(' concat'));
// console.log('test text' + ' concat');
// console.log('test-split'.split(''));
// console.log('text'.padStart(10, '*'));
// console.log('text'.padEnd(10, '*'));
// console.log('test CharAt'.charAt(5));
// console.log('test CharAt'.indexOf('C')); 
// console.log('test Sear'.search(/s/ig));
// console.log('test Match'.match(/match/ig));
// console.log('test includes'.includes('includes'));
// console.log('test includes'.startsWith('t'));
// console.log('test includes'.endsWith('s'));
// console.log('test repeat'.repeat(3));
// console.log(['test', 'join'].join('-'));
// console.log('Ogabek'.split('').reverse().join(''));



// let str = 'hello world'
// let middle = parseInt(str.length / 2)
// console.log(str.slice(0, middle));
// console.log(str.slice(middle));




// console.log(str.repeat(3));
// console.log(str.startsWith('h'));
// console.log(str.endsWith('d'));
// console.log(str.includes('world'));
// console.log(str.match(/e/ig));
// console.log(str.search(/e/ig));   /../g  =>  global не работает
// console.log(str.search(/e/i));
// console.log(str.lastIndexOf('d'));
// console.log(str.indexOf('w'));
// console.log(str.charAt(4));
// console.log(str.padStart(15, '.'));
// console.log(str.padEnd(15, '.'));
// console.log(str.split('').reverse().join(''));
// console.log(str.trim())
// console.log(str.length);
// console.log(str.slice(0, 4));
// console.log(str.slice());
// console.log(str.slice(3));
// console.log(str.slice(-5, 3)); error
// console.log(str.slice(2, -2));

// console.log(str.replace('hello', 'Hi'));
// console.log(str.replaceAll('l', 'o'));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.concat(' some text'));
// console.log(str + (' some text'));




//ex-2

// let str = 'My Classworks'
// let sliceString = str.slice(-3)
// console.log(sliceString);



// let str2 = 'Amazon'
// let replacedString = str2.replace(/a/gi, 'e')
// console.log(replacedString);


// let str3 = ' OGAbek Hello WoRld  OGAbek ogabek  OGAbek OGAbek  OGAbek'
// let replacedString2 = str3.replace(/ogabek/gi, 'universe')  
// console.log(replacedString2);




// let str = 'main'
// let max = 10

// // console.log('***main***');

// let strLength = str.length 
// let stars = max - strLength

// if (stars % 2 !== 0 && stars > 0) {
//     stars += 1
//     max += 1
// }

// let devidedStars = parseInt(stars / 2 + strLength)
// let strStart = str.padStart(devidedStars, '*')
// let strEnd = strStart.padEnd(max, '*')
// console.log(strEnd);



// let fullName = 'Putin Vladimir Vladimirovich'
// let splitedFullName = fullName.split(' ')
// // console.log(splitedFullName);
// let firtName = splitedFullName[0]
// let lastName = splitedFullName[1].slice(0, 1)
// let secondLastName = splitedFullName[2].slice(0, 1)
// console.log(`${firtName} ${lastName}.${secondLastName}`);


// let str2 = 'hello world'
// let count = 3

// let middle =  parseInt(str2.length / 2)
// let firstPart = `${str2.slice(0, middle)} `
// let secondPart = str2.slice(middle)
// console.log(firstPart.repeat(count), secondPart.repeat(count));

// let str2 = 'Test text Tumur Tommi Sometext'
// let sybmol  = '#'
// let sliced = str2.slice(0, 1)
// console.log(str2[0]);
// let sliced2 = str2.slice(1)
// console.log(sliced2);

// console.log(sliced + sliced2.replace(/t/gi, sybmol));

// str2 = str2.split('')
// for (let i = 0; i < str2.length; i++){

//     if(str2[i] === sliced.toLowerCase() ||
//     str2[i] === sliced && str2[0] !== i){
//         str2[i] = sybmol;
//     }
// };

// console.log(sliced + str2.join('').slice(1));





// let str = 'some text'


// console.log(str.slice(3, 7));
// console.log(str.substring(3, 7));
// console.log(str.substr(3, 5));

// const num = 12.2;
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// const test = '12.2px'
// console.log(parseInt(test));
// console.log(parseFloat(test));