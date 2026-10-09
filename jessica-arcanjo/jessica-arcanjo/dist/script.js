// Número provisório fornecido para teste. Substituir pelo contato definitivo.
const contactNumber = '554291566511';
const baseMessage = 'Olá! Gostaria de saber mais e agendar uma avaliação na Clínica Jéssica Arcanjo.';
document.querySelectorAll('[data-contact]').forEach(link => { link.href = `https://wa.me/${contactNumber}?text=${encodeURIComponent(baseMessage)}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; });
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); }));
const careContent = { facial: ['Estética facial', 'Um cuidado que começa pela compreensão dos seus traços e dos seus objetivos. Converse sobre possibilidades para valorizar a harmonia do rosto, mantendo a sua individualidade.'], corporal: ['Estética corporal', 'Seu corpo tem uma história e necessidades próprias. O primeiro passo é conversar sobre suas expectativas e avaliar quais possibilidades de cuidado fazem sentido para você.'], pele: ['Qualidade da pele', 'Textura, luminosidade e rotina de cuidados merecem um olhar individual. Uma avaliação é o ponto de partida para entender sua pele e orientar os próximos passos.'] };
const dialog = document.querySelector('#care-dialog');
document.querySelectorAll('[data-care]').forEach(button => button.addEventListener('click', () => { const [title, description] = careContent[button.dataset.care]; document.querySelector('#dialog-title').textContent = title; document.querySelector('#dialog-description').textContent = description; dialog.querySelector('[data-contact]').href = `https://wa.me/${contactNumber}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre ' + title.toLowerCase() + ' na Clínica Jéssica Arcanjo.')}`; dialog.showModal(); }));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
