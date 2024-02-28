const modal = () => {
  const modal = document.querySelector('.search-model');
  const modalBtn = document.querySelector('.icon_search');
  const modalClose = modal.querySelector('.search-close-switch');
  const modalInput = modal.querySelector('#search-input');

  modalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modalInput.addEventListener('input', ()=>{
    console.log(modalInput.value)
  })
}

modal();