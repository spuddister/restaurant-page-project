import Icon from './img/bueno.png'

export default function home() {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const img = new Image();
    const description = document.createElement('p');


    title.innerText = 'Bueno Nacho';
    img.src = Icon;
    img.alt = 'Bueno Nacho Restaurant';
    description.innerText = 'Store #582 serves as a popular hangout spot for Middleton High School students, especially Kim Possible and Ron Stoppable. It features a standard store design, including the signature Sombrero-shaped roof, and is both managed and staffed most frequently by Ned.'
    moto.innerText ='So warm, so comfortable... so Bueno.'

    element.appendChild(title);
    element.appendChild(img);
    element.appendChild(description);


    console.log('menu')

    return element;
  }
