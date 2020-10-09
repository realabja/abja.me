const visit = localStorage.getItem("visit");
const light = localStorage.getItem("light");
const tg = document.querySelector(".tg");
const b = document.body;
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuli = document.querySelectorAll('.menu li');
const contact = document.querySelector("#li4");
const popingItem = document.querySelectorAll(".x");

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


contact.addEventListener('click', ()=>{
    popingItem.forEach((item,index)=>{
        
        item.style.animation=`pop 0.3s ease 2 ${index/4+0.3}s alternate `
    })
});

const terminate = ()=>{ popingItem.forEach((item)=>{
    item.style.animation="none"})};

contact.addEventListener("click", ()=>{
    setTimeout(terminate, 1700);
});

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
                link.style.animation= `menuAnimation 0.5s ease forwards ${index/5 + 0.5}s`;
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
    window.open('https://www.linkedin.com/in/abbas-jafari-028a601b4/', '_blank');
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





function copyText(text) {
    navigator.clipboard.writeText(text);
 }

//  adding moving welcome text
//  adding moving welcome text

const sleep = function (time){
    return new Promise(resolve => setTimeout(resolve, time));
}

// window.addEventListener("mousemove", e => {console.log(e)})


const home = document.querySelector("#home")
const ln = document.querySelector("#ln");
const ln1 = document.querySelector("#ln1");
const ln2 = document.querySelector("#ln2");
const ln3 = document.querySelector("#ln3");
const ln4 = document.querySelector("#ln4");
const ln5 = document.querySelector("#ln5");
const ln6 = document.querySelector("#ln6");

const repulse = (elems, parent)=>{
    let x = [];
    let y = [];
    for (el in elems){
        x.push(Number(elems[el].offsetLeft) + Number(elems[el].offsetWidth/2));
        y.push(Number(elems[el].offsetTop) + Number(elems[el].offsetHeight/2));
    }
    let disX ;
    let disY ;
    let dist ;
    let force ;
    let dierectionX ;
    let dierectionY ;
    parent.addEventListener("mousemove", (e) => {
        posX = Number(e.layerX);
        posY = Number(e.layerY);
   
        for (let i = 0; i < elems.length; i++ ){
            disX = posX - x[i];            
            disY = posY - y[i];
            dist = Number(Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2)));
            force = 1/ (dist/200)**4;
            if (force >100 ){
                force = 100;
            }
            dierectionX = -disX/dist;
            dierectionY = -disY/dist;
            elems[i].style.transform = `translate(${dierectionY*force}px, ${dierectionX*force}px)`;
        }
    })
}

repulse([ln2, ln3, ln4, ln5, ln6, ln1, ln], home);

