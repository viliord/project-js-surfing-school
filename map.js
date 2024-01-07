const map = document.getElementById('map');
const mapImage = document.querySelector('.map-image');
const mapPictures = document.getElementById('map-pictures');
const mapSection = document.querySelector('.map');
const showBtn = document.getElementById('showBtn');
const destroyBtn = document.getElementById('destroyBtn');
let myMap;

map.addEventListener('mouseover', () => {
    showBtn.style.display = 'block'
});

map.addEventListener('mouseout', () => {
    showBtn.style = ''
});

showBtn.addEventListener('click', () => {
    destroyBtn.style.display = 'block'
    ymaps.ready(init);
    function init() {
        myMap = new ymaps.Map('map', {
            center: [29.129053778650086, -13.62303339912903],
            zoom: 11.2
        }, {
            searchControlProvider: 'yandex#search'
        }),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'css/icons/Pin.png',
                // Размеры метки.
                iconImageSize: [57, 70],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-25, -50]
            })
        myMap.geoObjects
            .add(myPlacemark)

        destroyBtn.addEventListener('click', () => {
            //для уничтожения метод destroy()
            myMap.destroy();
            destroyBtn.style = '';
        })
    }
});


