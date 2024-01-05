const nav = document.querySelectorAll('.list-item-link');
const info = document.querySelector('.main-info');
const packages = document.querySelector('.packages');
const receive = document.querySelector('.receive');
const blog = document.querySelector('.blog-image');
const comand = document.querySelector('.comand');
const application = document.querySelector('.application');



nav.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.borderBottom = 'solid 1px';
    item.style.borderColor = ' var(--turquoise-color)'
  })
  item.addEventListener('mouseout', () => {

    item.style.borderBottom = 'none';
  })


  item.addEventListener('click', () => {

    if (item.value) {
      switch (item.value) {
        case 'О нас':
          info.scrollIntoView({ behavior: 'smooth' })
          break;

        case 'Услуги':
          receive.scrollIntoView({ block: 'center', behavior: 'smooth' })
          break;

        case 'Стоимость':
          packages.scrollIntoView({ block: 'center', behavior: 'smooth' })
          break;

        case 'Блог':
          blog.scrollIntoView({ block: 'center', behavior: 'smooth' })
          break;

        case 'Команда':
          comand.scrollIntoView({ behavior: 'smooth' })
          break;

        case 'Контакты':
          application.scrollIntoView({ behavior: 'smooth' })
          break;

      }
    } else {

    }
  })

})

