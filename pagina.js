// Obtén los botones por su ID
const botonFacebook = document.getElementById("botonfa");
const botonInstagram = document.getElementById("botonins");
const botonTwitter = document.getElementById("botontw");
// Agrega un evento de mouseover para resaltar el borde en amarillo
botonFacebook.addEventListener("mouseover", () => {
    botonFacebook.style.border = "1px solid rgb(229, 229, 106)";
});

    // Obtener el botón por su id
    var boton = document.getElementById("botontw");

    // Agregar un borde amarillo cuando el mouse entra al botón
    boton.addEventListener("mouseenter", function() {
        boton.style.border = "1px solid yellow"; // Cambia el color y el estilo del borde según tus preferencias
    });

    // Eliminar el borde cuando el mouse sale del botón
    boton.addEventListener("mouseleave", function() {
        boton.style.border = "none"; // Elimina el borde
    });




botonInstagram.addEventListener("mouseover", () => {
    botonInstagram.style.border = "1px solid rgb(229, 229, 106)";
});

// Agrega un evento de mouseout para quitar el resaltado del borde
botonFacebook.addEventListener("mouseout", () => {
    botonFacebook.style.border = "none";
});

botonInstagram.addEventListener("mouseout", () => {
    botonInstagram.style.border = "none";
});

//codigo para hacer funcionar el swiper de la pagina principal
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000, // Establece el intervalo de tiempo en milisegundos (3 segundos en este caso)
      disableOnInteraction: false, // Permite que la reproducción automática continúe incluso cuando el usuario interactúa con el Swiper
    },
  });
  
// funcion para que se muestre el texto poco a poco//
   // Obtén el elemento h3 por su ID
      // Obtener el elemento h3 por su ID
      var elementoH3 = document.getElementById("bienvenido");

      // Obtener el texto original dentro del elemento h3
      var textoOriginal = elementoH3.textContent;

      // Limpia el contenido del elemento h3
      elementoH3.textContent = "";

      // Función para mostrar gradualmente el texto
      function mostrarTextoGradualmente(indice) {
          if (indice <= textoOriginal.length) {
              elementoH3.textContent = textoOriginal.slice(0, indice);
              setTimeout(function () {
                  mostrarTextoGradualmente(indice + 1);
              }, 60); // Puedes ajustar la velocidad cambiando este valor
          }
      }

      // Iniciar la animación de aparición gradual
      mostrarTextoGradualmente(0);
      function mostrarTextoConRetraso() {
        var elementoH3 = document.getElementById("texto_futsal");
        elementoH3.classList.add("animate__backInDown"); // Agregar la clase de animación
    }

//aparecer info wasap//
document.addEventListener("DOMContentLoaded", function() {
  // Espera 5 segundos (5000 milisegundos) antes de mostrar el elemento de WhatsApp
  setTimeout(function() {
    // Agrega la clase para mostrar el elemento de WhatsApp
    document.getElementById("whatsapp-container").classList.add("visible");
  }, 5000);
});
