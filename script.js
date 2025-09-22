function mudarCor(){
    const cores = ["#a16464ff", "#858585ff", "#40b7c7ff", "#67d871ff", "#f0f0f0", "#e7c48cff"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    const corAtual = corAleatoria;
    if (corAtual == corAleatoria){
        //console.log("cor repetida");
        document.body.style.background = corAtual;
    } else{
        document.body.style.background = corAtual;
    }
}

function mostrarAlerta(){
    alert("Você clicou no botão! 🚀");
}

function alterarTexto(){
    const texto = document.getElementById("textoExtra");
    if (texto.style.display === "none"){
        texto.style.display = "block";
    } else{
        texto.style.display = "none";
    }
}