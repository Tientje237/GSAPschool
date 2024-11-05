// Importeer de GSAP en ScrollTrigger modules
gsap.registerPlugin(ScrollTrigger);

// Calorie Tracker animatie
gsap.fromTo(
  ".calorie-fill",
  { width: "0%" },
  {
    width: "60%", // Zet op 60% om 1200 van 2000 calorieën te representeren
    duration: 2,
    scrollTrigger: {
      trigger: ".calorie-tracker",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
  }
);

const stepGoal = 10000;
const currentSteps = 7000; // Aantal stappen voor dit voorbeeld

// Stappenteller en cirkel animatie
gsap.to(".circle-progress", {
  strokeDashoffset: 408 - (408 * currentSteps) / stepGoal, // Bereken voortgang als percentage van de cirkel
  duration: 6,
  scrollTrigger: {
    trigger: ".step-tracker",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
});

// Animeren van het step-counter nummer in de cirkel
gsap.fromTo(
  "#stepCounter",
  { innerText: 0 },
  {
    innerText: currentSteps,
    snap: { innerText: 1 },
    duration: 6,
    scrollTrigger: {
      trigger: ".step-tracker",
      start: "top 80%",
      toggleActions: "play none none reset",
    },
    onUpdate: function () {
      // Update de tekst in de teller met afgeronde waarde
      document.getElementById("stepCounter").textContent = `${Math.round(
        this.targets()[0].innerText
      )}`;
    },
  }
);

// Initieer de Chart.js grafiek voor de gewichttracker (zichtbaar bij scrollen)
const ctx = document.getElementById("weightChartCanvas").getContext("2d");
let weightChart;

// Weight Tracker animatie met ScrollTrigger
ScrollTrigger.create({
  trigger: ".weight-tracker",
  start: "top 80%",
  toggleActions: "play none none reset",
  onEnter: () => {
    if (!weightChart) {
      // Controleer of de grafiek al is aangemaakt
      weightChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Gewicht",
              data: [80, 78, 76, 74, 73, 72],
              borderColor: "#4CAF50",
              fill: false,
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  },
});

// Gezondheid Tips sectie met dynamische inhoud
const healthTips = [
  "Drink genoeg water!",
  "Slaap 8 uur per nacht.",
  "Eet meer groenten en fruit.",
  "Beweeg minstens 30 minuten per dag.",
  "Vermijd overmatig suikergebruik.",
];

const healthTipElement = document.getElementById("healthTip");
const newTipButton = document.getElementById("newTipButton");

newTipButton.addEventListener("click", () => {
  const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];
  gsap.to(healthTipElement, {
    opacity: 0,
    duration: 0.5,
    onComplete: () => {
      healthTipElement.innerText = randomTip;
      gsap.to(healthTipElement, { opacity: 1, duration: 0.5 });
    },
  });
});
