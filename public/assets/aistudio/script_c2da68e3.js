const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('.filter').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
    button.classList.add('active');
    const selected=button.dataset.filter;
    document.querySelectorAll('.project').forEach(card=>{
      card.hidden=selected!=='all' && card.dataset.category!==selected;
    });
  });
});

// Replace with a public studio inbox before deployment.
// The form prepares an email in the visitor's email app; it does not store messages.
const STUDIO_EMAIL='YOUR_EMAIL@example.com';
document.getElementById('contact-form').addEventListener('submit',event=>{
  event.preventDefault();
  const msg=document.getElementById('form-message');
  if(STUDIO_EMAIL==='YOUR_EMAIL@example.com'){
    msg.textContent='Setup needed: replace YOUR_EMAIL@example.com in script.js with the studio contact email before publishing.';
    return;
  }
  const d=new FormData(event.currentTarget);
  const subject=encodeURIComponent('Website enquiry — '+d.get('type'));
  const body=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nProject: '+d.get('type')+'\n\nDetails:\n'+d.get('details'));
  window.location.href='mailto:'+STUDIO_EMAIL+'?subject='+subject+'&body='+body;
  msg.textContent='Your email app should open with the enquiry prepared.';
});
