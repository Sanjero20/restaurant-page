export default function loadHeader() {
  const header = document.createElement("header")

  // Image Logo
  const img = document.createElement('img'); 
  img.src = '../src/assets/Jollibee-logo.png';
  img.classList.add('logo');

  // Container 
  const div = document.createElement('div');
  div.classList.add('container');

  // Navbar
  const nav = createNavBar();

  // Append elements to div container
  div.appendChild(img)
  div.appendChild(nav);

  // Append container to header
  header.appendChild(div)

  return header
}

function createNavBar() {
  const navbar = document.createElement('nav')
  const ul = document.createElement('ul')
  const home = createList("HOME")
  const menu = createList("MENU")
  const contact = createList("CONTACT")

  // Append to Unordered List
  ul.appendChild(home)
  ul.appendChild(menu)
  ul.appendChild(contact)
  
  // Append Unordered List to Navbar
  navbar.append(ul)

  return navbar
}

function createList(text) {
  const li = document.createElement('li');
  li.textContent = text;

  return li;
}

