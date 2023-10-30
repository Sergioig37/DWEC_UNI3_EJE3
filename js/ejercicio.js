window.addEventListener("load", init);
var enlace = document.getElementById("aMostrar");
var parrafo = document.getElementById("pSalida");

function ocultarMostrar() {

    if (document.getElementById("pSalida").style.visibility === "visible") {
        document.getElementById("pSalida").style.visibility= "hidden";
        document.getElementById("aMostrar").innerHTML = "Mostrar";
    } else {
        document.getElementById("pSalida").style.visibility = "visible";
        document.getElementById("aMostrar").innerHTML = "Ocultar";
    }
}

function init() {
        document.getElementById("aMostrar").addEventListener("click", ocultarMostrar, false);
}