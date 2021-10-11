let closeButton = document.getElementById('close');
let humbugerMenu = document.getElementById('humbuger');
let mobileMenu = document.getElementById('mobileMenu');

function hide() {
    mobileMenu.classList.toggle('menu-out')
}

closeButton.onclick = hide;
humbugerMenu.onclick = hide;

