const closeButton = document.getElementById('close');
const humbugerMenu = document.getElementById('humbuger');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = document.getElementsByClassName('menu-item');
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

// MODAL

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

let cardSection = document.createElement('div');
cardSection.className = 'cards'

let cards = [{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
},
{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
},
{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
},
{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
},
{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
},
{
  name:"Multi-post Stories <br>Gain + Glory", 
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un took a galley of type and scrambled it 1960s with the release", 
  featuredImage: '/images/Snapshoot Portfolio-desk.png',
  technologies: ['Ruby on Rails', 'Css', 'Javascript', 'Html'],
  linkToLiveVersion: "https://livev.com",
  linkToSource: "https://github.com"
}]

cards = cards.forEach(function({name, technologies}) {
  let card = document.createElement('article');
  card.className = 'card';

  card.innerHTML = `
  <div class="sane">
  </div>
  <div class="content">
    <h1>${name}</h1>
    <ul class="category">
              <li><a href="#">${technologies[0]}</a></li>
              <li><a href="#">${technologies[1]}</a></li>
              <li><a href="#">${technologies[2]}</a></li>
              <li><a href="#">${technologies[3]}</a></li>
    </ul>
    <div class="open">
      <button class="open-modal"><a href="#">See Project</a></button>
    </div>
  </div>
  `
  cardSection.appendChild(card);
});
let portfolio = document.querySelector('#portfolio');
portfolio.insertBefore(cardSection, portfolio.lastChild);

const openModalButtons = document.querySelectorAll('.open-modal')

openModalButtons.forEach(button => {
  button.onclick =  () => {
    const modal = document.querySelector('#modal')
    openModal(modal)
  }
})