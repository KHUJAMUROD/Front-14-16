/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон с постером фильма на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Скотт Пилигрим против...",
        "Одержимость",
        "Лига справедливости",
        "Логан",
        "Ла-ла лэнд",
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');


console.log(adv);

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';
genre.style.fontSize = '30px';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});



// ------------------------------------------------------------------------


/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" -
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение:
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }


            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);


            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
        genre.style.fontSize = '30px';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };



    const sortArr = (arr) => {
        arr.sort((a, b) => {
            // Переводим строки в нижний регистр для корректного сравнения
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();

            const isLatinA = /[a-zA-Z]/.test(a);

            const isLatinB = /[a-zA-Z]/.test(b);

            if (isLatinA && !isLatinB) {
                return -1;
            } else if (!isLatinA && isLatinB) {
                return 1;
            } else {
                return lowerA.localeCompare(lowerB, 'ru');
            }
        });
    };



    // const sortArr = (arr) => {
    //     arr.sort()
    // }


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);


        films.forEach((film, i) => {
            parent.innerHTML += `
                        <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
                    `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});




// console.log(x.splice( 3 ));
// console.log(x.splice( -3 ));
// console.log(x.splice( 2, 2 ));
// console.log(x.splice( -2, 2 ));
// console.log(x.splice( 0, 2, "z", true,));







