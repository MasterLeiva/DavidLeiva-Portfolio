const hamburger = document.querySelector('.hamburger');
const mainlinks = document.querySelector('#links-nav');
const listpopup = document.querySelectorAll('.menu-list');
const sections = document.querySelector('.headline');
const closebutton = document.querySelector('.x-button');

function openwindow() {
  mainlinks.classList.replace('links', 'links-menu');
}

function closewindow() {
  mainlinks.classList.replace('links-menu', 'links');
}

hamburger.addEventListener('click', openwindow);
closebutton.addEventListener('click', closewindow);