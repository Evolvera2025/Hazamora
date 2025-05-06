
  // Crear el observador
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deja de observar después de hacerlo visible
      }
    });
  });

  // Observar todos los elementos con la clase
  document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
  });

