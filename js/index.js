const cross = document.querySelector(".cross");
const menu = document.querySelector(".menu-btn");

const close_menu = ()=>{
    menu.blur();
}
cross.addEventListener('click',close_menu);

let circle = document.getElementById('circle');
const onMouseMove = (e) =>{
  circle.style.left = e.pageX + 'px';
  circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);