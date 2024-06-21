/*Exercício 3
Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de números.*/


var numeros = [2 , 5 , 19 , 50 , 3 ,24];
var soma = 0;

for (var i = 0; i < numeros.length; i++) {
    var numero = numeros[i];
    soma = soma + numeros;
}

var media = soma / numeros.length;
alert(media);