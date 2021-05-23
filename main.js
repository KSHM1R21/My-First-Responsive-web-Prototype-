var menulist = document.getElementById("menuList");

menulist.style.maxHeight = "0px";

function togglemenu() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100%";
  } else {
    menulist.style.maxHeight = "0px";
  }
}


//?<-------------Animation's-------------->//

var tl = gsap.timeline();


tl.from("nav .logo", {
  x:-130,
  opacity: 0,
  duration: 1.5,
  ease:'Expo.easeInOut'
  
})
.from("nav i", {
  x:30,
  opacity: 0,
  duration: 1,
  ease:'Expo.easeInOut'
}, '-=1')

.from("nav ul li", {
  x: 130,
  opacity: 0,
  duration: 1,
  ease: 'Power4.easeInOut'
}, '-=1.2')

.from(".middle", {
  stagger: .4,
  x:-190,
  opacity: 0,
  duration: 1,
  ease:'Expo.easeInOut'
}, '-=1.5')

.from(".img-box", {
  x: -130,
  opacity: 0,
  duration: 2,
  ease: 'Power4.easeInOut'
}, '-=2.1')

.from(".main-box h2", {
  stagger: .5,
  x: 130,
  opacity: 0,
  duration: .7,
  ease: 'Expo.easeInOut'
}, '-=1.2')

.from(".main-box p", {
  stagger: .5,
  x: 130,
  opacity: 0,
  duration: .9,
  ease: 'Expo.easeInOut'
}, '-=1.2')

.from(".main-box button", {
  stagger: .5,
  x: 130,
  opacity: 0,
  duration: 1,
  ease: 'Expo.easeInOut'
}, '-=1.2')



.from(".card", {
  stagger: .2,
  y: 130,
  opacity: 0,
  duration: 2,
  ease: 'Power4.easeInOut'
}, '-=2')



































// function togglemenu() {
//   var menulist = document.getElementById("menuList");
//   if (menulist.style.display === "block") {
//     menulist.style.display = "none";
//   } else {
//     menulist.style.display = "block";
//   }
// }
