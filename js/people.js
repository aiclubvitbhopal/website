var m = window.matchMedia("(max-width: 540px)")
var t = window.matchMedia("(max-width: 912px)")

const web_d = document.querySelectorAll(".web-d")
const web_m = document.querySelectorAll(".web-m")
const web_t = document.querySelectorAll(".web-t")
const web_btn = document.querySelector(".blog-box.web");

const tech_d = document.querySelectorAll(".tech-d")
const tech_m = document.querySelectorAll("tech-m")
const tech_t = document.querySelectorAll(".tech-t")
const tech_btn = document.querySelector(".blog-box.tech");

// console.log(web_btn);
// console.log(web_d)

const members = [".web-d",".web-m",".web-t"]
const close_all = (ele)=>{
    members.forEach(element =>{
        if(element!==ele){
            console.log(element);
            document.querySelectorAll(element).forEach(e =>{e.style.display="none";})
        }
    });
    console.log("here");
};

web_btn.addEventListener("click",(e)=>{
    if(m.matches){
        web_m.forEach(element => {
            element.style.display="flex";            
        });
        close_all(".web-m");
    }else if(t.matches){
        web_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".web-t");
    }else{
        web_d.forEach(element => {
            element.style.display="flex";
        });        
        close_all(".web-d");
    }
    console.log("hi");
});

tech_btn.addEventListener("click",(e)=>{
    if(m.matches){
        tech_m.forEach(element => {
            element.style.display="flex";
            close_all(".tech-m");
        });
    }else if(t.matches){
        tech_t.forEach(element => {
            element.style.display="flex";
            close_all(".tech-t");
        });
    }else{
        tech_d.forEach(element => {
            element.style.display="flex";
            close_all(".tech-d");
        });        
    }
    console.log("hi");
});