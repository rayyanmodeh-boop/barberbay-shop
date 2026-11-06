const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
  toggle.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
const form = document.querySelector('#booking-form');
const dateInput = form.elements.date;
const timeInput = form.elements.time;
function qatarToday() {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Qatar', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const get = key => parts.find(part => part.type === key).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
dateInput.min = qatarToday();
function updateTimes() {
  const previous = timeInput.value;
  const friday = dateInput.value && new Date(dateInput.value + 'T12:00:00').getDay() === 5;
  timeInput.replaceChildren(new Option('Select a time', ''));
  for (let minutes = friday ? 780 : 570; minutes < 1440; minutes += 30) {
    const hour = Math.floor(minutes / 60);
    const label = `${hour % 12 || 12}:${minutes % 60 === 0 ? '00' : '30'} ${hour >= 12 ? 'PM' : 'AM'}`;
    timeInput.add(new Option(label, label));
  }
  if (Array.from(timeInput.options).some(option => option.value === previous)) timeInput.value = previous;
}
updateTimes();
dateInput.addEventListener('change', updateTimes);
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  form.elements.service.value = link.dataset.service;
}));
form.addEventListener('submit', event => {
  event.preventDefault();
  dateInput.min = qatarToday();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  if (!String(data.get('name')).trim()) { form.elements.name.setCustomValidity('Please enter your name.'); form.elements.name.reportValidity(); return; }
  const message = `Hello Barber bay Shop! I'd like to request an appointment.\n\nName: ${String(data.get('name')).trim()}\nPhone: ${data.get('phone')}\nService: ${data.get('service')}\nPreferred date: ${data.get('date')}\nPreferred time: ${data.get('time')} (Doha time)${data.get('message') ? '\nNotes: ' + data.get('message') : ''}\n\nPlease confirm availability and pricing. Thank you!`;
  const url = 'https://wa.me/97451856566?text=' + encodeURIComponent(message);
  const status = document.querySelector('#form-status');
  status.replaceChildren(document.createTextNode('Your request is prepared. Send it in WhatsApp to request confirmation. '));
  const link = document.createElement('a');
  link.href = url; link.target = '_blank'; link.rel = 'noopener'; link.textContent = 'Continue to WhatsApp ↗';
  status.append(link); status.hidden = false;
  window.open(url, '_blank', 'noopener,noreferrer');
});
form.elements.name.addEventListener('input', () => form.elements.name.setCustomValidity(''));
document.querySelector('#year').textContent = new Date().getFullYear();
