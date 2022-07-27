import clearContent from './pages/clear.js';
import loadHeader from './pages/header.js';
import loadHome from './pages/home.js';
import loadMenu from './pages/menu.js';

const content = document.getElementById("content")
const header = loadHeader();

const main = document.createElement('div')
main.setAttribute('id', 'main-container')

// Append header and main container
content.appendChild(header)
content.appendChild(main)

// load Display
// loadHome();
loadMenu();



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

