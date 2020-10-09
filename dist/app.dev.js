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

document.addEventListener("scroll", function (e) {
  var y = 100 - ((window.innerHeight - document.querySelector("#topOfTPage").getBoundingClientRect().top) / window.innerHeight - 1) * 400;
  riseLay(y);
});
var typed = document.querySelector("#typed");

var type = function type() {
  var fav, i, j;
  return regeneratorRuntime.async(function type$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fav = ["a Machine Learning", "a Data Science", "an AI"];

        case 1:
          if (!true) {
            _context.next = 20;
            break;
          }

          i = 0;

        case 3:
          if (!(i < fav.length)) {
            _context.next = 18;
            break;
          }

          j = 0;

        case 5:
          if (!(j < fav[i].length)) {
            _context.next = 12;
            break;
          }

          typed.append(fav[i].charAt(j));
          _context.next = 9;
          return regeneratorRuntime.awrap(sleep(100));

        case 9:
          j++;
          _context.next = 5;
          break;

        case 12:
          _context.next = 14;
          return regeneratorRuntime.awrap(sleep(2000));

        case 14:
          typed.innerHTML = "";

        case 15:
          i++;
          _context.next = 3;
          break;

        case 18:
          _context.next = 1;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  });
};

type();
var lazyStuff = document.querySelectorAll("#myProjects>article");
var observer = new IntersectionObserver(function (objects, observer) {
  objects.forEach(function (object) {
    if (object.isIntersecting) {
      object.target.classList.add("observed");
      var img;

      for (item in object.target.childNodes) {
        console.log(object.target.childNodes[item]);

        if (object.target.childNodes[item].classList.contains("imgContainer")) {
          img = object.target.childNodes[item];

          for (item in img.childNodes) {
            if (img.childNodes[item].tagName == "IMG") {
              img = img.childNodes[item];
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
  });
});
lazyStuff.forEach(function (object) {
  console.log("inforeach");
  observer.observe(object);
});