function calcularVelocidade() {
    const espaco = parseFloat(document.getElementById('espaco').value);
    const tempo = parseFloat(document.getElementById('tempo').value);

    if (isNaN(espaco) || isNaN(tempo) || tempo <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos para espaço e tempo.';
        return;
    }

    const velocidade = espaco / tempo;

    document.getElementById('resultado').innerText = `A velocidade é ${velocidade.toFixed(2)} metros por segundo.`;
}