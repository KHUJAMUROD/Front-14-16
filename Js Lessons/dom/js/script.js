'use strict'

// const box = document.getElementById('box');
// const box = document.getElementsByClassName('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');

// console.log(btns);
// console.log(btns[1]);

// const btns2 = document.getElementsByTagName('button')[1];

// console.log(btns2);

// const circles = document.getElementsByClassName('circle');

// console.log(circles);


// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// for(let i = 0; i < hearts.length; i++){
//     console.log(hearts[i]);
// }


// hearts.forEach(item => {
//     console.log(item);
// })


// const oneHeart = document.querySelector('.heart')

// console.log(oneHeart);

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
// const oneHeart = wrapper.querySelector('.heart');

// console.dir(box);

// box.style.backgroundColor = 'dodgerblue';
// box.style.width = '500px';
// btns[1].style.borderRadius = '100%'
// circles.style.backgroundColor = 'red' //error
// circles[1].style.backgroundColor = 'red'
// box.style.cssText = `background-color: green; width: 500px;`;



    // for (let i = 0; i < hearts.length; i++){
    //     hearts[i].style.backgroundColor = 'blue'
    // };

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue'
// });

const div = document.createElement('div')
// const text = document.createTextNode('Here was I')

div.classList.add('black');  

document.body.append(div);
// document.body.append(text);
// document.body.prepend(div);
// document.body.appendChild(div);

// wrapper.appendChild(div);
// wrapper.append(div);
// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[1].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = 'Hello World';
// div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello';
// div.textContent = "<h1>Hello World</h1>";
// div.style.width = '400px'


// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');  
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');







