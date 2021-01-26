
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')
    const numScroll = window.scrollY
    if (numScroll >= 100) {
        console.log('Scroll равен 100')
        nav.style.position = 'fixed'
        nav.style.top = '0'
        nav.style.zIndex = '1'
    } else {
        nav.style.position = 'unset'
        nav.style.top = 'unset'
        console.log('Scroll не равен 100')
    }
})
