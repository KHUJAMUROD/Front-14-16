"use strict"

// Основная функция
// Инициализируем все рейтинги
function initRatings() {
	const ratings = document.querySelectorAll('.rating');
	let ratingActive, ratingValue;

	if (ratings.length > 0) {
		for (let index = 0; index < ratings.length; index++) {
			const rating = ratings[index];
			initRating(rating);
		}
	}
	// Инициализируем конкретный рейтинг
	function initRating(rating) {
		initRatingVars(rating);

		setRatingActiveWidth();

		if (rating.classList.contains('rating_set')) {
			setRating(rating);
		}
	}

	// Инициализайция переменных
	function initRatingVars(rating) {
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}

	// Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML) {
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}
	// Возможность указать оценку 
	function setRating(rating) {
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++) {
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function (e) {
				// Обновление переменных
				initRatingVars(rating);
				// Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function (e) {
				// Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function (e) {
				setRatingValue(ratingItem.value);

				//setRatingActiveWidth(ratingItem.value);
			});
		}
	}
	function setRatingValue(value) {
		// Отправика данных (value) на сервер
		// ...код...
		// Получаем новый рейтинг
		const newRating = 3.7;

		// Вывод нового среднего результата
		ratingValue.innerHTML = newRating;

		// Обновление активных звезд
		setRatingActiveWidth();
	}
}
initRatings();