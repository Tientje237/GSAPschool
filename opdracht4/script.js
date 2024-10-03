// Calorie Tracker animatie
gsap.to("#calorieProgress", {
  width: "60%", // Pas aan naar jouw data
  duration: 1.5,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".calorie-tracker",
      start: "top 80%", // Begin de animatie als 80% van de sectie in beeld is
      toggleActions: "play none none reset" // Reset de animatie als deze weer uit beeld gaat
  }
});

// Stappenteller animatie
gsap.to("#stepCount", {
  innerText: 10000, // Stel het doel aantal stappen in
  snap: { innerText: 1 }, // Laat de getallen vloeiend oplopen
  duration: 2,
  ease: "power1.out",
  scrollTrigger: {
      trigger: ".step-counter",
      start: "top 80%", // Begin als 80% van de sectie in beeld is
      toggleActions: "play none none reset"
  },
  onUpdate: function() {
      document.getElementById("stepCount").innerText = Math.round(this.targets()[0].innerText);
  }
});

// Initieer de grafiek op een canvas-element voor de gewichttracker
const ctx = document.getElementById("weightChartCanvas").getContext("2d");
const weightChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "Gewicht",
            data: [80, 78, 76, 74, 73, 72], // Voorbeelddata
            borderColor: "#4CAF50",
            fill: false,
            borderWidth: 2,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gewicht Tracker animatie met GSAP en ScrollTrigger
ScrollTrigger.create({
    trigger: ".weight-tracker",
    start: "top 80%",
    toggleActions: "play none none reset",
    onEnter: () => {
        // Herstart de grafiekanimatie wanneer deze in beeld komt
        weightChart.update(); // Herladen voor een soepel effect
        gsap.fromTo(weightChart.data.datasets[0].data, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
});


// Gezondheidstips animatie
gsap.from(".health-tip", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".health-tips",
      start: "top 80%", // Begin als 80% van de sectie in beeld is
      toggleActions: "play none none reset"
  }
});

// "Randomize" knop voor gezondheidstips
document.getElementById("randomizeTip").addEventListener("click", function() {
  gsap.to(".health-tip", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      onComplete: function() {
          // Update de gezondheidstip hier naar een nieuwe tip
          document.querySelector(".health-tip").innerText = "Nieuwe gezondheidstip hier!";
          gsap.fromTo(".health-tip", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
      }
  });
});



// const tips = [
//   "Drink voldoende water.",
//   "Zorg voor een goede nachtrust.",
//   "Blijf fysiek actief.",
//   "Eet meer groenten en fruit.",
// ];