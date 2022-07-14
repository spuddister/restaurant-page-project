import home from './home';
import './style.css';

let page = 'home';
const content = document.getElementById('content');
const nav = [...document.getElementsByClassName('nav-list-item')];
nav.forEach(menuItem => {
    menuItem.addEventListener('click', (e)=>{
        page = e.target.innerText.toLowerCase();
        clearPage();
        render(page);
    })
});

function clearPage(){
    content.innerHTML = '';
}

function render(page) {
    //reder specific page
}
  
content.appendChild(home());