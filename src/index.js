import clearContent from './pages/clear.js';
import loadHeader from './pages/header.js';
import loadHome from './pages/home.js';
import loadMenu from './pages/menu.js';
import loadContact from './pages/contact.js';

const content = document.getElementById("content")
const header = loadHeader();

const main = document.createElement('div')
main.setAttribute('id', 'main-container')

// Append header and main container
content.appendChild(header)
content.appendChild(main)

// Initial Display
loadHome();

// Event listeners for nav bar
const homeTab = document.querySelector('#home')
homeTab.addEventListener('click', () => {
  clearContent()
  loadHome()
})

const menuTab = document.querySelector('#menu')
menuTab.addEventListener('click', () => {
  clearContent()
  loadMenu()
})

const contactTab = document.querySelector('#contact')
contactTab.addEventListener('click', () => {
  clearContent()
  loadContact()
})


//Event listener for dropdown menu
const dropDown = document.querySelector('.toggle-button')
const navbar = document.querySelector('nav');
dropDown.addEventListener('click', () => {
  navbar.classList.toggle('show')
})
