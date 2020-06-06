const visit = localStorage.getItem("visit");
const light = localStorage.getItem("light");
const tg = document.querySelector(".tg");
const b = document.body;
if (visit){
    let c  = document.querySelector(".onload");
    c.style.display="none";
}
if (light){
    let b = document.body;
    b.className=light;
}
if(b.className=="dark"){
    tg.classList.add("tgl");
}

console.log(b.className);
const menuOpen = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuli = document.querySelectorAll('.menu li');
    burger.addEventListener('click',()=>{
        menu.classList.toggle('menu-open');
        menuli.forEach( (link,index) => {
            if (link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation= `menuAnimation 0.5s ease forwards ${index/4 + 0.5}s`;
                
                } } ) ;
        
        burger.classList.toggle('toggle');
    });
}
menuOpen();

const lightSwitch = ()=>{
    const ls = document.querySelector(".lightSwitch");
    const b = document.body;
    ls.addEventListener('click',()=>{
        tg.classList.toggle("tgl");
      if ( b.className == "light" ){
          b.className = "dark";
          
          localStorage.setItem("light","dark");
      }
      else{
          b.className="light";
          localStorage.setItem("light","light");
      }})
     
};
lightSwitch();




var i = 0;
var txt = `!!! this web site is under maintenane sorry for any inconvenience!!!                        please click(touch) anywhere to continue....  `  ;
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
        localStorage.setItem("visit","True");
        
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
 sm3.addEventListener("click",()=>{
    window.open('mailto:realabja@gmail.com', '_blank');
 });

const ln = document.querySelector(".ln");
const ln1 = document.querySelector(".ln1");

window.addEventListener('load', () => {
    ln.classList.add("ln11");
    ln1.classList.add("ln22")
});
