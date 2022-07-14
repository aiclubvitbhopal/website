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
const textTop = heroText.getBoundingClientRect().top;

document.addEventListener(
    'scroll',
    (event) => {
        if (heroText.getBoundingClientRect().top < textTop) {
            heroText.style.opacity = -window.pageYOffset / 300 + 1;
        }  
    }, 
    { passive: true }
);

var counters = document.querySelectorAll(".counter");
var counter = [];
console.log(counters);

for (i = 0; i < 4; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}

var observer = new IntersectionObserver((entries)=>{
	if(entries[0].isIntersecting === true){
        console.log("visible");
        var count = (start, value, id)=> {
            var localStart = start;
            setInterval(function() {
              if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
              }
            }, 1);
        }
        
        for (j = 0; j < 4; j++) {
            count(0, counter[j], j);
        }
    }
}, { threshold: [1] });

observer.observe(counters[0]);