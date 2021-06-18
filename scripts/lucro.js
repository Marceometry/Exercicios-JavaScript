const preco = document.getElementById("preco")

function calcularVenda() {
    const valor = Number(preco.value)

    if (valor < 20) {
        alert(valor + valor * .45)
    } else {
        alert(valor + valor * .3)
    }
}