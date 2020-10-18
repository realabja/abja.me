const sleep = function (time){
    return new Promise(resolve => setTimeout(resolve, time));
}
window.onload = ()=>{
    
}

const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove" , e =>{
    cursor.style.top = `${(e.pageY-10)}px` 
    cursor.style.left = `${e.pageX-10}px`
});
document.addEventListener("click", e =>{
    cursor.style.animation = " click 0.7s ease 2 alternate";
    setTimeout(()=>{
        cursor.style.animation = "";
    },1400)
})

// gasp stuff
// gasp stuff
// gasp stuff
const riseLay = (percentage)=>{
    
    gsap.to("#middleSection>img", {
        duration: 0.3,
        ease: Power1.easeInOut,
        clipPath: "circle("+percentage+"%)"
    });
}
if (document.querySelector("#topOfTPage")){
    document.addEventListener("scroll", e => {
    
        let y = 100 - ((((window.innerHeight - document.querySelector("#topOfTPage").getBoundingClientRect().top)/window.innerHeight)-1)*400);
        riseLay(y); 
    })

}

const type = async ()=>{
    const typed = document.querySelector("#typed")
    if(typed){
    let fav = [" a web development", " a Machine Learning", " a computer science "," a Data Science", "an AI"]
    while(true){
        for(let i = 0; i<fav.length; i++){
            
            for (let j = 0; j < fav[i].length; j++){
                typed.append(fav[i].charAt(j));
                await sleep(100);
            }
            await sleep(2000)
            typed.innerHTML = "";   
        }
    } 
}
else{
    return true
}
}
type();





// if(document.querySelectorAll("#myProjects>article")){
//     const lazyStuff = document.querySelectorAll("#myProjects>article");
//     const observer = new IntersectionObserver((objects, observer)=>{
//         objects.forEach(object =>{
//             if(object.isIntersecting){
//                 object.target.classList.add("observed");
//                 let img;
//                 for (item in object.target.childNodes) {
//                     if(object.target.childNodes[item].nodeName != "#text"){
//                         console.log(object.target.childNodes[item].classList)
//                         if (object.target.childNodes[item].classList.contains("imgContainer")) {
//                             console.log("some")
//                             img = object.target.childNodes[item];
//                             console.log(img)
//                             for (item in img.childNodes){
//                                if(img.childNodes[item].tagName == "IMG"){
//                                     img = img.childNodes[item]
//                                     src = img.dataset.lazy;
//                                     console.log(src);
//                                     img.setAttribute("src", src);
//                                     console.log(img);
                                    
//                                } 
//                             }
//                     }
//                     // console.log(object.target.childNodes[item])
//                     }
//                 }
//                 observer.unobserve(object.target);
//             }
//         })
//     });

    try {
        lazyStuff.forEach(object =>{
            console.log("inforeach")
            observer.observe(object);
        })
        
    } catch (error) {
        console.log(error)
    }

// BARBA things
// BARBA things
// BARBA things
barba.init({
    // sync: true,
    debug:true,
    // sync:true,
    transitions: [{
      name: 'default-transition',
      async leave(data) {
        // gsap.from(data.current.container, {
        //     opacity: 0,
        //     duration:1,
        //     ease: Power1.easeOut
        // });
        const done = this.async();
        //   type();
           gsap.to("#tran li", {
              duration:0.5,
              scaleY: 1,
              transformOrigin:"bottom left",
              stagger: 0.2
              
            });
            gsap.to("#tran li", {
              duration:0.5,
              delay:1,
              scaleY: 0,
              ease: Power2.easeOut,
              transformOrigin:"bottom left",
              stagger: 0.1,
            })
        await sleep(1000);
        done();
            
      },
       async enter(data) {
          
            // type();
            // gsap.from(data.next.container, {
            //     opacity: 0,
            //     duration:1,
            //     ease: Power1.easeOut
            // });
        },
        after(data){
            type();
        }
    }]
});

