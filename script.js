function numberGeneration() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    const receive = document.querySelector("#receive-number")

    if (min == max) {
        alert("O numeros São Iguais. Por favor Insira numero Validos!")
    }

    if (min > max) {
        alert("O valor minimo não pode ser maior que o Maximo!")
    }

    if (min < max) {
        receive.innerHTML = `Número Sorteado: ${result}`;
        receive.style.display = "block"
    }
}