menu = document.getElementById("menu-logo");

menu.addEventListener("click", function(e){
    this.classList.toggle("fa-bars");
    this.classList.toggle("fa-xmark");
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
        gsap.to(".menu",{
            duration: 0.1,
            display: "block",
            ease: "expo.in"
        });
        gsap.to(".navBefore",{
            duration: 0.7,
            delay: 0.3,
            marginLeft: "0",
            ease: "expo.in"
        });
        gsap.to(".nav",{
            duration: 0.7,
            delay: 0.5,
            marginLeft: "0",
            ease: "expo.in"
        });
        gsap.to(".navigation",{
            duration: 0.7,
            delay: 1.3,
            opacity: 1,
            ease: "ease.in"
        });
    } else {
        gsap.to(".navigation",{
            duration: 0.5,
            opacity: 0,
            ease: "ease.in"
        });
        gsap.to(".nav",{
            duration: 0.7,
            marginLeft: "100%",
            ease: "expo.in"
        });
        gsap.to(".navBefore",{
            duration: 0.5,
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
    }
});