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

const heroText = document.querySelector(".text");
console.log(heroText);
const textTop = heroText.getBoundingClientRect().top;
console.log(textTop,"px");

document.addEventListener(
    'scroll',
    (event) => {
        if (heroText.getBoundingClientRect().top < textTop) {
            console.log("here");
            heroText.style.opacity = -window.pageYOffset / 300 + 1;
        }  
        console.log(heroText.getBoundingClientRect().top);      
    }, 
    { passive: true }
);
