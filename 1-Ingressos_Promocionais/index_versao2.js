function mostrarResultado() {
    var select = document.getElementById("categoria");
    var categoria = select.options[select.selectedIndex].value;
    var textoCategoria = select.options[select.selectedIndex].text;
    var valor;

    switch (categoria) {
        case "idoso":
            valor = "Gratuidade";
            break;
        case "estudante":
            valor = "10 reais";
            break;
        case "casadinha":
            valor = "30 reais";
            break;
        case "trio":
            valor = "40 reais";
            break;
        case "outros":
            valor = "20 reais";
            break;
        default:
            valor = "Valor desconhecido";
    }

    document.getElementById("resultado").innerText = "Você escolheu: " + textoCategoria + " - Valor: " + valor;
}