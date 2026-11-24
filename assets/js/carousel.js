// Optional: prev/next buttons for the home-page project carousel.
(function () {
  var c = document.querySelector('[data-project-carousel]');
  var ctl = document.querySelector('.project-controls');
  if (!c || !ctl) return;
  var prev = ctl.querySelector('[data-project-step="-1"]');
  var next = ctl.querySelector('[data-project-step="1"]');
  function update() {
    var overflow = c.scrollWidth > c.clientWidth + 4;
    ctl.hidden = !overflow;
    prev.disabled = c.scrollLeft <= 2;
    next.disabled = c.scrollLeft + c.clientWidth >= c.scrollWidth - 2;
  }
  function step(dir) {
    var card = c.querySelector('.project-card');
    var gap = parseFloat(getComputedStyle(c).columnGap) || 25;
    c.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
  }
  prev.addEventListener('click', function () { step(-1); });
  next.addEventListener('click', function () { step(1); });
  c.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
