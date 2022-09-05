const menu = document.getElementById("menu-logo");
const links = document.querySelectorAll(".navigation a");

function menuToggle(elem){
    elem.classList.toggle("fa-bars");
    elem.classList.toggle("fa-xmark");
    elem.classList.toggle("active");

    if (elem.classList.contains("active")) {
        gsap.to(".menu",{
            duration: 0.1,
            display: "block",
            ease: "expo.in"
        });
        gsap.to(".navBefore",{
            duration: 0.5,
            delay: 0.1,
            marginLeft: "0",
            ease: "expo.in"
        });
        gsap.to(".nav",{
            duration: 0.5,
            delay: 0.3,
            marginLeft: "0",
            ease: "expo.in"
        });
        gsap.to(".navigation",{
            duration: 0.7,
            delay: 0.7,
            opacity: 1,
            ease: "ease.in"
        });
        document.body.classList.toggle("scroll-lock");
    } else {
        gsap.to(".navigation",{
            duration: 0.5,
            opacity: 0,
            ease: "ease.in"
        });
        gsap.to(".nav",{
            duration: 0.5,
            marginLeft: "100%",
            ease: "expo.in"
        });
        gsap.to(".navBefore",{
            duration: 0.3,
            delay: 0.3,
            marginLeft: "100%",
            ease: "expo.in"
        });
        gsap.to(".menu",{
            duration: 0.1,
            delay: 1.3,
            display: "none",
            ease: "expo.in"
        });
        document.body.classList.toggle("scroll-lock");
    }
}

menu.addEventListener("click", function(e){
    menuToggle(this);
});

links.forEach(link => {
    link.addEventListener("click", function(e){
        menuToggle(menu);
    });
});
