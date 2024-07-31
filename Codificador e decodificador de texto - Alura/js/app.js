let textoInput = document.querySelector("#input-texto");
let textoOutput = document.querySelector("#output-texto");
let textoSaida = document.getElementById('output-texto');
let textoEntrada = document.getElementById('input-texto');


function criptografar() {
    let texto = textoInput.value;
    let resultadoCriptografia = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    textoSaida.innerHTML = resultadoCriptografia;
}

function descriptografar() {
    let texto = textoInput.value;
    let resultadoDescriptografia = texto.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');
    
    textoSaida.innerHTML = resultadoDescriptografia;
}
