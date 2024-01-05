
const images = document.querySelectorAll('.images');
const pictures = document.querySelectorAll('.pictures');
const galleryList = document.querySelectorAll('.gallery-list');


pictures.forEach((elem) => elem.addEventListener('mouseover', () =>{
     elem.style.opacity = '0.8';
      elem.style.cursor = 'pointer';
    }))

pictures.forEach((elem) => elem.addEventListener('mouseout', () => elem.style = ''))


galleryList.forEach((item,i)=>{
  item.addEventListener('click',()=>{
console.log(item);
})
})