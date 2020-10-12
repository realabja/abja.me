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

var typed = document.querySelector("#typed");

var type = function type() {
  var fav, i, j;
  return regeneratorRuntime.async(function type$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!typed) {
            _context.next = 23;
            break;
          }

          fav = ["a Machine Learning", "a Data Science", "an AI"];

        case 2:
          if (!true) {
            _context.next = 21;
            break;
          }

          i = 0;

        case 4:
          if (!(i < fav.length)) {
            _context.next = 19;
            break;
          }

          j = 0;

        case 6:
          if (!(j < fav[i].length)) {
            _context.next = 13;
            break;
          }

          typed.append(fav[i].charAt(j));
          _context.next = 10;
          return regeneratorRuntime.awrap(sleep(100));

        case 10:
          j++;
          _context.next = 6;
          break;

        case 13:
          _context.next = 15;
          return regeneratorRuntime.awrap(sleep(2000));

        case 15:
          typed.innerHTML = "";

        case 16:
          i++;
          _context.next = 4;
          break;

        case 19:
          _context.next = 2;
          break;

        case 21:
          _context.next = 24;
          break;

        case 23:
          return _context.abrupt("return", true);

        case 24:
        case "end":
          return _context.stop();
      }
    }
  });
};

type();

if (document.querySelectorAll("#myProjects>article")) {
  var lazyStuff = document.querySelectorAll("#myProjects>article");
  var observer = new IntersectionObserver(function (objects, observer) {
    objects.forEach(function (object) {
      if (object.isIntersecting) {
        object.target.classList.add("observed");
        var img;

        for (item in object.target.childNodes) {
          if (object.target.childNodes[item].nodeName != "#text") {
            console.log(object.target.childNodes[item].classList);

            if (object.target.childNodes[item].classList.contains("imgContainer")) {
              console.log("some");
              img = object.target.childNodes[item];
              console.log(img);

              for (item in img.childNodes) {
                if (img.childNodes[item].tagName == "IMG") {
                  img = img.childNodes[item];
                  src = img.dataset.lazy;
                  console.log(src);
                  img.setAttribute("src", src);
                  console.log(img);
                }
              }
            } // console.log(object.target.childNodes[item])

          }
        }

        observer.unobserve(object.target);
      }
    });
  });

  try {
    lazyStuff.forEach(function (object) {
      console.log("inforeach");
      observer.observe(object);
    });
  } catch (error) {
    console.log(error);
  }
} // BARBA things
// BARBA things
// BARBA things


barba.init({
  // sync: true,
  debug: true,
  sync: true,
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
              done = this.async();
              type();
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
              _context2.next = 6;
              return regeneratorRuntime.awrap(sleep(1000));

            case 6:
              done();

            case 7:
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
              type(); // gsap.from(data.next.container, {
              //     opacity: 0,
              //     duration:1,
              //     ease: Power1.easeOut
              // });

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]
});