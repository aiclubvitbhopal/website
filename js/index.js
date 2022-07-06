const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu-btn");

const close_menu = ()=>{
    menu.blur();
}
cross.addEventListener('click',close_menu);

let circle = document.getElementById('circle');

const onMouseMove = (e) =>{
    circle.style.position="absolute";
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener(
    'scroll',
    (event) => {
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        circle.style.position="fixed";
        circle.style.top = (document.querySelector('#circle').getBoundingClientRect().top+20) + 'px';
    }, 
    { passive: true }
);