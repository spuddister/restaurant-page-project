import Help from './img/help-wanted.jpg'

export default function contact() {
  const element = document.createElement('div');
  const title = document.createElement('h1');
  const img = new Image();
  const text1 = document.createElement('p');
  const email1 = document.createElement('p');
  const email2 = document.createElement('p');
  const phone1 = document.createElement('p');
  const phone2 = document.createElement('p');
  const address1 = document.createElement('p');
  const address2 = document.createElement('p');

  element.id = 'content';
  title.innerText = 'Contact Us';
  img.src = Help;
  text1.innerText ='Looking for a job in the service industry? Send your CV to the email above!'
  email1.innerText = 'Email:'
  email2.innerText = 'taco@buenonacho.com'
  phone1.innerText = 'Phone:'
  phone2.innerText = '555-555-5555'
  address1.innerText = 'Address:'
  address2.innerText = '123 Queen St. Kingsville, Monarchland'

  element.appendChild(title);
  element.appendChild(email1);
  element.appendChild(email2); 
  element.appendChild(phone1);
  element.appendChild(phone2);
  element.appendChild(address1);
  element.appendChild(address2);
  element.appendChild(img);
  element.appendChild(text1);
  
  return element;
  }
