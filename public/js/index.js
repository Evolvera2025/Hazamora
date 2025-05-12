document.addEventListener('DOMContentLoaded', () => {
  // Crear el observador para animaciones al hacer scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Deja de observar después de hacerlo visible
      }
    });
  });

  // Observar todos los elementos con la clase fade-on-scroll
  document.querySelectorAll('.fade-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // Agregar funcionalidad de scroll suave para el menú de navegación
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      const targetId = link.getAttribute('href').substring(1); // Obtener el ID de la sección
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Desplazarse suavemente a la sección
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

const image = document.querySelectorAll('.image');

  for(let [, imageSelected] of image.entries())
  {
    imageSelected.addEventListener('click', function focus(){
      resetFocus();
      imageSelected.classList.toggle('.active')
    })
  }

  function resetFocus()
  {
    image.forEach(i => i.classList.remove('.active'))
  }
