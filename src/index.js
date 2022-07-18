import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

let page = '1';
const content = document.getElementById('content-wrapper');
const nav = [...document.getElementsByClassName('nav-list-item')];
nav.forEach(menuItem => {
    menuItem.addEventListener('click', (e)=>{
        navItemClassChange(e.target);
        page = e.target.getAttribute('index');
        clearPageContent();
        render(page);
    })
});

function navItemClassChange (target) {
    nav.forEach(navItem => {
        navItem.classList.remove('selected');
    });
    target.classList.add('selected');
}

function clearPageContent(){
    content.innerHTML = '';
}

function render(page) {
    if (page === '1'){
        console.log('home')
        content.appendChild(home());
    } else if (page === '2') {
        console.log('menu')
        content.appendChild(menu());
    } else {
        console.log('about')
        content.appendChild(contact());
    }
}
  
content.appendChild(home());