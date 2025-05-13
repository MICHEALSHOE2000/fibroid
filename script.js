// Countdown Timer
function countdown() {
  const offerDate = new Date("2025-06-30T23:59:59");
  const now = new Date();
  const diff = offerDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML = 
    `${days}d ${hours}h ${mins}m ${secs}s`;
}
setInterval(countdown, 1000);
countdown(); // initialize immediately

// Smooth Scroll to Form
document.querySelectorAll('a[href="#order-form"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const formSection = document.querySelector('#order-form');
    formSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky CTA Visibility Logic (only show after hero)
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  const cta = document.querySelector('#sticky-cta');
  const scrollY = window.scrollY;

  if (scrollY > hero.offsetHeight) {
    cta.style.display = 'block';
  } else {
    cta.style.display = 'none';
  }
});
// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});
