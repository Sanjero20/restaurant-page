export default function loadContact() {
  const main = document.getElementById('main-container')
  main.classList.add('centralized')

  // Header title
  const h1 = document.createElement("h1")
  h1.classList.add('contact-title')
  h1.textContent = "CONTACT US"

  const img = document.createElement('img')
  img.src = './assets/jollibee-logo2.png'

  const p = document.createElement('p')
  p.textContent = '8-7000 Jollibee Delivery'

  main.appendChild(img)
  main.appendChild(h1)
  main.appendChild(p)
}