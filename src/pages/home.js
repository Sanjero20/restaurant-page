export default function loadHome() {
  const infoContent = document.querySelector('.info-container')
  infoContent.classList.add('home')

  const div = document.createElement('div')
  div.classList.add('centralized')
  div.classList.add('home')

  const img = document.createElement('img');
  img.classList.add('branch-logo')
  img.src = './assets/jollibee-branch.jpg'

  const p = document.createElement('p')
  p.classList.add('contain')

  p.textContent = `Jollibee is the largest fast food chain brand in the Philippines, operating a network of more than 1,500 stores in 17 countries. A dominant market leader in the Philippines, Jollibee enjoys the lion's share of the local market that is more than all the other multinational fast food brands in PH combined.`

  div.appendChild(img)
  div.appendChild(p)

  return div;
}