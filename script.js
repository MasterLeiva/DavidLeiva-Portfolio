/* Menu Window */
const hamburger = document.querySelector('.hamburger');
const mainlinks = document.querySelector('#links-nav');
const listpopup = document.querySelectorAll('.menu-list');
const closebutton = document.querySelector('.x-button');

function openwindow() {
  mainlinks.classList.replace('links', 'links-menu');
}

function closewindow() {
  mainlinks.classList.replace('links-menu', 'links');
}

hamburger.addEventListener('click', openwindow);
closebutton.addEventListener('click', closewindow);

for (let i = 0; i < listpopup.length; i += 1) {
  listpopup[i].addEventListener('click', closewindow);
}

/* Popup Window */
const popUpWindow = document.getElementById('popupWindow');
const mainButtons = document.querySelectorAll('.projectButtons');
const projects = [
  {
    name: 'Tonic',
    other: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    img: 'img/desktop-project-1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio'
  },

  {
    name: 'Multi-Post Stories',
    other: 'Facebook',
    role: 'Full Stack Dev',
    year: 2023,
    img: 'img/desktop-project-2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio'
  }
]

function displayWindow(num) {
  var content = `
  <div class="card-popup" id="dynamic-content">
    <h2>${projects[num].name} <button id="closing-popup"><img class="closing-popup-img" src="img/close-popup.png"></button></h2>
    <div class="info-tags">
      <h4>${projects[num].other}</h4>
      <p>${projects[num].role}</p>
      <p>${projects[num].year}</p>
    </div>
    <div class="img-project">
      <img src="${projects[num].img}" alt="Project number 4 image">
    </div>
    <div class="popup-content">
      <div class="p-container-popup">
        <p class="cards-p">${projects[num].description}</p>
      </div>
      <div class="links-container-popup">
        <ul class="tags">
          ${projects[num].technologies.map((element) => `<li><a>${element}</a></li>`).join('')}
        </ul>
        <div class="divider"></div>
        <div class="buttons-popup">
          <button class="main-buttons">See live <img class="icon-button-popup" src="img/live-icon.png"></button>
          <button class="main-buttons">See source <img class="icon-button-popup" src="img/github-popup.png"></button>
        </div>
      </div>
    </div>
  </div>
  `
  popUpWindow.classList.add('popup-container');
  popUpWindow.innerHTML = content;

  function closeWindow() {
    const dynamic = document.getElementById('dynamic-content');
    popUpWindow.removeChild(dynamic);
    popUpWindow.classList.remove('popup-container');
  }

  const closingPopup = document.getElementById('closing-popup');
  closingPopup.addEventListener('click', closeWindow);
}

for (var m = 0; m < mainButtons.length; m += 1){
  mainButtons[m].addEventListener('click', () => displayWindow(m));
}
