
gsap.to("#element1", {
    duration: 2,
    x: 200,
    scale: 1.5,
    backgroundColor: "#f39c12",
    ease: "expo.out"
  });
  

  gsap.from("#element2", {
    duration: 2,
    y: -200,
    ease: "bounce.out"
  });
  

  gsap.fromTo("#element3", 
    { x: 300, opacity: 0 },
    { duration: 2, x: 0, opacity: 1, ease: "elastic.out(1, 0.3)" }
  );
  

  document.querySelectorAll(".element").forEach(element => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, { duration: 0.5, scale: 1.2 });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(element, { duration: 0.5, scale: 1 });
    });
  });
  

  gsap.to("#element1", {
    duration: 2,
    x: 200,
    scale: 1.5,
    backgroundColor: "#f39c12",
    ease: "expo.out",
    repeat: -1,  
    yoyo: true   
  });