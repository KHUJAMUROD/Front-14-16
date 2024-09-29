'use strict';

const box = document.querySelector('.box');

// const newHeight = 100;
const newHeight = 0;
const newWidth = 400;

function changeParams(elem, h, w) {
    // elem.style.height = `${h || 200}px`;
    // elem.style.width = `${w || 200}px`;
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // elem.innerHTML = (h ?? 100) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName

console.log(userName ?? 'User');
console.log(null ?? 'User');
console.log(0 ?? 'User');
console.log(NaN ?? 'User');
console.log(false ?? 'User');
console.log('' ?? 'User');
