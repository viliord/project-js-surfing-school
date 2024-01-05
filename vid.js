
let video = document.getElementById("video");
let videoTrack = document.querySelector(".video-track"); // Получаем элемент Видеодорожки
let time = document.querySelector(".timeline");          // Получаем элемент времени видео
let btnPlay = document.querySelector(".play");           // Получаем кнопку проигрывания
let btnPause = document.querySelector(".pause");
let videoPlayer = document.getElementById("videoPlayer");       // Получаем кнопку паузы

const audio = new Audio();
audio.src = "css/sound/pop.mp3";

let videoPlay;


btnPlay.addEventListener("click", () => {
  video.play(); // Запуск проигрывания
  audio.play();
  btnPause.style.zIndex = '1'
  btnPause.style.opacity = '0.1'
  btnPlay.style.zIndex = '-1'
  videoTrack.style.display = 'block'
  // Запуск интервала
  videoPlay = setInterval(function () {
    // Создаём переменную времени видео
    let videoTime = Math.round(video.currentTime);

    // Создаём переменную всего времени видео
    let videoLength = Math.round(video.duration);

    // Вычисляем длину дорожки
    time.style.width = (videoTime * 100) / videoLength + '%';

    // Возвращаем исходные значения
    if (videoTime >= 13.268333) {
      btnPause.style = '';
      btnPlay.style = '';
      videoTrack.style.display = ''
    }

  }, 10)


});



btnPause.addEventListener("click", function () {
  video.pause(); // Останавливает воспроизведение
  clearInterval(videoPlay) // убирает работу интервала
  audio.pause();
  btnPause.style = '';
  btnPlay.style = '';
});


