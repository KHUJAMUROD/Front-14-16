'use strict'
const btn = document.querySelector('.btn');


// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 2000)  


// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello')  


// const timerId = setTimeout(logger, 2000)
btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000)
    const timerId = setInterval(logger, 2000)
})

// clearInterval(timerId)

function logger() {
    console.log('Hello logger');
}


btn.addEventListener('click', () => {
     const timerId = setTimeout(logger, 500)
});

function logger() { 
    if (i === 3) {
        clearInterval(timerId);
    }

    console.log('text');
    i++;
};


let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout
    
});


function myAnimation() {
    if (pos == 300) {
        clearInterval();
    }else {
        pos++;
        elem.style.top = pos + "px";
    }
}

