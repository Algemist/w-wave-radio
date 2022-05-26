const tabcontents = document.querySelectorAll('.tab-content');
if (tabcontents) {
  const btns = document.querySelectorAll('.tabs__nav-btn');
  btns.forEach((el) => {
    el.addEventListener('click', () => {
      const activeBtn = document.querySelector('.tabs__nav-btn.active');
      const activeContent = document.querySelector(`[data-content='${activeBtn.getAttribute('data-tabs')}']`);
      activeBtn.classList.remove('active');
      activeContent.classList.remove('active');
      el.classList.add('active');
      const content = document.querySelector(`[data-content='${el.getAttribute('data-tabs')}']`);
      content.classList.add('active');
    });
  });
};
