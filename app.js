"use strict"; // uso estrito 

// Declaraciones de variables. 
let r = 128;
let g = 128;
let b = 230;
const boton = document.querySelector(".botonColor");
let inputsCambiados = true; // Esto es para saber si se modifico algun input.

// función para registrar el valor de los imputs y definirlos en una variable.
function registrarValor() {
    let inputs = document.querySelectorAll('.input'); 
    let lienzo = document.querySelector(".lienzo");
    lienzo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    let input1Value = document.querySelector(".input1Value");
    let input2Value = document.querySelector(".input2Value");
    let input3Value = document.querySelector(".input3Value");

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            r = inputs[0].value;
            g = inputs[1].value;
            b = inputs[2].value;
            
            input1Value.textContent = r;
            input2Value.textContent = g;
            input3Value.textContent = b;
            
            lienzo.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            
            inputsCambiados = true;
        });
    });
}

// Evento de click para crear historial de colores
boton.addEventListener("click", () => {
    let contendor = document.querySelector(".historial");

    if (inputsCambiados === true) { // creador de estructura
        let div = document.createElement("div");
        div.classList.add("elementoHistorial");
        contendor.appendChild(div);
        let section = document.createElement("section");
        section.classList.add("muestraColor");
        div.appendChild(section);
        let span = document.createElement("span");
        span.classList.add("muestraTexto");
        div.appendChild(span);

        section.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        span.textContent = `RGB(${r}, ${g}, ${b})`

        inputsCambiados = false;
    } else (
        alert("Modifica los colores para crear un historial.")
    );

    if (contendor.childElementCount === 11) { // Para que no se acumulen muchos elementos en el historial.
        contendor.removeChild(contendor.firstElementChild);
    }
})

// Main
document.addEventListener("DOMContentLoaded", function() {
    registrarValor();
})