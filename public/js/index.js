document.addEventListener('DOMContentLoaded', () => {
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  });

  
  document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
  });

 
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); 
      const targetId = link.getAttribute('href').substring(1); 
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start' 
        });
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelectorAll('.image');

  image.forEach(imageSelected => {
    imageSelected.addEventListener('click', () => {
      resetFocus();
      imageSelected.classList.add('active');
    });
  });

  function resetFocus() {
    image.forEach(i => i.classList.remove('active'));
  }
});
