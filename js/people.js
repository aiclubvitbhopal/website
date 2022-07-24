var m = window.matchMedia("(max-width: 540px)")
var t = window.matchMedia("(max-width: 912px)")

const web_d = document.querySelectorAll(".web-d")
const web_m = document.querySelectorAll(".web-m")
const web_t = document.querySelectorAll(".web-t")
const web_btn = document.querySelector(".blog-box.web");

const tech_d = document.querySelectorAll(".tech-d")
const tech_m = document.querySelectorAll(".tech-m")
const tech_t = document.querySelectorAll(".tech-t")
const tech_btn = document.querySelector(".blog-box.tech");

const event_d = document.querySelectorAll(".event-d")
const event_m = document.querySelectorAll(".event-m")
const event_t = document.querySelectorAll(".event-t")
const event_btn = document.querySelector(".blog-box.event");

const design_d = document.querySelectorAll(".design-d")
const design_m = document.querySelectorAll(".design-m")
const design_t = document.querySelectorAll(".design-t")
const design_btn = document.querySelector(".blog-box.design");

const members = [".web-d",".web-m",".web-t",".tech-d",".tech-m",".tech-t",".event-d",".event-m",".event-t",".design-d",".design-m",".design-t"];

const close_all = (ele)=>{
    members.forEach(element =>{
        if(element!==ele){
            console.log(element);
            document.querySelectorAll(element).forEach(e =>{e.style.display="none";})
        }
    });
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
});

tech_btn.addEventListener("click",(e)=>{
    if(m.matches){
        tech_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".tech-m");
    }else if(t.matches){
        tech_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".tech-t");
    }else{
        tech_d.forEach(element => {
            element.style.display="flex";
        });        
        close_all(".tech-d");
    }
});

event_btn.addEventListener("click",(e)=>{
    if(m.matches){
        event_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".event-m");
    }else if(t.matches){
        event_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".event-t");
    }else{
        event_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".event-d");
    }
});

design_btn.addEventListener("click",(e)=>{
    if(m.matches){
        design_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".design-m");
    }else if(t.matches){
        design_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".design-t");
    }else{
        design_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".design-d");
    }
});