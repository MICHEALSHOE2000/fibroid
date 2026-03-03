const PHONE = '2348012345678';
const BASE_MESSAGE = 'Hello, I would like support with UteroClear.';

const buildWhatsAppUrl = (plan = 'General') => {
  const message = `${BASE_MESSAGE} Plan: ${plan}`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
};

const attachWhatsAppLinks = () => {
  document.querySelectorAll('.whatsapp-link, .wa-plan').forEach((el) => {
    const plan = el.dataset.plan || 'General';
    const url = buildWhatsAppUrl(plan);

    if (el.tagName.toLowerCase() === 'a') {
      el.href = url;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    } else {
      el.addEventListener('click', () => window.open(url, '_blank'));
    }
  });
};

const handleScrollCta = () => {
  const bar = document.getElementById('scrollTopCta');
  if (!bar) return;

  const toggle = () => {
    if (window.scrollY > 420) bar.classList.add('show');
    else bar.classList.remove('show');
  };

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();
};

const setupVideoModal = () => {
  const modal = document.getElementById('videoModal');
  const closeBtn = document.getElementById('modalClose');
  if (!modal || !closeBtn) return;

  document.querySelectorAll('.video-card, .play-btn').forEach((item) => {
    item.addEventListener('click', () => {
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
};

attachWhatsAppLinks();
handleScrollCta();
setupVideoModal();
