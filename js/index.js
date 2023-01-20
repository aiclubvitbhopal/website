// const cross = document.querySelector(".cross");
// const menu = document.querySelector(".menu-btn");

// const close_menu = ()=>{
//     menu.blur();
// }
// cross.addEventListener('click',close_menu);

// let circle = document.getElementById('circle');

// const onMouseMove = (e) =>{
//     circle.style.position="absolute";
//     circle.style.left = e.pageX + 'px';
//     circle.style.top = e.pageY + 'px';
// }

// document.addEventListener('mousemove', onMouseMove);
// document.addEventListener(
//     'scroll',
//     (event) => {
//         var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//         circle.style.position="fixed";
//         circle.style.top = (document.querySelector('#circle').getBoundingClientRect().top+20) + 'px';
//     }, 
//     { passive: true }
// );

// var inner = document.querySelector(".interactive img");
// var outer = document.querySelector(".interactive");
// var x = outer.getBoundingClientRect().left;                    
// var y = outer.getBoundingClientRect().top;

// const move = (e)=>{
//     if(Math.pow((Math.pow((e.pageX-x-outer.clientWidth/2),2)+Math.pow((e.pageY-y-outer.clientHeight/2),2)),0.5)<=100){
//         onouter(e);
//     }
//     else{
//         offouter(e);
//     }
// };

// const offouter = (event)=> {
//     inner.style.left="-70px";
//     inner.style.top="0px";
//     inner.style.position="relative";
//     x_ = x+outer.clientWidth / 2;
//     y_ = y+outer.clientHeight / 2;
//     let radian = Math.atan2(event.pageX - x_, event.pageY - y_);
//     let rot = radian * (180 / Math.PI) * -1 + 270;
//     console.log(rot);
//     outer.style.transform = "rotate(" + rot + "deg)";
//     inner.style.transform = "rotate(-" + rot + "deg)";
// }

// const onouter=(e)=>{
//     inner.style.position="absolute";
//     outer.style.transform = "rotate(" + 0 + "deg)";
//     inner.style.transform = "rotate(" + 0 + "deg)";
//     inner.style.left = (e.pageX-x-inner.clientWidth/2) + 'px';
//     inner.style.top = (e.pageY-y-inner.clientHeight/2) + 'px'; 
// }

// document.querySelector(".hero-section").addEventListener("mousemove", move);

// const registerButton = document.querySelector(".jumbotron");
// console.log(registerButton);

// const redirectFunc = ()=>{
//     window.location.href = "https://aivit.tech/";
// }

// registerButton.addEventListener('click',redirectFunc);