"use strict";

var sleep = function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
};

var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e) {
  cursor.style.top = "".concat(e.pageY - 10, "px");
  cursor.style.left = "".concat(e.pageX - 10, "px");
});
document.addEventListener("click", function (e) {
  cursor.style.animation = " click 0.7s ease 2 alternate";
  setTimeout(function () {
    cursor.style.animation = "";
  }, 1400);
}); // gasp stuff
// gasp stuff
// gasp stuff

var riseLay = function riseLay(percentage) {
  gsap.to("#middleSection>img", {
    duration: 0.3,
    ease: Power1.easeInOut,
    clipPath: "circle(" + percentage + "%)"
  });
};

if (document.querySelector("#topOfTPage")) {
  document.addEventListener("scroll", function (e) {
    var y = 100 - ((window.innerHeight - document.querySelector("#topOfTPage").getBoundingClientRect().top) / window.innerHeight - 1) * 400;
    riseLay(y);
  });
}

var type = function type() {
  var typed, fav, i, j;
  return regeneratorRuntime.async(function type$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          typed = document.querySelector("#typed");

          if (!typed) {
            _context.next = 24;
            break;
          }

          fav = ["a Machine Learning", "a Data Science", "an AI"];

        case 3:
          if (!true) {
            _context.next = 22;
            break;
          }

          i = 0;

        case 5:
          if (!(i < fav.length)) {
            _context.next = 20;
            break;
          }

          j = 0;

        case 7:
          if (!(j < fav[i].length)) {
            _context.next = 14;
            break;
          }

          typed.append(fav[i].charAt(j));
          _context.next = 11;
          return regeneratorRuntime.awrap(sleep(100));

        case 11:
          j++;
          _context.next = 7;
          break;

        case 14:
          _context.next = 16;
          return regeneratorRuntime.awrap(sleep(2000));

        case 16:
          typed.innerHTML = "";

        case 17:
          i++;
          _context.next = 5;
          break;

        case 20:
          _context.next = 3;
          break;

        case 22:
          _context.next = 25;
          break;

        case 24:
          return _context.abrupt("return", true);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  });
};

type(); // if(document.querySelectorAll("#myProjects>article")){
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
  lazyStuff.forEach(function (object) {
    console.log("inforeach");
    observer.observe(object);
  });
} catch (error) {
  console.log(error);
} // BARBA things
// BARBA things
// BARBA things


barba.init({
  // sync: true,
  debug: true,
  // sync:true,
  transitions: [{
    name: 'default-transition',
    leave: function leave(data) {
      var done;
      return regeneratorRuntime.async(function leave$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // gsap.from(data.current.container, {
              //     opacity: 0,
              //     duration:1,
              //     ease: Power1.easeOut
              // });
              done = this.async(); //   type();

              gsap.to("#tran li", {
                duration: 0.5,
                scaleY: 1,
                transformOrigin: "bottom left",
                stagger: 0.2
              });
              gsap.to("#tran li", {
                duration: 0.5,
                delay: 1,
                scaleY: 0,
                ease: Power2.easeOut,
                transformOrigin: "bottom left",
                stagger: 0.1
              });
              _context2.next = 5;
              return regeneratorRuntime.awrap(sleep(1000));

            case 5:
              done();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    enter: function enter(data) {
      return regeneratorRuntime.async(function enter$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }
      });
    },
    after: function after(data) {
      type();
    }
  }]
});