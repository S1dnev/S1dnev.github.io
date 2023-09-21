const button = document.querySelector('.head-buttom__button');
const form = document.querySelector('.subscription');

// При клике на кнопку
function scroll () {
  button.addEventListener('click', e => {
    // Прокрутим страницу к форме
    form.scrollIntoView({
      block: 'nearest', // к ближайшей границе экрана
      behavior: 'smooth', // и плавно
    });
  });
}
