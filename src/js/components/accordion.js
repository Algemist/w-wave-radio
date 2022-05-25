const acc = document.querySelectorAll('.accordion__btn');
if (acc) {
  acc.forEach((el) => {
    el.classList.remove('active');
    el.nextElementSibling.classList.remove('acitve');
    el.addEventListener('click', () => {
      el.classList.toggle('active');
      el.nextElementSibling.classList.toggle('active');
    })
  })

  acc[0].classList.add('active');
  acc[0].nextElementSibling.classList.add('active');
}
