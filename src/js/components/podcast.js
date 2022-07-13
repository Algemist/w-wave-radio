const btn = document.querySelector('.podcast__btn');

if (window.innerWidth < 577) {
  const cards = document.querySelectorAll('.podcast-card');
  for (let i = 4; i < cards.length; i++) {
    cards[i].classList.add('podcast-card_hidden');
  }
}


if (btn) {
  const card = document.querySelectorAll('.podcast-card_hidden');
  btn.addEventListener('click', () => {
    card.forEach(el => {
      el.classList.remove('podcast-card_hidden');
      btn.style.display = 'none';
    })
  })
}
