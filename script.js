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

for (let i = 0; i < listpopup.length; i +=1) {
  listpopup[i].addEventListener('click', closewindow);
}
