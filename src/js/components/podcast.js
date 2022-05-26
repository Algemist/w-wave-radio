const btn = document.querySelector('.podcast__btn');
if (btn) {
  const card = document.querySelectorAll('.podcast-card_hidden');
  btn.addEventListener('click', () => {
    card.forEach(el => {
      el.classList.remove('podcast-card_hidden');
      btn.style.display = 'none';
    })
  })
}
