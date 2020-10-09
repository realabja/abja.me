const sleep = function (time){
    return new Promise(resolve => setTimeout(resolve, time));
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

document.addEventListener("scroll", e => {

    let y = 100 - ((((window.innerHeight - document.querySelector("#topOfTPage").getBoundingClientRect().top)/window.innerHeight)-1)*400);
    riseLay(y);
})
const typed = document.querySelector("#typed")
const type = async ()=>{
    let fav = [ "a Machine Learning", "a Data Science", "an AI"]
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

type();



const lazyStuff = document.querySelectorAll("#myProjects>article");
const observer = new IntersectionObserver((objects, observer)=>{
    objects.forEach(object =>{
        if(object.isIntersecting){
            object.target.classList.add("observed");
            let img;
            for (item in object.target.childNodes) {
                console.log(object.target.childNodes[item])
                if (object.target.childNodes[item].classList.contains("imgContainer")) {
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