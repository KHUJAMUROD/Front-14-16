'use strict';


window.addEventListener('DOMContentLoaded', () => {
    consttabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('tabcontent'),
        tabsParent = document.querySelector('.tabheader__item');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
        });
        tab.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });



    }


    function showTabContent(i) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {

    })

});







// window.addEventListener('DOMContentLoaded', () => {
//     consttabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('tabcontent'),
//         tabsParent = document.querySelector('.tabheader__item');

//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.classList.add('hide');
//         });
//         tab.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });



//     }


//     function showTabContent(i) {
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('.tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);

//                 }
//             });
//         }
//     });
// });
