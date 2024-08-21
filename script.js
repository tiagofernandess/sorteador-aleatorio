function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (min >= max) {
        alert("O Valor minimo tem que ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;

<<<<<<< HEAD
    const receiveNumber = document.querySelector(".receive-number")


    receiveNumber.innerHTML = `Número Sorteado: ${result}`
    receiveNumber.style.display = "block"
}
=======
    alert(result)
    } 
}

    
>>>>>>> 5806fcffb64ad83398974e5ee64d52697d24fdd1
