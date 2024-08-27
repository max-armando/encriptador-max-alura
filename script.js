//declaracion de variables
const textoEntrada = document.querySelector(".texto");
const textoSalida = document.querySelector(".salida");
const areaDeCopiado = document.querySelector(".area__copiar");
const cuadroSinTexto = document.querySelector(".sin__texto");
const botonEncriptar = document.querySelector(".btn__encriptar");
const botonDesencriptar = document.querySelector(".btn__desencriptar");
const botonCopiar = document.querySelector(".btn__copiar");

//funcion encriptar
const encriptadorG7 = {
    comparador: function (text) {
        const patrones = /[A-ZÀ-ÿ]/;
        if (patrones.test(text)) {
            return false;
        } else {
            return true;
        }
    },
    //codigo encriptacion
    encriptar: function (text) {
        const textoEncriptado = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        return textoEncriptado;
    },
    //codigo desencriptacion
    desencriptar: function (text) {
        const textoDesencriptado = text
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    },
};

//mostrar texto encriptado o imagen
const envioDeCaracteres = (text) => {
    if(!text){
        cuadroSinTexto.classList.remove("hidden");
        areaDeCopiado.classList.add("hidden");
        return;
    }
    textoSalida.value = text;
    cuadroSinTexto.classList.add("hidden");
    areaDeCopiado.classList.remove("hidden");
    textoEntrada.value = "";
}

//condiciones que debe cumplir
const noCumpleTexto = (show) => {
    const error = document.querySelector("#informacion");

    if(show){
        error.classList.add("alertainformacion")
    } else {
        error.classList.remove("alertainformacion")
    }
}

//boton para encriptar
botonEncriptar.onclick = () => {
    if (encriptadorG7.comparador(textoEntrada.value) == false) {
        envioDeCaracteres();
        noCumpleTexto(true);
        return;
    }
    noCumpleTexto(false);
    const encodedText = encriptadorG7.encriptar(textoEntrada.value);
    envioDeCaracteres(encodedText);
};

//boton para desencriptar
botonDesencriptar.onclick = () => {
    if (encriptadorG7.comparador(textoEntrada.value) == false) {
        envioDeCaracteres();
        noCumpleTexto(true);
        return;
    }
    noCumpleTexto(false);
    const decodedText = encriptadorG7.desencriptar(textoEntrada.value);
    envioDeCaracteres(decodedText);
};

//boton para copiar
botonCopiar.onclick = () => {
    const textCopied = textoSalida.value;
    botonCopiar.innerHTML = "¡Copiado!";
    setTimeout(() => {
        botonCopiar.innerHTML = "Copiar";
    }, 2000);
    navigator.clipboard.writeText(textCopied);
};

    