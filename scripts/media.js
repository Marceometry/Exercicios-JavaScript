const nota1 = document.getElementById("nota1")
      nota2 = document.getElementById("nota2")
      nota3 = document.getElementById("nota3")

function calcularMedia() {
    alert((Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3)
}