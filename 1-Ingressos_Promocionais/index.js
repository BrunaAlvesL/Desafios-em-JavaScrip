const entrada = prompt("Qual é sua categoria:" +
"\nidoso = gratuidade;" +
"\nestudante (meia-entrada) = 10 reais; " +
"\ncasadinha (duas pessoas) = 30 reais; " +
"\ntrio (três pessoas) = 40 reais; " +
"\noutros = 20 reais.")

if (entrada === "idoso"){
    alert("Entrada gratuita")
} else if(entrada === "estudante"){
    alert("estudante (meia-entrada) = 10 reais")
} else if (entrada === "casadinha"){
    alert("casadinha (duas pessoas) = 30 reais")
} else if(entrada === "trio") {
    alert("trio (três pessoas) = 40 reais")
} else if(entrada === "outros"){
    alert ("outros = 20 reais ")
}

