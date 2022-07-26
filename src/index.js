import loadHeader from './pages/display.js';
import loadHome from './pages/home.js';

const content = document.getElementById("content")
const header = loadHeader();

const infoContent = document.createElement('div')
infoContent.classList.add('info-container')

content.appendChild(header)
content.appendChild(infoContent)

const home = loadHome();
infoContent.appendChild(home)


