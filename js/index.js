const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu-btn");

const close_menu = ()=>{
    menu.blur();
}
cross.addEventListener('click',close_menu);

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}