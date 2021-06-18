const valor1 = document.getElementById("valor1")
      valor2 = document.getElementById("valor2")

function somar() {
    const v1 = Number(valor1.value)
          v2 = Number(valor2.value)

    let soma = v1 + v2

    if (soma > 20) {
        alert(soma + 8)
    } else if (soma <= 20) {
        alert(soma - 5)
    }
}