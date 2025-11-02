// Add a small floating animation to the header
const title = document.querySelector('h1');
let angle = 0;

function floatTitle() {
  angle += 0.03;
  title.style.transform = `translateY(${Math.sin(angle) * 5}px)`;
  requestAnimationFrame(floatTitle);
}

floatTitle();