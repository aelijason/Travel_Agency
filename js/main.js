// Designed & Developed by:  Farhad Ahmed || Codeaims 

const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');

toggle.onclick = () => {
    menu.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    toggle.name = isOpen ? 'close-outline' : 'menu-outline' ;
}
