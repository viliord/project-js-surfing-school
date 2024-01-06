const roundList = document.querySelectorAll('.round-list');
const previousPicture = document.getElementById('previousPicture');
const previousImage = document.getElementById('previousImage')

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];




function picture(img) {
  let attenuation = 99;
  let result = 10;

  smoothImage = setInterval(() => {

    result++;
    previousPicture.style.opacity = `0.${result}`

    attenuation--;
    previousImage.style.opacity = `0.${attenuation}`

    if (result === 99 && attenuation === 10) {
      result = 10;
      attenuation = 99;

      previousImage.src = `css/pictures/blog/${num}.jpg`
      previousPicture.style.opacity = '0'
      previousImage.style.opacity = '1'
      clearInterval(smoothImage);
    }
  }, 1);
};

roundList.forEach((item, i) => {

  item.addEventListener('click', () => {
    num = i

    arr.filter((value) =>
      value !== i ? roundList[value].style.backgroundColor = '#F2F2F2' : item.style.backgroundColor = '#00B2A0'

    )
    switch (i) {
      case 0:
        picture(previousPicture.src = 'css/pictures/blog/0.jpg')

        break;

      case 1:
        picture(previousPicture.src = 'css/pictures/blog/1.jpg')

        break;

      case 2:
        picture(previousPicture.src = 'css/pictures/blog/2.jpg')

        break;

      case 3:
        picture(previousPicture.src = 'css/pictures/blog/3.jpg')

        break;

      case 4:
        picture(previousPicture.src = 'css/pictures/blog/4.jpg')

        break;

      case 5:
        picture(previousPicture.src = 'css/pictures/blog/5.jpg')

        break;

      case 6:
        picture(previousPicture.src = 'css/pictures/blog/6.jpg')

        break;

      case 7:
        picture(previousPicture.src = 'css/pictures/blog/7.jpg')

        break;

      case 8:
        picture(previousPicture.src = 'css/pictures/blog/8.jpg')

        break;

      case 9:
        picture(previousPicture.src = 'css/pictures/blog/9.jpg')

        break;
      default:

        break;
    }


  })
})




