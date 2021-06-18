const nota11 = document.getElementById("nota11")
      nota22 = document.getElementById("nota22")
      nota33 = document.getElementById("nota33")

function verificarAprovacao() {
    const media = (Number(nota11.value) + Number(nota22.value) + Number(nota33.value)) / 3

    if (media >= 7) {
        alert("Aluno aprovado! média: " + media)
    } else if (media < 7 && media > 5) {
        alert("Aluno em recuperação! média: " + media)
    } else if (media < 5) {
        alert("Aluno reprovado! média: " + media)
    }
}