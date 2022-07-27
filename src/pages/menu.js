const srcChickenJoySpag = './assets/menu-items/chicken-joy.png';
const srcChickenJoyPalabok = './assets/menu-items/chicken-joy2.png';
const srcJollyHotog = './assets/menu-items/jolly-hotdog.png';
const srcYumBurger  = './assets/menu-items/yumburger.png';
const srcJollySpag  = './assets/menu-items/jolly-spaghetti.png';
const srcCombo = './assets/menu-items/combo.png'

export default function loadMenu() {
  // Set main container to have a menu css styling
  const main = document.getElementById('main-container');
  main.classList.add('menu')

  // Create menu objects
  const chicken = new createMenuItem('8 - pc. Chickenjoy Bucket w/ Jolly Spaghetti Family Pan', srcChickenJoySpag, 705);
  const chickenPalabok = new createMenuItem('6 - pc. Chickenjoy with Palabok Family Pan', srcChickenJoyPalabok, 740)

  const womboCombo = new createMenuItem('1 - pc. Chickenjoy w/ Burger Steak & Half Jolly Spaghetti Super Meal', srcCombo, 185);
  const jollyHotdog = new createMenuItem('Cheesy Classic Jolly Hotdog', srcJollyHotog, 64)
  const yumburger = new createMenuItem('Yumburger', srcYumBurger, 39)
  const jollySpaghetti = new createMenuItem('Jolly Spaghetti', srcJollySpag, 55)

  

  // Append to main container
  addToList(chicken);
  addToList(chickenPalabok);
  addToList(womboCombo);
  addToList(jollyHotdog);
  addToList(yumburger);
  addToList(jollySpaghetti);
}

function createMenuItem(name, imgSrc, price) {
  this.img = imgSrc;
  this.name = name;
  this.price = `Starts at ₱ ${parseFloat(price).toFixed(2)}`;
}

function addToList(obj) {
  const main = document.getElementById('main-container')

  const divTitle = document.createElement('div')
  const divDesc = document.createElement('div')

  const menuItem = document.createElement('div');
  const name = document.createElement('h4');
  const img  = document.createElement('img');
  const desc = document.createElement('p');

  // set class
  menuItem.classList.add('menu-item')
  divTitle.classList.add('title')
  divDesc.classList.add('description')

  // set elements contents
  name.textContent = obj.name;
  img.src = obj.img;
  desc.textContent = obj.price;

  // Append to div containers
  divTitle.appendChild(name)
  divDesc.appendChild(desc)

  //Append all to one container
  menuItem.appendChild(divTitle)
  menuItem.appendChild(img)
  menuItem.appendChild(divDesc)

  main.appendChild(menuItem)
}