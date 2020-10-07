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

const home = document.querySelector("#home")
const ln = document.querySelector("#ln");
const ln1 = document.querySelector("#ln1");
const ln2 = document.querySelector("#ln2");
const ln3 = document.querySelector("#ln3");
const ln4 = document.querySelector("#ln4");
const ln5 = document.querySelector("#ln5");
const ln6 = document.querySelector("#ln6");

const repulse = (elems, parent, random)=>{
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
    let intervalIDs = [] ;
    if (random === "random"){
        let isBeginning = true;
        let spread = 90;
        if(isBeginning){
            for (let i = 0; i < elems.length; i++ ){
                dierectionY = Math.random()-0.5;
                dierectionX = Math.random()-0.5;
                elems[i].style.transition = "all 3S ease-in-out 0.1s";
                elems[i].style.transform = `translate(${dierectionX*spread}px, ${dierectionY*spread}px)`;  
                elems[i].addEventListener("contextmenu", e =>{
                    e.preventDefault();
                  }, false);  
            }
        }
        for (let i = 0; i < elems.length; i++ ){
            intervalID = setInterval(() => {
                dierectionY = Math.random()-0.5;
                dierectionX = Math.random()-0.5;
                elems[i].style.transition = "all 1S ease-in-out 0.1s";
                elems[i].style.transform = `translate(${dierectionX*spread}px, ${dierectionY*spread}px)`;
            }, (Math.random()*500) + 500);
            intervalIDs.push(intervalID)

        }
    }
    

    parent.addEventListener("mousemove", (e) => {
        // for (el in elems){
        //     x.push(Number(elems[el].offsetLeft) + Number(elems[el].offsetWidth/2));
        //     y.push(Number(elems[el].offsetTop) + Number(elems[el].offsetHeight/2));
        // }
        posX = Number(e.layerX);
        posY = Number(e.layerY);
   
        for (let i = 0; i < elems.length; i++ ){
            disX = posX - x[i];            
            disY = posY - y[i];
            dist = Number(Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2)));
            force = 1/ (dist/200)**4;
            if(force >50){
                console.log(intervalIDs);
                for(let i in intervalIDs){
                    clearInterval(intervalIDs[i]);
                    elems[i].style.transition

                }
            }
            if (force >150 ){
                force = 150;
            }
            dierectionX = -disX/dist;
            dierectionY = -disY/dist;
            elems[i].style.transition = "all 0.2s ease"
            elems[i].style.transform = `translate(${dierectionX*force}px, ${dierectionY*force}px)`;
        }
    })
}
repulse([ln2, ln3, ln4, ln5, ln6, ln1, ln], home, "random");


// end of moving stufff
// end of moving stufff
// end of moving stufff

// lazyloading stuff
// lazyloading stuff
// lazyloading stuff
// actually just working with intersection observer!!!!


const lazyStuff = document.querySelectorAll(".myProjects>section>article");
const observer = new IntersectionObserver((objects, observer)=>{
    objects.forEach(object =>{
        if(object.isIntersecting){
            object.target.classList.add("observed");
            let img;
            for (item in object.target.childNodes) {
                if (object.target.childNodes[item].className == "imgContainer") {
                    img = object.target.childNodes[item];
                    for (item in img.childNodes){
                       if(img.childNodes[item].tagName == "IMG"){
                            img = img.childNodes[item]
                            break;
                       } 
                    }
                src = img.dataset.lazy;
                console.log(src);
                img.setAttribute("src", src);
                console.log(img);
                }
            }
            observer.unobserve(object.target);
        }
    })
});


lazyStuff.forEach(object =>{
    console.log("inforeach")
    observer.observe(object);
})

// loading stuff after page load
// loading stuff after page load
// loading stuff after page load

