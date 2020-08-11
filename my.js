const visit = localStorage.getItem("visit");
const light = localStorage.getItem("light");
const tg = document.querySelector(".tg");
const b = document.body;
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuli = document.querySelectorAll('.menu li');
if (visit){
    let c  = document.querySelector(".onload");
    c.style.display="none";
}
if (light){
    b.className=light;
}
if(b.className=="dark"){
    tg.classList.add("tgl");
}

const menuclose = ()=>{
    menu.classList.remove('menu-open');
    burger.classList.remove('toggle');
    menuli.forEach( (link,index) => {
        if (link.style.animation){
            link.style.animation ='';
        }})};

const menuOpen = () => {
        menu.classList.toggle('menu-open');
        menuli.forEach( (link,index) => {
            if (link.style.animation){
                link.style.animation ='';
            }
            else{
                link.style.animation= `menuAnimation 0.5s ease forwards ${index/4 + 0.5}s`;
                } } ) ;
        burger.classList.toggle('toggle');
    }


const lightSwitch = ()=>{
        tg.classList.toggle("tgl");
      if ( b.className == "light" ){
          b.className = "dark";
          
          localStorage.setItem("light","dark");
      }
      else{
          b.className="light";
          localStorage.setItem("light","light");



          
      }}





var i = 0;
var txt = "This website is by no mean a complete representation of me, sorry for any inconvinence and if you have any opinion on how I can improve it please let me know 😄 ✌️ have a nice time. ***Click anywhere to continue*** "  ;
var speed = 50;

const typeWriter = ()=> {
  if (i < txt.length) {
    document.getElementById("onload").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();


const fade = ()=>{
    const on = document.querySelector(".onload");

    on.addEventListener('click',()=>{
        on.style.opacity='0';
        on.style.display="none";
        localStorage.setItem("visit","true");
    });      
};
fade();
 const sm = document.querySelector(".sm");
 const sm1 = document.querySelector(".sm1");
 const sm2 = document.querySelector(".sm2");
 const sm3 = document.querySelector(".sm3");
 sm.addEventListener("click",()=>{
    window.open('https://github.com/realabja', '_blank');
 });
 sm1.addEventListener("click",()=>{
    window.open('https://twitter.com/realabja', '_blank');
 });
 sm2.addEventListener("click",()=>{
    window.open('#', '_blank');
 });
 sm3.addEventListener("click", ()=>{
    const email="realabja@gmail.com";
    console.log(email);
    copyText(email);
    const tt=document.querySelector(".tooltiptext");
    tt.innerHTML = "copied";
 });
 sm3.addEventListener("mouseout",()=>{
    const tt=document.querySelector(".tooltiptext");
    tt.style.width="120px";
    tt.style.left="-150%";
    tt.innerHTML = "copy";
 })    





const ln = document.querySelector(".ln");
const ln1 = document.querySelector(".ln1");

window.addEventListener('load', () => {
    ln.classList.add("ln11");
    ln1.classList.add("ln22");
});

function copyText(text) {
    navigator.clipboard.writeText(text);
 }