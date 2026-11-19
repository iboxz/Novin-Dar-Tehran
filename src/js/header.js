// هدر: جمع‌شدن نوار بالایی هنگام اسکرول + هایلایت بخش فعال در ناوبری
const header = document.querySelector('.site-header');
const navLinks = [...document.querySelectorAll('.nav a[href^="#"], .menu-list a[href^="#"]')];
const spyTargets = ['home', 'services', 'about', 'contact']
  .map(id => document.getElementById(id))
  .filter(Boolean);
let current = '';
const setCurrent = id => {
  if (id === current) return;
  current = id;
  navLinks.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
};
let ticking = false, trail;
const update = () => {
  ticking = false;
  header.classList.toggle('is-scrolled', window.scrollY > 16);
  // بخش فعال: آخرین بخشی که لبهٔ بالایی‌اش از خط ۴۲٪ viewport گذشته باشد
  const line = window.innerHeight * 0.42;
  let active = spyTargets[0]?.id;
  for (const section of spyTargets) {
    if (section.getBoundingClientRect().top <= line) active = section.id;
  }
  if (active) setCurrent(active);
};
const requestUpdate = () => {
  if (!ticking) { ticking = true; requestAnimationFrame(update); }
  // به‌روزرسانی پایانی پس از توقف اسکرول (برای اسکرول نرمِ اینرسی‌دار)
  clearTimeout(trail);
  trail = setTimeout(update, 1100);
};
window.addEventListener('scroll', requestUpdate, { passive: true });
window.addEventListener('resize', requestUpdate);
update();
