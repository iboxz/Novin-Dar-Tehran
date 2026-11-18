import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { createStage, buildGate, buildGlass, buildShutter, buildBarrier, buildBalcony, buildFolding } from './models.js';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollSmoother);
ScrollTrigger.config({ ignoreMobileResize: true });
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const items = $$('.svc-item');
const links = $$('.catalog-nav a');
const factories = { jack: buildGate, glass: buildGlass, shutter: buildShutter, barrier: buildBarrier, balcony: buildBalcony };
const states = items.map(() => ({ progress: 0, shown: 0, manual: null, stage: null, attempted: false }));
let paused = false, motionOff = false, smoother = null, variant = 'folding';
const toggle = $('.motion-toggle');
const hero = createStage($('#hero-render'), { jack: buildGate(true) });
hero?.select('jack');
const render = index => {
  const state = states[index];
  state.shown = state.manual ?? (motionOff ? .4 : state.progress);
  state.stage?.update(state.shown);
  const button = items[index].querySelector('.model-toggle');
  button.textContent = state.shown > .5 ? 'بستن' : 'باز کردن';
  button.setAttribute('aria-pressed', String(state.shown > .5));
};
const mount = index => {
  const state = states[index]; if (state.attempted) return;
  state.attempted = true;
  const item = items[index]; const key = item.dataset.service;
  const models = key === 'sectional' ? { folding: buildFolding(), sectional: buildFolding(true) } : { [key]: factories[key]() };
  state.stage = createStage(item.querySelector('.render-host'), models);
  state.stage?.select(key === 'sectional' ? variant : key);
  item.querySelector('.product-controls').hidden = !state.stage;
  render(index);
};
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { mount(items.indexOf(entry.target)); observer.unobserve(entry.target); } }), { rootMargin: '500px' });
items.forEach((item, index) => {
  observer.observe(item);
  item.querySelector('.model-toggle').addEventListener('click', () => {
    const state = states[index]; const to = state.shown > .5 ? 0 : 1;
    state.manual = state.shown;
    gsap.to(state, { manual: to, duration: motionOff ? 0 : .8, ease: 'power2.inOut', overwrite: 'auto', onUpdate: () => render(index) });
  });
});
$$('.variant-btn').forEach(button => button.addEventListener('click', () => {
  variant = button.dataset.variant;
  $$('.variant-btn').forEach(entry => entry.setAttribute('aria-pressed', String(entry === button)));
  states[5].stage?.select(variant); render(5);
}));
$$('[data-consult]').forEach(link => link.addEventListener('click', () => {
  $('#service-type').value = link.dataset.consult;
  $('#service-type').dispatchEvent(new Event('input', { bubbles: true }));
}));
$$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const target = document.getElementById(link.hash.slice(1)); if (!target) return;
  event.preventDefault();
  if (smoother) smoother.scrollTo(target, true, 'top 110px');
  else gsap.to(window, { duration: motionOff ? 0 : .75, ease: 'power2.inOut', scrollTo: { y: target, offsetY: 100, autoKill: true } });
  if (link.closest('.catalog-nav')) { target.tabIndex = -1; target.focus({ preventScroll: true }); }
}));
const select = index => links.forEach((link, i) => link.setAttribute('aria-current', String(i === index)));
const media = gsap.matchMedia();
function configure() {
  media.revert();
  states.forEach(state => { gsap.killTweensOf(state); state.manual = null; });
  media.add({ desktop: '(min-width:64em)', mobile: '(max-width:63.99em)', reduced: '(prefers-reduced-motion:reduce)' }, context => {
    motionOff = paused || context.conditions.reduced;
    document.documentElement.classList.toggle('motion-paused', motionOff);
    toggle.hidden = false; toggle.disabled = context.conditions.reduced;
    toggle.setAttribute('aria-pressed', String(motionOff));
    toggle.setAttribute('aria-label', motionOff ? 'فعال کردن انیمیشن‌ها' : 'توقف انیمیشن‌ها');
    if (context.conditions.desktop && !motionOff) smoother = ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 1.05, smoothTouch: 0, effects: false });
    document.documentElement.dataset.smoother = smoother ? 'on' : 'off';
    if (context.conditions.desktop) ScrollTrigger.create({ trigger: '.catalog-layout', start: 'top 120px', end: 'bottom bottom', pin: '.catalog-nav', pinSpacing: false, invalidateOnRefresh: true });
    let active = 0;
    items.forEach((item, index) => {
      const trigger = ScrollTrigger.create({ trigger: item, start: 'top 48%', end: 'bottom 48%', onToggle(self) { if (self.isActive) select(index); else states[index].manual = null; } });
      if (trigger.isActive || trigger.progress === 1) active = index;
      if (!motionOff) {
        gsap.fromTo(states[index], { progress: 0 }, { progress: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top 80%', end: 'bottom 35%', scrub: .65 }, onUpdate: () => render(index) });
        gsap.fromTo(item.querySelector('.product-stage'), { y: context.conditions.desktop ? 65 : 24, rotationX: context.conditions.desktop ? -6 : 0, opacity: .5 }, { y: 0, rotationX: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'top 38%', scrub: .7 } });
      }
      render(index);
    });
    select(active); hero?.update(motionOff ? .3 : 0);
    if (!motionOff) {
      const heroState = { progress: 0 };
      gsap.to(heroState, { progress: 1, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: .7 }, onUpdate: () => hero?.update(heroState.progress) });
      $$('.section-head, .card, .stat').forEach(element => gsap.from(element, { y: 15, opacity: 0, duration: .4, scrollTrigger: { trigger: element, start: 'top 94%', once: true }, clearProps: 'transform,opacity' }));
    }
    return () => { smoother?.kill(); smoother = null; };
  });
  ScrollTrigger.refresh();
}
toggle.addEventListener('click', configureToggle);
function configureToggle() { paused = !paused; configure(); }
document.documentElement.classList.add('gsap-ready');
configure();
document.fonts.ready.then(() => ScrollTrigger.refresh());
new ResizeObserver(() => ScrollTrigger.refresh()).observe($('#quote-form'));
