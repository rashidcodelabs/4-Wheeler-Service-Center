
// Smooth scroll for nav links
document.querySelectorAll('.main-nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// WhatsApp button fallback handler: ensure it opens when clicked (useful if CSS/icon overlay causes issues)
const waBtn = document.getElementById('whatsappBtn');
if(waBtn){
  waBtn.addEventListener('click', function(evt){
    // Open the chat in a new tab using WA link (international format with country code)
    const waLink = 'https://wa.me/917887633918';
    // In case the anchor default doesn't work on some devices, explicitly open it.
    window.open(waLink, '_blank', 'noopener');
    // allow default anchor behavior as well
  });
}
