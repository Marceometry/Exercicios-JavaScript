const salario = document.getElementById("salario")
      aumento = document.getElementById("aumento")

function calcularSalario() {
    const sal = Number(salario.value)
          aum = Number(aumento.value)

    alert(sal + sal * (aum / 100))
}