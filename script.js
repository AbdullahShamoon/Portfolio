

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

// gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

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

let navLinks = document.querySelectorAll(".nav-links a")
let sections = document.querySelectorAll(".section")

navLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    gsap.to(window, {
      duration: 1, scrollTo: {
        y: "#link" + (index + 1),
      }
    });
  });
  link.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundImage: "url(resources/cursor.gif)",
      scale: 1.5,
      duration: 0.2,
    })
  })
  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      backgroundImage: "url(resources/cursor.png)",
      scale: 1,
      duration: 0.2
    })
  })
});


window.addEventListener("scroll", () => {
  // Loop through each section
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Add some offset
    const sectionHeight = section.offsetHeight;

    // Check if the section is in view
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      // Remove 'active' from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' to the link matching the current section
      const activeLink = document.querySelector(`.nav-links .${section.id}`);
      activeLink.classList.add("active");
    }
  });
});



//   Page 1

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1",
    scroller: "body",
    // markers: true,
    start: "bottom 90%",
    end: "bottom 10%",
    scrub: 2,
  },
});

tl.to(".abdullah", {
  x: 370,
  y: 475,
  scale: 0.4,
  duration: 1,
  // color: "#FA5A5A",
  color: "#58C2F9"
}, "name");
tl.to(".shamoon", {
  x: 730,
  y: 325,
  scale: 0.5,
  duration: 1,
  // color: "#FA5A5A",
  color: "#58C2F9"

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

image1.addEventListener("mouseenter", (e) => {
  gsap.to(image1, {
    scale: 1.1,
    duration: 0.5,
    ease: "back.out(4)"
  })
  gsap.to(image12, {
    scale: 27,
    opacity: 1,
    top: "-9vw",
    left: "30vw",
    duration: 0.5,
    ease: "circ.out",
  })
  gsap.to(image13, {
    scale: 20,
    opacity: 1,
    left: "55vw",
    duration: 0.5,
    ease: "circ.out",
    delay: 0.1
  })
  gsap.to(image14, {
    scale: 27,
    opacity: 1,
    top: "22vw",
    left: "30vw",
    duration: 0.5,
    ease: "circ.out",
    delay: 0.2
  })
  gsap.to(image2, {
    opacity: 0.2
  })
  gsap.to(image3, {
    opacity: 0.2
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5,
  })
})

image1.addEventListener("mouseleave", (e) => {
  gsap.to(image1, {
    scale: 1,
    duration: 0.5
  })
  gsap.to(image12, {
    scale: 1,
    opacity: 0,
    top: "6vw",
    left: "33vw",
    duration: 0.5,

  })
  gsap.to(image13, {
    scale: 1,
    opacity: 0,
    left: "33vw",
    duration: 0.5,
    delay: 0.1
  })
  gsap.to(image14, {
    scale: 1,
    opacity: 0,
    top: "6vw",
    left: "33vw",
    duration: 0.5,
    delay: 0.2
  })
  gsap.to(image2, {
    opacity: 1
  })
  gsap.to(image3, {
    opacity: 1
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1,
  })
})

image2.addEventListener("mouseenter", (e) => {
  gsap.to(image2, {
    scale: 1.1,
    duration: 0.5,
    ease: "back.out(4)"

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
    duration: 0.5,
    ease: "circ.out",

  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
})
image2.addEventListener("mouseleave", (e) => {
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
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
})

image3.addEventListener("mouseenter", (e) => {
  gsap.to(image3, {
    scale: 1.1,
    duration: 0.5,
    ease: "back.out(4)"

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
    duration: 0.5,
    ease: "circ.out",

  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
})
image3.addEventListener("mouseleave", (e) => {
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
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
})


// Project Image OnClick

image1.addEventListener("click", (e) => {
  window.open("https://github.com/AbdullahShamoon/pitch-me-a-coin", "_blank");
})

image2.addEventListener("click", (e) => {
  window.open("https://github.com/AbdullahShamoon/BaatCheet", "_blank");
})

image3.addEventListener("click", (e) => {
  window.open("https://abdullahshamoon.github.io/Kick-up/", "_blank");
})



// Back to Top

let upArrow = document.querySelector(".up-arrow")
let bubble = document.querySelector(".bubble")

gsap.to(upArrow, {
  rotate: -90,
  scrollTrigger: {
    trigger: upArrow,
    start: "top 80%",
    end: "top 50%",
    scrub: 2,
    // markers: true
  },
})

upArrow.addEventListener("click", () => {
  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: "#link1",
    },
    ease: "power2.out"
  });
})

// OR....

// upArrow.addEventListener("click", () => {
//   document.querySelector(".page1").scrollIntoView({
//     behavior: "smooth",});
// })

upArrow.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
  gsap.to(bubble, {
    opacity: 1,
    duration: 0.3,
    width: "75px",
    height: "65px",
    fontSize: "13px",
    left: "55px",
    bottom: "50px"
  })
})
upArrow.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
  gsap.to(bubble, {
    opacity: 0,
    duration: 0.3,
    width: "1px",
    height: "1px",
    fontSize: "1px",
    left: "40px",
    bottom: "40px"
  })
})

// Resume Button 

let resumeBtn = document.querySelector(".resumeBtn");
resumeBtn.addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1s6qToP58NCp0JaFvkTqTfPIRzYc5LG1D/view?usp=sharing", "_blank");
})
resumeBtn.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
})
resumeBtn.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
})


//  --- Page 3 ---

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  }
})

tl4.from(".p3text1", {
  x: -150,
  ease: "back.out(4)"
})
tl4.from(".p3text2", {
  x: -150,
  ease: "back.out(4)"
})
tl4.from(".p3text3", {
  x: -150,
  ease: "back.out(4)"
})
tl4.from(".p3text4", {
  x: -150,
  ease: "back.out(4)"
})



let sayHi = document.querySelector(".sayHi");
let watchMyRepo = document.querySelector(".watchMyRepo");

sayHi.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
})
sayHi.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
})

watchMyRepo.addEventListener("mouseenter", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5
  })
})
watchMyRepo.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1
  })
})

gsap.from(".circle", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".circle",
    scroller: "body",
    // markers: true,
    start: "top 30%",
    end: "top 10%",
    scrub: 1,
  }
})




// -----Page 6 -----

//github
let textGithub = document.querySelector(".text-github")
textGithub.addEventListener("mouseenter", () => {
  gsap.to(".g-m-image", {
    opacity: 1,
    duration: 1,
    rotate: -10,
    // ease: "back.out(4)",
    ease: "elastic.out(2)",
    display: "block"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5,
    duration: 0.2,
  })
  // gsap.to(".g-image", {
  //   opacity: 1,
  //   duration: 0.6,
  //   right: "60px",
  //   ease: "back.out(2)",
  // })
})

textGithub.addEventListener("mouseleave", () => {
  gsap.to(".g-m-image", {
    opacity: 0,
    duration: 1,
    rotate: -50,
    ease: "power2.out",
    display: "none"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1,
    duration: 0.2,
  })
  // gsap.to(".g-image", {
  //   opacity: 0,
  //   duration: 0.6,
  //   right: "-260px",
  //   ease: "power2.out",
  // })
})

textGithub.addEventListener("click", () => {
  window.open("https://github.com/AbdullahShamoon", "_blank");
})

//linkedin
let textLinkedin = document.querySelector(".text-linkedin")
textLinkedin.addEventListener("mouseenter", () => {
  gsap.to(".l-m-image", {
    opacity: 1,
    duration: 1,
    rotate: -10,
    // ease: "back.out(4)",
    ease: "elastic.out(2)",
    display: "block"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5,
    duration: 0.2,
  })
  // gsap.to(".l-image", {
  //   opacity: 1,
  //   duration: 0.6,
  //   right: "60px",
  //   ease: "back.out(2)",
  // })
})

textLinkedin.addEventListener("mouseleave", () => {
  gsap.to(".l-m-image", {
    opacity: 0,
    duration: 1,
    rotate: -50,
    ease: "power2.out",
    display: "none"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1,
    duration: 0.2,
  })
  // gsap.to(".l-image", {
  //   opacity: 0,
  //   duration: 0.6,
  //   right: "-260px",
  //   ease: "power2.out",
  // })
})

textLinkedin.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/abdullah-shamoon12/", "_blank");
})

//instagram
let textInstagram = document.querySelector(".text-instagram")
textInstagram.addEventListener("mouseenter", () => {
  gsap.to(".i-m-image", {
    opacity: 1,
    duration: 1,
    rotate: -10,
    // ease: "back.out(4)",
    ease: "elastic.out(2)",
    display: "block"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5,
    duration: 0.2,
  })
  // gsap.to(".i-image", {
  //   opacity: 1,
  //   duration: 0.6,
  //   right: "60px",
  //   ease: "back.out(2)",
  // })
})

textInstagram.addEventListener("mouseleave", () => {
  gsap.to(".i-m-image", {
    opacity: 0,
    duration: 1,
    rotate: -50,
    ease: "power2.out",
    display: "none"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1,
    duration: 0.2,
  })
  // gsap.to(".i-image", {
  //   opacity: 0,
  //   duration: 0.6,
  //   right: "-260px",
  //   ease: "power2.out",
  // })
})

textInstagram.addEventListener("click", () => {
  window.open("https://www.instagram.com/abdullah_shamoon12/", "_blank");
})

//facebook
let textFacebook = document.querySelector(".text-facebook")
textFacebook.addEventListener("mouseenter", () => {
  gsap.to(".f-m-image", {
    opacity: 1,
    duration: 1,
    rotate: -10,
    // ease: "back.out(4)",
    ease: "elastic.out(2)",
    display: "block"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.gif)",
    scale: 1.5,
    duration: 0.2,
  })
  // gsap.to(".f-image", {
  //   opacity: 1,
  //   duration: 0.6,
  //   right: "60px",
  //   ease: "back.out(2)",
  // })
})

textFacebook.addEventListener("mouseleave", () => {
  gsap.to(".f-m-image", {
    opacity: 0,
    duration: 1,
    rotate: -50,
    ease: "power2.out",
    display: "none"
  })
  gsap.to(cursor, {
    backgroundImage: "url(resources/cursor.png)",
    scale: 1,
    duration: 0.2,
  })
  // gsap.to(".f-image", {
  //   opacity: 0,
  //   duration: 0.6,
  //   right: "-260px",
  //   ease: "power2.out",
  // })
})

textFacebook.addEventListener("click", () => {
  window.open("https://www.facebook.com/people/Abdullah-Shamoon/pfbid02FB67BG2SzrQQdeCsbBXDqmPj1KqrqDEfpXmDPYFrKpqbyHnYHEGgfPz1ywFyCYrMl/", "_blank");
})

