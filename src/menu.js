import BurritoPic from './img/burrito.jpg';
import NachosPic from './img/nachos.jpg';
import QuesadillaPic from './img/quesadilla.jpg';
import TacoPic from './img/taco.jpg';
import SodaPic from './img/soda.jpg';

const menuOptions = [
  {
    item: 'Burrito',
    photo: BurritoPic,
    description: 'A soft flour tortilla rolled up with with beans, cheese, veggies, and guacamole.',
    price: '$6.99'
  },
  {
    item: 'Taco',
    photo: TacoPic,
    description: 'A crunchy corn taco shell or soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce and real cheddar cheese.',
    price: '$2.99'
  },
  {
    item: 'Nachos',
    photo: NachosPic,
    description: "Seasoned ground beef, beans, nacho cheese sauce, a three-cheese blend, diced tomatoes, sour cream and guac atop a big plate of crunchy nacho chips.",
    price: '$8.99'
  },
  {
    item: 'Quesadilla',
    photo: QuesadillaPic,
    description: 'A crunchy corn taco shell or soft flour tortilla filled with seasoned ground beef, crisp shredded lettuce and real cheddar cheese.',
    price: '$4.99'
  },
  {
    item: 'Soda',
    photo: SodaPic,
    description: 'Your choice of soda from our ultimate carbonating soda machine.',
    price: '$1.99'
  },
]

export default function menu() {
  const element = document.createElement('div');
  const title = document.createElement('h1');
  const menuDiv = menuElement();

  element.id = 'content';
  title.innerText = 'Menu';
  
  element.appendChild(title);
  element.appendChild(menuDiv);

  return element;
}

function menuElement() {
  const element = document.createElement('div');
  
  menuOptions.forEach(option => {
      
    const card = document.createElement('div');
    const cardContent = document.createElement('div');
    const itemName = document.createElement('p');
    const itemPhoto = new Image();
    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    card.classList.add('menu-item');
    cardContent.classList.add('menu-item-text')
    itemName.innerText = option.item;
    itemName.classList.add('bold');
    itemPhoto.src = option.photo;
    itemPhoto.alt = option.item;
    itemDescription.innerText = option.description;
    itemPrice.innerText = option.price;

    card.appendChild(itemPhoto);
    cardContent.appendChild(itemName);
    cardContent.appendChild(itemDescription);
    cardContent.appendChild(itemPrice);
    card.appendChild(cardContent);

    element.appendChild(card);
  });

  return element;
}