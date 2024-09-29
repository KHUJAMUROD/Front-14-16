'use strict'


const p = document.querySelectorAll('p');
console.log(p);
console.log('test1');



function loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.body.append(script)
}

loadScript('script2.js')
loadScript('script3.js')