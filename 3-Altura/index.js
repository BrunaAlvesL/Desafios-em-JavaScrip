function mostrarMaisAlto () {
    const nome1 = document.getElementById("nome1").value
    const altura1 = parseFloat(document.getElementById("altura1").value)
    const nome2 = document.getElementById("nome2").value
    const altura2 = parseFloat(document.getElementById("altura2").value)
    const nome3 = document.getElementById("nome3").value
    const altura3 = parseFloat(document.getElementById("altura3").value)

    let maisAlto = nome1
    let maiorAltura = altura1

    if (altura2 > maiorAltura) {
        maisAlto = nome2
        maiorAltura = altura2
    }

    if (altura3 > maiorAltura) {
        maisAlto = nome3
        maiorAltura = altura3
    }

    document.getElementById("resultado").innerText = `A pessoa mais alta é ${maisAlto} com ${maiorAltura} cm de altura.`;
}

