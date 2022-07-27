export default function clearContent() {
  const main = document.querySelector('#main-container')
  main.innerHTML = ''
  main.removeAttribute('class')
}