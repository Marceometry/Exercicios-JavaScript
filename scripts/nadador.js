const idade = document.getElementById("idade")

function classificarNadador() {
    const valor = Number(idade.value)

    if (valor >= 18) {
        alert("Categoria: Adulto!")
    } else if (valor >= 14) {
        alert("Categoria: Juvenil!")
    } else if (valor >= 9) {
        alert("Categoria: Infantil!")
    } else if (valor < 9) {
        alert("Categoria: Mirim!")
    }
}