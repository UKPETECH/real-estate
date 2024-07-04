let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');
}

document.querySelectorAll('.view_property .details .thumb .small-image img').
forEach(img =>{
    img.onclick = () => {
        src = img.getAttribute('src')
        document.querySelector('.view_property .details .thumb .big-image img').
        src = src;
    }
})

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
    headings.onclick = () => {
        headings.parentElement.classList.toggle('active');
    }
})

document.querySelector('#filter-btn').onclick = () => {
    document.querySelector('.filters').classList.add('active');
}
document.querySelector('#close-filter').onclick = () => {
    document.querySelector('.filters').classList.remove('active');
}
