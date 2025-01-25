

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);



//cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
});


// change width of all svgs under page4
document.querySelectorAll(".page4 svg").forEach((svg) => {
  svg.style.width = "70";
});


//   Navbar

gsap.from(".navbar", {
  y: -100,
  duration: 1,
  ease: "bounce",
});


//   Page 1

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "top -15%",
    end: "bottom 70%",
    scrub: 2,
  },
});

tl.to(".abdullah", {
  x: -100,
  duration: 1,
}, "name");
tl.to(".shamoon", {
  x: 100,
  duration: 1,
}, "name");



//   Page 4

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "top 65%",
    end: "top 50%",
    scrub: 2,
  },
});

tl2.to("body", {
  backgroundColor: "#111",
}, "anim")
tl2.to(".pg4bg", {
  color: "white",
  backgroundColor: "#111",
}, "anim")
tl2.to(".nav-links a", {
  color: "#111"
}, "anim")
tl2.to(".navbar", {
  backgroundColor: "#E8E8E8"
}, "anim")



//   Page 4 icons

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    // markers: true,
    start: "bottom 140%",
    end: "bottom 50%",
    scrub: 2,
  },
});

let fskills = document.querySelector(".frontend");

document.querySelectorAll(".icons").forEach((icon) => {
  const random = Math.floor(Math.random() * 1000);

  tl3.to(icon, {
    y: random,
    opacity: 0
  }, "anim2");
  // tl3.set(icon,{css:{zIndex:10}});
  // tl3.set(fskills, { css: { zIndex: 10 } });
})



//    Page 5

let image1 = document.querySelector(".proj-1 img")
let image2 = document.querySelector(".proj-2 img")
let image3 = document.querySelector(".proj-3 img")
let image12 = document.querySelector(".proj-12")
let image13 = document.querySelector(".proj-13")
let image14 = document.querySelector(".proj-14")
let image22 = document.querySelector(".proj-22")
let image32 = document.querySelector(".proj-32")


// Image animations

image1.addEventListener("mouseenter",(e)=>{
  gsap.to(image1, {
    scale: 1.1,
    duration: 0.5
  })
  gsap.to(image12, {
    scale: 27,
    opacity: 1,
    top: "-9vw",
    left: "30vw",
    duration: 0.5
  })
  gsap.to(image13, {
    scale: 20,
    opacity: 1,
    left: "55vw",
    duration: 0.5
  })
  gsap.to(image14, {
    scale: 27,
    opacity: 1,
    top: "22vw",
    left: "30vw",
    duration: 0.5
  })
  gsap.to(image2, {
    opacity: 0.2
  })
  gsap.to(image3, {
    opacity: 0.2
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.gif)",
    width:"30px",
    height:"30px",
  })
})

image1.addEventListener("mouseleave",(e)=>{
  gsap.to(image1, {
    scale: 1,
    duration: 0.5
  })
  gsap.to(image12, {
    scale: 1,
    opacity: 0,
    top: "6vw",
    left: "33vw",
    duration: 0.5
  })
  gsap.to(image13, {
    scale: 1,
    opacity: 0,
    left: "33vw",
    duration: 0.5
  })
  gsap.to(image14, {
    scale: 1,
    opacity: 0,
    top: "6vw",
    left: "33vw",
    duration: 0.5
  })
  gsap.to(image2, {
    opacity: 1
  })
  gsap.to(image3, {
    opacity: 1
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.png)",
    width:"20px",
    height:"20px",
  })
})

image2.addEventListener("mouseenter",(e)=>{
  gsap.to(image2, {
    scale: 1.1,
    duration: 0.5
  })
  gsap.to(image1, {
    opacity: 0.2
  })
  gsap.to(image3, {
    opacity: 0.2 
  })
  gsap.to(image22, {
    scale: 25,
    opacity: 1,
    right: "55vw",
    duration: 0.5
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.gif)",
    width:"30px",
    height:"30px",
  })
})
image2.addEventListener("mouseleave",(e)=>{
  gsap.to(image2, {
    scale: 1,
    duration: 0.5
  })
  gsap.to(image1, {
    opacity: 1
  })
  gsap.to(image3, {
    opacity: 1
  })
  gsap.to(image22, {
    scale: 1,
    opacity: 0,
    right: "33vw",
    duration: 0.5
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.png)",
    width:"20px",
    height:"20px",
  })
})

image3.addEventListener("mouseenter",(e)=>{
  gsap.to(image3, {
    scale: 1.1,
    duration: 0.5
  })
  gsap.to(image1, {
    opacity: 0.2
  })
  gsap.to(image2, {
    opacity: 0.2
  })
  gsap.to(image32, {
    scale: 28,
    opacity: 1,
    top: "-10vw",
    duration: 0.5
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.gif)",
    width:"30px",
    height:"30px",
  })
})
image3.addEventListener("mouseleave",(e)=>{
  gsap.to(image3, {
    scale: 1,
    duration: 0.5
  })
  gsap.to(image1, {
    opacity: 1
  })
  gsap.to(image2, {
    opacity: 1
  })
  gsap.to(image32, {
    scale: 1,
    opacity: 0,
    top: "1vw",
    duration: 0.5
  })
  gsap.to(cursor,{
    backgroundImage: "url(resources/cursor.png)",
    width:"20px",
    height:"20px",
  })
})

// OnClick

image1.addEventListener("click", (e) => {
  window.open("https://github.com/AbdullahShamoon/pitch-me-a-coin", "_blank");
})