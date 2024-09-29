const box = document.querySelector('.box')
const block = document.querySelector('.block')


// console.log(block);
// console.log(block.textContent);

// if(block){
//     console.log(block.textContent);
// }

// console.log(block?.textContent);
// console.log(1 + 2);


const userData = {
    name: 'Alex',
    age: null,
    say() {
        console.log("Hello");
    },
}



if (userData && userData.skills && userData.skills.js) {
    console.log(userData.skills.js);
}

// console.log(userData?.skills?.js);

userData.say();
userData.hey?.();
// userData.hey();


