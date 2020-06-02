const menuOpen = () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const menuli = document.querySelectorAll('.menu li');
    burger.addEventListener('click',()=>{
        menu.classList.toggle('menu-open')
        menuli.forEach( (link,index) => {
            if (link.style.animation){
                link.style.animation =''
            }
            else{
                link.style.animation= `menuAnimation 0.5s ease forwards ${index/4 + 0.5}s`;
                
                } } ) ;
        
        burger.classList.toggle('toggle') 
    });
}
menuOpen();

function lightSwitch(){
    const ls = document.querySelector(".lightSwitch");
    const b = document.body;
    const tg = document.querySelector(".tg");
    ls.addEventListener('click',()=>{
        tg.classList.toggle("tgl")
      if ( b.className == "light" ){
          b.className = "dark";
      }
      else{
          b.className="light";
      }})
     
};
lightSwitch();




var i = 0;
var txt = `!!! this web site is under maintenane sorry for any inconvenience!!!                        please click(touch) anywhere to continue....  `  ;
var speed = 50;

function typeWriter() {
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
        
    });
        
};
fade();