const valor = document.getElementById("valor-produto")

function calcularReajuste() {
    const value = Number(valor.value)
    alert(value + value * .15)
}