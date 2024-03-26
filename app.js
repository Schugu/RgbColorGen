"use strict";

function registrarValor() {
    let inputs = document.querySelectorAll('.input'); 

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            let r = inputs[0].value;
            let g = inputs[1].value;
            let b = inputs[2].value;
             
            document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    registrarValor();
})