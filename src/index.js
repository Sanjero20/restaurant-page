import loadHeader from './pages/display.js'

const content = document.getElementById("content")
const header = loadHeader();

console.log(header)
content.appendChild(header)
