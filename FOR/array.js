var meuArray = [
    "Bruna",
    "Carol",
    "Carla",
]

meuArray.push("Kaio")
meuArray.unshift("Lima")

for (var i = 0; i < meuArray.length; i++) {
    var nome = meuArray[i];
    console.log("O nome é "+ nome);
}