// let lesson = "Alert, Prompt, Confirm & Условные операторы Else If"
// * alert   => оповышение
// //* confirm => даёт выбор (да или нет)
// //* prompt  => asks a question or information from client
// *            задаёт вопрос (диалог), можно сохранить как контейнер

// let feedbackFromAlert = alert('hello this is alert()')
// console.log(feedbackFromAlert);
// let feedbackfromConfirm = confirm('are you old enough')
// console.log(feedbackfromConfirm);
// let feedbackFromPrompt = prompt('how old are you?', '')
// console.log(feedbackFromPrompt);
// console.log(18);
// console.log('test' - 123);
// console.log(`im am ${feedbackFromPrompt} years old`);


// Функция alert позволяет вывести какую-либо информацию
// во всплывающем окне в браузере. К таким окнам нельзя
// добавить стили и разукрасить их. Такое всплывающее окно
// очень удобно, так как оно позволяет быстро и наглядно
// вывести нужную информацию для пользователя.



// Функция prompt выводит окно для ввода
// данных. Первым параметром она принимает
//  сообщение, которое будет показано
//  пользователю, а вторым - текст по
//  умолчанию в поле ввода Второй
//  параметр - не обязательный.
//  В окошке что появится будет
//  находится текстовое поле,
//  и две кнопки - ОК, CANCEL.


// confirm. показывает сообщение и ждёт,
// пока пользователь нажмёт OK или Отмена.
//  Возвращает true , если нажата OK,
//   и false , если нажата кнопка
//   «Отмена» или Esc с клавиатуры.

//     // код прочитается если условиеПервое окажется правдой
// } else if (условиеВторое == true) {
//     // ...
// } else if (условиеТретье == true) {
//     // ...
// } else {
//     // код прочитается если некакое условие не окажется правдой
// }




// let answer = prompt(`
//     Добро пожаловать в наш магазин!
//     Что вы желаете?
// `);
// if (answer.includes("Snikers")) {
//     confirm("Окей, Snikers стоит $2.00");
// }
// else if (answer.includes("Cola")) {
//     confirm("Окей, Кола стоит $1.00");
// }
// else {
//     confirm("Такого товара нет в наличии");
// }


// const clientName = prompt("Enter your name please: ")
// let order = prompt(`
//     What would you like to order?
//     Soups:
//         1. Куриный бульён из тараканов
//         2. Бобуиный бульён
//         3. Бульён из ...
//         4. Червяной лагман
//     Dishes:
//         5. Димлама из кракадила
//         6. Стейк из рук ...
//         7. Жаренный нос верблюда
//     Desert:
//         8. Тапки Мухаммада
//         9. Фирменное блюдо из Червей
//         10. Баранина ...
// `)
// if (order == "1" || order.includes("Куриный бульён из тараканов")) {
//     let trueOrFalse = confirm(`
//         Куриный бульён из тараканов закончился но есть из муровей.
//         Принести?
//     `)
//     if (trueOrFalse == true) {
//         alert("Ваш Куриный бульён из муровей будет после 5 минут")
//     } else {
//         alert('Если не хотите то идите и ещте ....!')
//     }
// }



// let myName = "Alisher"
// switch (myName) {
//     case "Aziz":
//         console.log("Aziz")
//         break;
//     case "Alisher":
//         console.log("Hello Boss!")
//     default:
//         console.log("Default situation")
// }



