"use strict";

let r = 128;
let g = 128;
let b = 230;

const boton = document.querySelector(".botonColor");

let inputsCambiados = true;

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

boton.addEventListener("click", () => {
    let contendor = document.querySelector(".historial");

    if (inputsCambiados === true) {
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

    if (contendor.childElementCount === 11) {
        contendor.removeChild(contendor.firstElementChild);
    }
})

document.addEventListener("DOMContentLoaded", function() {
    registrarValor();
})