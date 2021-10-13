const closeButton = document.getElementById('close');
const humbugerMenu = document.getElementById('humbuger');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = document.getElementsByClassName('menu-item');
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

function hide() {
  mobileMenu.classList.toggle('menu-out');
}

closeButton.onclick = hide;
humbugerMenu.onclick = hide;

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].onclick = hide;
}

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
