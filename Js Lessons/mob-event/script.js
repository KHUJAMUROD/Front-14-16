// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        // console.log(e.targetTouches);
    })
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
        // console.log(e.targetTouches[0].pageX);
    })
    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    })

});


// touches    
// targetTouches 
// changedTouches