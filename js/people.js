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

const cont_d = document.querySelectorAll(".cont-d")
const cont_m = document.querySelectorAll(".cont-m")
const cont_t = document.querySelectorAll(".cont-t")
const cont_btn = document.querySelector(".blog-box.cont");

const social_d = document.querySelectorAll(".social-d")
const social_m = document.querySelectorAll(".social-m")
const social_t = document.querySelectorAll(".social-t")
const social_btn = document.querySelector(".blog-box.social");

const out_d = document.querySelectorAll(".out-d")
const out_m = document.querySelectorAll(".out-m")
const out_t = document.querySelectorAll(".out-t")
const out_btn = document.querySelector(".blog-box.out");

const video_d = document.querySelectorAll(".video-d")
const video_m = document.querySelectorAll(".video-m")
const video_t = document.querySelectorAll(".video-t")
const video_btn = document.querySelector(".blog-box.video");

const editorial_d = document.querySelectorAll(".edt-d")
const editorial_m = document.querySelectorAll(".edt-m")
const editorial_t = document.querySelectorAll(".edt-t")
const editorial_btn = document.querySelector(".blog-box.edt");

const members = [".web-d",".web-m",".web-t",".tech-d",".tech-m",".tech-t",".event-d",".event-m",".event-t",".design-d",".design-m",".design-t",".cont-d",".cont-m",".cont-t",".social-d",".social-m",".social-t",".out-d",".out-m",".out-t",".video-d",".video-m",".video-t",".edt-d",".edt-m",".edt-t"];

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

cont_btn.addEventListener("click",(e)=>{
    if(m.matches){
        cont_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".cont-m");
    }else if(t.matches){
        cont_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".cont-t");
    }else{
        cont_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".cont-d");
    }
});

social_btn.addEventListener("click",(e)=>{
    if(m.matches){
        social_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".social-m");
    }else if(t.matches){
        social_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".social-t");
    }else{
        social_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".social-d");
    }
});

out_btn.addEventListener("click",(e)=>{
    if(m.matches){
        out_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".out-m");
    }else if(t.matches){
        out_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".out-t");
    }else{
        out_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".out-d");
    }
});

video_btn.addEventListener("click",(e)=>{
    if(m.matches){
        video_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".video-m");
    }else if(t.matches){
        video_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".video-t");
    }else{
        video_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".video-d");
    }
});

editorial_btn.addEventListener("click",(e)=>{
    if(m.matches){
        editorial_m.forEach(element => {
            element.style.display="flex";
        });
        close_all(".edt-m");
    }else if(t.matches){
        editorial_t.forEach(element => {
            element.style.display="flex";
        });
        close_all(".edt-t");
    }else{
        editorial_d.forEach(element => {
            element.style.display="flex";
        });     
        close_all(".edt-d");
    }
});