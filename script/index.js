const closeButton = document.getElementById('close');
const humbugerMenu = document.getElementById('humbuger');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = document.getElementsByClassName('menu-item');

function hide() {
  mobileMenu.classList.toggle('menu-out');
}

closeButton.onclick = hide;
humbugerMenu.onclick = hide;

for (let i = 0; i < menuItems.length; i += 1) {
  menuItems[i].onclick = hide;
}
