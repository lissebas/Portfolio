function copyText() {
    // Obtener el elemento del botón
    var copyText = document.getElementById("email");

    // Obtener el texto del botón y eliminar los espacios extra
    var textToCopy = (copyText.textContent || copyText.innerText).trim();

    // Usar la API de portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy).then(function() {
        // Mostrar notificación de éxito usando SweetAlert2
        Swal.fire({
            icon: 'success',
            title: 'Texto copiado',
            text: 'La dirección de correo electrónico ha sido copiada al portapapeles.',
            timer: 2000,
            showConfirmButton: false
        });
    }, function(err) {
        // Mostrar notificación de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo copiar el texto. Por favor, inténtelo de nuevo.',
        });
        console.error("Error al copiar el texto: ", err);
    });
}

let currentIndex = 0;

function showSlide(index) {
  let slides = document.getElementsByClassName("gallery-item");
  let dots = document.getElementsByClassName("dot");

  if (index >= slides.length) { currentIndex = 0; }
  if (index < 0) { currentIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide(currentIndex += n);
}

function setSlide(n) {
  showSlide(currentIndex = n);
}

document.addEventListener("DOMContentLoaded", function() {
  let projects = document.querySelector('.projects');
  let dotsContainer = projects.querySelector('.dots');
  let slides = projects.getElementsByClassName("gallery-item");

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    dot.setAttribute("onclick", "setSlide(" + i + ")");
    dotsContainer.appendChild(dot);
  }

  // Mostrar la primera diapositiva
  showSlide(currentIndex);
});

