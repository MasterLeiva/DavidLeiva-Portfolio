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
/* Projects Section/Generate Cards */
const projects = [
  {
    name: 'Tonic',
    other: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    img: 'img/desktop-project-1.png',
    imgPosition: '',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio',
  },

  {
    name: 'Multi-Post Stories',
    other: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: 2023,
    img: 'img/desktop-project-2.png',
    imgPosition: ' right-image',
    shortDescription: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Ruby on rails'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio',
  },

  {
    name: 'Facebook 360',
    other: 'FACEBOOK',
    role: 'Back Stack Dev',
    year: 2015,
    img: 'img/desktop-project-3.png',
    imgPosition: '',
    shortDescription: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.<br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio',
  },

  {
    name: 'Uber Navigation',
    other: 'UBER',
    role: 'Lead Developer',
    year: 2018,
    img: 'img/desktop-project-4.png',
    imgPosition: ' right-image',
    shortDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://masterleiva.github.io/DavidLeiva-Portfolio/',
    source: 'https://github.com/MasterLeiva/DavidLeiva-Portfolio',
  },
];
const cardsContainer = document.getElementById('Portfolio');

for (let j = 0; j < projects.length; j += 1) {
  const cardContent = `
    <div class="cards${projects[j].imgPosition}">
      <div class="img-project">
        <img src="${projects[j].img}" alt="Project number ${j} image">
      </div>
      <div class="content">
        <h2>${projects[j].name}</h2>
        <div class="info-tags">
          <h3>${projects[j].other}</h3>
          <p>${projects[j].role}</p>
          <p>${projects[j].year}</p>
        </div>
        <p class="cards-p">${projects[j].shortDescription}</p>
        <ul class="tags">
          ${projects[j].technologies.map((element) => `<li><a>${element}</a></li>`).join('')}
        </ul>
        <button class="main-buttons projectButtons">See Project</button>
      </div>
    </div>
  `;
  cardsContainer.innerHTML += cardContent;
}

/* Popup Window */
const popUpWindow = document.getElementById('popupWindow');
const mainButtons = document.querySelectorAll('.projectButtons');

function displayWindow(num) {
  const content = `
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
          <button class="main-buttons" id="live-button" onclick="window.open('${projects[num].liveLink}', '_blank');">See live 
            <svg class="icon-button-popup" id="svg-live" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" />
            </svg>
          </button>
          <button class="main-buttons" id="source-button" onclick="window.open('${projects[num].source}', '_blank');">See source 
            <svg class="icon-button-popup" id="svg-source" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.9989 9.46114C20.9989 8.32124 20.6329 7.25043 19.9342 6.31779C20.2004 5.41969 20.2669 4.27979 20.2004 2.96718C20.1671 2.41451 19.7345 2 19.2022 2C18.9028 2 16.3741 2.03454 14.9101 3.38169C13.6458 3.1399 12.315 3.1399 11.0174 3.38169C9.58667 2.03454 7.05802 2 6.7253 2C6.19296 2 5.76042 2.41451 5.72715 2.96718C5.62734 4.27979 5.72715 5.41969 5.99333 6.31779C5.29462 7.28497 4.92863 8.35579 4.92863 9.46114C4.92863 11.8791 6.7253 14.0553 9.45358 15.0915C9.35377 15.2988 9.28723 15.5406 9.22068 15.7824C6.32604 15.4715 4.9619 12.7427 4.89536 12.639C4.66246 12.1209 4.06357 11.9136 3.56449 12.19C3.06541 12.4318 2.86578 13.0535 3.13196 13.5717C3.1985 13.7444 5.02845 17.4404 9.05432 17.8549V20.9637C9.05432 21.5509 9.48686 22 10.0525 22H15.875C16.4406 22 16.8732 21.5509 16.8732 20.9637V16.8532C16.8732 16.2314 16.7401 15.6442 16.5072 15.1261C19.2022 14.0553 20.9989 11.9136 20.9989 9.46114Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;

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

for (let m = 0; m < mainButtons.length; m += 1) {
  mainButtons[m].addEventListener('click', () => displayWindow(m));
}

/* Contact validation */
const form = document.getElementById('contact-form');
const email = document.getElementById('email');
const small = document.getElementById('small');

function checkInput() {
  const emailValue = email.value.trim();
  if (emailValue !== emailValue.toLowerCase()) {
    small.classList.add('displayError');
    return false;
  } else {
    small.classList.remove('displayError');
    return true;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInput()) {
    form.submit();
  }
});

/* Preserve Form Data */
const nameForm = document.getElementById('fullname');
const commentForm = document.getElementById('comment');

form.addEventListener('submit', () => {
  const name = nameForm.value;
  const comment = commentForm.value;
  const emailaddress = email.value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', emailaddress);
  localStorage.setItem('comment', comment);
});

window.addEventListener('load', () => {
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  const savedComment = localStorage.getItem('comment');

  nameForm.value = savedName;
  email.value = savedEmail;
  commentForm.value = savedComment;
});
