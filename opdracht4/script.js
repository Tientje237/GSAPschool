// GSAP & ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Calorie Tracker Animation
document.getElementById("update-calories").addEventListener("click", () => {
    let calories = document.getElementById("calorie-input").value;
    let progressWidth = Math.min(calories / 2000 * 100, 100);  // Max 2000 calorieën
    gsap.to("#calorie-fill", { width: `${progressWidth}%`, duration: 2 });
});


// Stappenteller Animation
document.getElementById("update-steps").addEventListener("click", () => {
  let steps = document.getElementById("step-input").value;
  gsap.to("#step-counter", {
    textContent: steps,
    snap: { textContent: 1 },
    duration: 2,
  });
  let progressCircle = Math.min((steps / 10000) * 100, 100); // Voorbeeld: max 10.000 stappen
  gsap.to("#step-circle::after", { width: `${progressCircle}%`, duration: 2 });
});

// Gewicht Tracker - Chart.js
let weightData = [80, 78, 77, 76, 75]; // Voorbeelddata
let weightChart = new Chart(
  document.getElementById("weightChart").getContext("2d"),
  {
    type: "line",
    data: {
      labels: ["Januari", "Februari", "Maart", "April", "Mei"],
      datasets: [
        {
          label: "Gewicht (kg)",
          data: weightData,
          borderColor: "#76c7c0",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
  }
);

document.getElementById("update-weight").addEventListener("click", () => {
  let newWeight = document.getElementById("weight-input").value;
  if (newWeight) {
    weightData.push(newWeight);
    weightChart.data.labels.push(`Nieuw (${weightData.length})`); // Voeg een nieuwe maand/label toe
    weightChart.update();
    gsap.fromTo("#weightChart", { opacity: 0 }, { opacity: 1, duration: 2 });
  }
});

// Gezondheidstips Animation
const tips = [
  "Drink voldoende water.",
  "Zorg voor een goede nachtrust.",
  "Blijf fysiek actief.",
  "Eet meer groenten en fruit.",
];

function showTip() {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  const tipElement = document.getElementById("tip");
  tipElement.textContent = randomTip;

  // Animatie bij tip wisselen
  gsap.fromTo(tipElement, { opacity: 0 }, { opacity: 1, duration: 1 });
}

document.getElementById("randomizeTip").addEventListener("click", showTip);

// Eerste tip tonen bij laden
showTip();

// ScrollTrigger voor animaties bij scrollen
ScrollTrigger.create({
  trigger: ".calorie-tracker",
  start: "top center",
  onEnter: () => gsap.to(".progress-bar::after", { width: "80%", duration: 2 }),
});

ScrollTrigger.create({
  trigger: ".stappenteller",
  start: "top center",
  onEnter: () =>
    gsap.to("#step-counter", {
      textContent: 10000,
      snap: { textContent: 1 },
      duration: 2,
    }),
});

ScrollTrigger.create({
  trigger: ".gewicht-tracker",
  start: "top center",
  onEnter: () => gsap.from("#weightChart", { opacity: 0, duration: 2, y: 50 }),
});
