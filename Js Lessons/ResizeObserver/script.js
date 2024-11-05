'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(MutationRecords => {
    console.log(MutationRecords);

});

observer.observe(box, {
childList: true    
})


observer.disconnect();

// https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver