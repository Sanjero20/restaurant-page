export default function loadHome() {
  // Set main container to home
  const main = document.querySelector('#main-container')
  main.classList.add('home')

  // Create a container to store img & p
  const div = document.createElement('div')
  div.classList.add('centralized')
  div.classList.add('home')

  // Set image for homescreen 
  const img = document.createElement('img');
  img.classList.add('branch-logo')
  img.src = './assets/jollibee-branch.jpg'

  // Paragraph about Jollibee
  const p = document.createElement('p')
  p.classList.add('contain')
  p.textContent = `Jollibee is the largest fast food chain brand in the Philippines, operating a network of more than 1,500 stores in 17 countries. A dominant market leader in the Philippines, Jollibee enjoys the lion's share of the local market that is more than all the other multinational fast food brands in PH combined.`

  div.appendChild(img)
  div.appendChild(p)

  // Append home to main container
  main.appendChild(div)
}