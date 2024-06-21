function calcularDobro() {
    var valor = document.getElementById("inputValor").value;
    var dobro = valor * 2;
    document.getElementById("resultado").innerText = "O dobro de " + valor + " é " + dobro;
}