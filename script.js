
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
behavior: "smooth",
                });
            }
        });
    });
});
// ------------------------about===============

const canvas = document.getElementById('code-canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = '300';
canvas.height = '300';

// Define the code strings
const codeStrings = [
  'console.log("Hello, World!");',
  'function greet(name) {',
  'console.log(`Hello, ${name}!`);',
  '}',
  'greet("John");',
  // Add more code strings here
];

// Define the animation variables
let animationIndex = 0;
let animationTimer = null;

// Function to draw the code on the canvas
function drawCode() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '18px Monaco';
  ctx.fillStyle = '#a21caf';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'top';

  const codeString = codeStrings[animationIndex];
  const codeLines = codeString.split('\n');

  let y = 20;
  for (let i = 0; i < codeLines.length; i++) {
    ctx.fillText(codeLines[i], 20, y);
    y += 20;
  }

  animationIndex = (animationIndex + 1) % codeStrings.length;
}

// Function to animate the code
function animateCode() {
  drawCode();

  animationTimer = setTimeout(animateCode, 2000);
}

// Initialize the animation
animateCode();

// Add event listeners to the skills list
const skillsList = document.querySelector('.skills ul');

skillsList.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    const skill = event.target.querySelector('span').textContent;
    ctx.fillStyle = '#bd2777';
    ctx.font = '24px Monaco';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'iddle';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(skill, canvas.width / 2, canvas.height / 2);
  }
});

skillsList.addEventListener('mouseout', () => {
  drawCode();
});

// --------------------for animated slogans--------------

// JavaScript
const slogans = document.querySelectorAll('.slogan');
let currentSloganIndex = 0;

function showNextSlogan() {
  const currentSlogan = slogans[currentSloganIndex];
  currentSlogan.classList.remove('active');

  currentSloganIndex = (currentSloganIndex + 1) % slogans.length;
  const nextSlogan = slogans[currentSloganIndex];
  nextSlogan.classList.add('active');

  setTimeout(showNextSlogan, 3000); // Show next slogan after 3 seconds
}

showNextSlogan();