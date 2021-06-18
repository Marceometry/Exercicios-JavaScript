const numero = document.getElementById("numero")
      numero2 = document.getElementById("numero2")

function verificarPosOuNeg() {
    const num = Number(numero.value)

    if (num < 0) {
        alert("Você digitou um número negativo")
    } else {
        alert("Você digitou um número positivo")
    }
}

function verificarPosNegOuZero() {
    const num = Number(numero2.value)

    if (num < 0) {
        alert("Você digitou um número negativo")
    } else if (num > 0) {
        alert("Você digitou um número positivo")
    } else {
        alert("Você digitou zero")
    }
}