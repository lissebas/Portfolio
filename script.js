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

// Seleccionar todos los elementos de la galería y los dots
const items = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let intervalId;

// Función para actualizar la visualización de las figuras
function updateGallery(index) {
  // Quitar la clase 'active' de todas las figuras y dots
  items.forEach(item => item.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Mostrar la figura y dot correspondiente al índice actual
  items[index].classList.add('active');
  dots[index].classList.add('active');
}

// Función para la transición automática cada 5 segundos
function startGallery() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateGallery(currentIndex);
  }, 5000);
}

// Detener la transición automática
function stopGallery() {
  clearInterval(intervalId);
}

// Iniciar la galería
startGallery();

// Añadir funcionalidad a los dots para permitir clics manuales
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateGallery(index);
    stopGallery(); // Detener la transición automática al hacer clic en un dot
  });
});

