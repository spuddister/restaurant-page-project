import Help from './img/help-wanted.jpg'

export default function contact() {
  const element = document.createElement('div');
  const title = document.createElement('h1');
  const img = new Image();
  const text1 = document.createElement('p');
  const text2 = document.createElement('div');
  const email = document.createElement('p');
  const phone = document.createElement('p');
  const address = document.createElement('p');
  
  element.id = 'content';
  text2.classList.add('contact-info');
  title.innerText = 'Contact Us';
  img.src = Help;
  text1.innerText ='Looking for a job in the service industry? Send your CV to the email above!'
  email.innerText = 'Email: taco@buenonacho.com'
  phone.innerText = 'Phone: 555-555-5555'
  address.innerText = 'Address: 123 Queen St. Kingsville, Monarchland'

  element.appendChild(title);
  text2.appendChild(email);
  text2.appendChild(phone);
  text2.appendChild(address);
  element.appendChild(text2);
  element.appendChild(img);
  element.appendChild(text1);
  
  return element;
  }
