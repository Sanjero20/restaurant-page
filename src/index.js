import clearContent from './pages/clear.js';
import loadHeader from './pages/header.js';
import loadHome from './pages/home.js';

const content = document.getElementById("content")
const header = loadHeader();

const infoContent = document.createElement('div')
infoContent.setAttribute('id', 'main-container')

content.appendChild(header)
content.appendChild(infoContent)

const home = loadHome();
infoContent.appendChild(home)

const homeTab = document.querySelector('#home')
homeTab.addEventListener('click', () => {
  clearContent()
  
})


