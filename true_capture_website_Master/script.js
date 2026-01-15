(function(){
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
})();


/* v20-R dropdown (services) */
(function(){
  const dropdown = document.querySelector('[data-services-dd]');
  const btn = document.querySelector('[data-services-btn]');
  if(!dropdown || !btn) return;

  function setOpen(open){
    dropdown.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }

  btn.addEventListener('click', function(e){
    e.preventDefault();
    const open = dropdown.classList.contains('is-open');
    setOpen(!open);
  });

  document.addEventListener('click', function(e){
    if(!dropdown.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setOpen(false);
  });
})();

/* Format accordion toggle */
function toggleFormat(button) {
  const item = button.closest('.format-item');
  const wasActive = item.classList.contains('active');
  
  // Close all other items
  document.querySelectorAll('.format-item').forEach(function(otherItem) {
    if (otherItem !== item) {
      otherItem.classList.remove('active');
    }
  });
  
  // Toggle current item
  if (wasActive) {
    item.classList.remove('active');
  } else {
    item.classList.add('active');
  }
}

