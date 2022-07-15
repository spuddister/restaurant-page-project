import home from './home';
import menu from './menu';
import about from './about';
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
    if (page === 'home'){
        console.log('home')
        content.appendChild(home());
    } else if (page === 'menu') {
        console.log('menu')
        content.appendChild(menu());
    } else {
        console.log('about')
        content.appendChild(about());
    }
}
  
content.appendChild(home());