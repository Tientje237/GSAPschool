function animateMain() {
  let main_tl = gsap.timeline({
      paused: false 
  });


  main_tl
      .add(animateBox1(), "start")    // "start" is een label
      .add(animateBox2(), "start+=0.5") // Start 0.5 seconden na het label "start"
      .add(animateBox3(), "start+=1")
      .add(animateBox4(), "start+=1.5")
      .add(animateBox5(), "start+=2")
      .add(animateBox6(), "start+=2.5");

  return main_tl;
}


function animateBox1() {
  let box1_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box1_tl.from("#box1", {x: -300, opacity: 0, ease: "expo.out"});
  return box1_tl;
}


function animateBox2() {
  let box2_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box2_tl.from("#box2", {y: -200, opacity: 0, ease: "bounce.out"});
  return box2_tl;
}


function animateBox3() {
  let box3_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box3_tl.from("#box3", {x: 300, opacity: 0, ease: "power2.out"});
  return box3_tl;
}


function animateBox4() {
  let box4_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box4_tl.from("#box4", {y: 200, opacity: 0, ease: "power4.out"});
  return box4_tl;
}


function animateBox5() {
  let box5_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box5_tl.from("#box5", {scale: 0, opacity: 0, ease: "back.out(1.7)"});
  return box5_tl;
}


function animateBox6() {
  let box6_tl = gsap.timeline({
      defaults: {
          duration: 1
      }
  });

  box6_tl.from("#box6", {rotation: 360, opacity: 0, ease: "elastic.out(1, 0.3)"});
  return box6_tl;
}


let mainTimeline = animateMain();


document.getElementById("playBtn").addEventListener("click", () => mainTimeline.play());
document.getElementById("pauseBtn").addEventListener("click", () => mainTimeline.pause());
document.getElementById("reverseBtn").addEventListener("click", () => mainTimeline.reverse());
document.getElementById("restartBtn").addEventListener("click", () => mainTimeline.restart());