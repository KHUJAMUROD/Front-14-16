'use strict'



const btns = document.querySelectorAll('button');
// const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('First Click');
// //     // console.log('Click');
// }

// btn.onclick = function() {
//     alert('Second click');
// }

// btn.addEventListener('click', () => {
//     alert('addEventListener1');
// })

// btn.addEventListener('click', () =>{
//     alert('addEventListener2');
// })

// btn.addEventListener('click', () =>{
//     alert('Click3');
// })


// btn.addEventListener('mouseenter', (e) =>{
// console.log('Hover');
// alert('Hover');
// console.log(e);
// console.log(e.target);
// console.log(e.target.remove());
// });


// btn.addEventListener('click', (e) => {
// console.log(e.target);
// e.target.remove();
// })


// const deleteElement = (e) => {
    // e.target.remove()
// }

// btn.addEventListener('click', deleteElement)
// btn.removeEventListener('click', deleteElement);

// let i = 0

const deleteElement = (e) => {
    console.log(e.target);
    // e.target.remove()
    // console.log(e.type);
    // console.log(e);
    // console.log(e.currentTarget);
    // i++;
    // if (i === 2) {
        // btn.removeEventListener('click', deleteElement);
    // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);




btns.forEach(btn => {
    // btn.addEventListener('click', deleteElement)
    btn.addEventListener('click', deleteElement, { once: true })
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
})