function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que o valor máximo.")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        const receiveNumber = document.querySelector(".receive-number")

        receiveNumber.innerHTML = `Número Sorteado: ${result}`
        receiveNumber.style.display = "block"
    }



}