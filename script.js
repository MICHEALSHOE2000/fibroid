// Countdown Timer
function countdown() {
  const offerDate = new Date("2025-10-30T23:59:59");
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
// === Fake Order Notification (Top-Right)
const fakeOrders = [
    "Mary from Lagos just ordered two bottles!",
    "Ahmed from Abuja placed an order!",
    "Chinwe from Enugu bought 2 packs!",
    "Tolu from Ibadan just ordered the complete pack!",
    "Fatima from Kano reordered this morning!"
  ];
  
  const popup = document.getElementById('fake-order-popup');
  
  function showFakeOrder() {
    popup.textContent = fakeOrders[Math.floor(Math.random() * fakeOrders.length)];
    popup.style.opacity = '1';
    setTimeout(() => {
      popup.style.opacity = '0';
    }, 5000);
  }
  
  setInterval(showFakeOrder, 25000); // Every 25 seconds
  
  // === Fake Comment Submit - Just for realism
  const sendBtn = document.getElementById('send-comment');
  const input = document.getElementById('comment-input');
  const toast = document.getElementById('comment-toast');
  
  if (sendBtn && input && toast) {
    sendBtn.addEventListener('click', () => {
      if (input.value.trim() !== '') {
        toast.style.display = 'block';
        input.value = '';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
    });
  }
  // === Exit Popup (Mobile Friendly) ===
let popupVisible = false;
const exitPopup = document.getElementById('exit-popup');
const skipPopup = document.getElementById('skip-popup');
const popupForm = document.getElementById('popupForm');

// Function to show popup once
function showPopup() {
  if (!popupVisible) {
    popupVisible = true;
    exitPopup.style.display = 'flex';
  }
}

// Show popup when user tries to go back (mobile)
window.addEventListener('popstate', function() {
  showPopup();
  history.pushState(null, null, location.href); // Prevent immediate back exit
});

// Show popup when user switches away or minimizes
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    showPopup();
  }
});

// Fallback: show after 25 seconds of inactivity
let idleTimer;
function resetIdle() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => showPopup(), 25000);
}
['scroll', 'touchstart', 'mousemove', 'keydown'].forEach(e =>
  document.addEventListener(e, resetIdle)
);
resetIdle();

// Close popup
skipPopup.addEventListener('click', () => {
  exitPopup.style.display = 'none';
});

// Handle popup form
popupForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const phone = document.getElementById('popup-phone').value.trim();
  const phoneRegex = /^\d{11}$/;

  if (!phoneRegex.test(phone)) {
    alert("Phone number must be exactly 11 digits.");
    return;
  }

  const response = await fetch(this.action, {
    method: this.method,
    body: new FormData(this),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert("✅ Thank you! Your free fibroid PDF will be sent shortly.");
    exitPopup.style.display = 'none';
  } else {
    alert("Something went wrong. Please try again.");
  }
});

