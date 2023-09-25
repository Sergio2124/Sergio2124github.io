document.addEventListener("DOMContentLoaded", function() {
    var btnMostrar = document.getElementById("btnMostrar");
    var divOculto = document.getElementById("divoculto");

    btnMostrar.addEventListener("click", function() {
        divOculto.style.display = "flex";
    });
});
