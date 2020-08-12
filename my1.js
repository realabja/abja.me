const visit = localStorage.getItem("visit");
const light = localStorage.getItem("light");
const tg = document.querySelector(".tg");
const b = document.body;
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuli = document.querySelectorAll('.menu li');
const contact = document.querySelector("#li4");
const popingItem = document.querySelectorAll(".x");


if (light){
    if (light!=null) {
        console.log(light);
        console.log(b.className);



        b.className=light;
    }
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