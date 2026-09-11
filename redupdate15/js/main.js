const toggle=document.querySelector('.nav__toggle');
const links=document.querySelector('.nav__links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('#form-status');s.textContent='Thanks — your message has been recorded on this page. Connect the form to the NSS mailbox before publishing.';form.reset()})}
document.querySelectorAll('#year').forEach(y=>y.textContent=new Date().getFullYear());
