import Icon from './img/bueno.png'

export default function home() {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const img = new Image();

    title.innerText = 'Bueno Nacho';
    img.src = Icon;
    img.alt = 'Bueno Nacho Restaurant';
    
    element.appendChild(title);
    element.appendChild(img);

    return element;
  }
