const contact = {
  phone: '[PLACEHOLDER_PHONE]',
  messenger: '[PLACEHOLDER_MESSENGER]',
  servicePages: {}
};
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const desktop = matchMedia('(min-width: 68em)');
const normalizeDigits = value => value.replace(/[۰-۹]/g, digit => '۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)).replace(/[٠-٩]/g, digit => '٠١٢٣٤٥٦٧٨٩'.indexOf(digit));
const normalizePhone = value => normalizeDigits(value).replace(/[\s()\-]/g, '');
const validPhone = value => /^(?:0[1-9]\d{9}|(?:\+98|0098)[1-9]\d{9})$/.test(value);
const secureURL = value => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch { return null; }
};

const phone = normalizePhone(contact.phone);
if (validPhone(phone)) {
  $$('[data-phone-link]').forEach(link => { link.href = `tel:${phone}`; });
  $$('[data-phone-label]').forEach(label => { label.textContent = contact.phone; });
}
const messenger = secureURL(contact.messenger);
if (messenger) {
  $$('[data-messenger-link]').forEach(link => { link.href = messenger; link.rel = 'noopener noreferrer'; });
  $$('[data-messenger-label]').forEach(label => { label.textContent = messenger; });
}

const menu = $('#mobile-menu');
const menuButton = $('.menu-btn');
const nativePopover = typeof menu.showPopover === 'function';
const menuIsOpen = () => nativePopover ? menu.matches(':popover-open') : menu.classList.contains('is-open');
const closeMenu = () => {
  if (!menuIsOpen()) return;
  if (nativePopover) menu.hidePopover();
  else menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'باز کردن منو');
};
if (nativePopover) {
  menu.addEventListener('toggle', event => {
    const open = event.newState === 'open';
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  });
} else {
  document.documentElement.classList.add('js-menu');
  menuButton.removeAttribute('popovertarget');
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'بستن منو' : 'باز کردن منو');
  });
  document.addEventListener('click', event => {
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuIsOpen()) { closeMenu(); menuButton.focus(); }
  });
}
$$('a', menu).forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const target = $(link.hash || '#contact');
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}));
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });

const dialog = $('#service-dialog');
const serviceSelect = $('#service-type');
let dialogService = '';
$$('[data-details]').forEach(link => {
  const externalPage = secureURL(contact.servicePages[link.dataset.details]);
  if (externalPage) { link.href = externalPage; return; }
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    const item = link.closest('.svc-item');
    dialogService = item.dataset.service;
    $('#dialog-title').textContent = $('.service-select', item).textContent;
    $('#dialog-description').textContent = $('.svc-body p', item).textContent;
    dialog.showModal();
  });
});
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.x || event.clientX > box.x + box.width || event.clientY < box.y || event.clientY > box.y + box.height) dialog.close();
});
$('#dialog-contact').addEventListener('click', () => {
  serviceSelect.value = dialogService;
  serviceSelect.dispatchEvent(new Event('input', { bubbles: true }));
  dialog.close();
  $('#full-name').focus({ preventScroll: true });
});

const form = $('#quote-form');
const nameInput = $('#full-name');
const phoneInput = $('#phone');
const result = $('#request-result');
const status = $('#form-status');
nameInput.addEventListener('input', () => nameInput.setCustomValidity(nameInput.value && !nameInput.value.trim() ? 'لطفاً نام خود را وارد کنید.' : ''));
phoneInput.addEventListener('input', () => phoneInput.setCustomValidity(phoneInput.value && !validPhone(normalizePhone(phoneInput.value)) ? 'شمارهٔ ایران را کامل، با ۰ یا ۹۸+ وارد کنید.' : ''));
form.addEventListener('input', () => { result.hidden = true; status.textContent = ''; });
form.addEventListener('submit', event => {
  event.preventDefault();
  nameInput.setCustomValidity(nameInput.value.trim() ? '' : 'لطفاً نام خود را وارد کنید.');
  phoneInput.setCustomValidity(validPhone(normalizePhone(phoneInput.value)) ? '' : 'شمارهٔ ایران را کامل، با ۰ یا ۹۸+ وارد کنید.');
  if (!form.reportValidity()) return;
  const service = serviceSelect.selectedOptions[0].textContent;
  $('#request-text').value = [
    'درخواست مشاوره و قیمت — نوین درب تهران',
    `نام: ${nameInput.value.trim()}`,
    `شمارهٔ تماس: ${normalizePhone(phoneInput.value)}`,
    `نوع خدمت: ${service}`,
    $('#description').value.trim() ? `توضیح: ${$('#description').value.trim()}` : ''
  ].filter(Boolean).join('\n');
  result.hidden = false;
  status.textContent = 'متن درخواست آماده شد، اما ارسال نشده است. می‌توانید آن را کپی کنید.';
  $('#request-text').focus();
});
$('#copy-request').addEventListener('click', async () => {
  const text = $('#request-text');
  try {
    if (!navigator.clipboard) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(text.value);
    status.textContent = 'متن درخواست کپی شد. ارسال آن باید توسط شما انجام شود.';
  } catch {
    text.focus();
    text.select();
    status.textContent = 'کپی خودکار در دسترس نیست؛ متن انتخاب شده را با گزینهٔ کپی دستگاه خود کپی کنید.';
  }
});
