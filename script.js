let cor = 0
function mudarCor(){
    const cores = ["#FF6347", "#FF7F50", "#FF8C00", "#FFA500", "#FF69B4", "#FF1493", "#FF4500", "#DB7093", "#E9967A", "#F08080", "#CD5C5C", "#DC143C", "#BDB76B",
    "#BA55D3", "#DA70D6", "#C71585", "#A0522D", "#CD853F", "#D2B48C", "#BC8F8F", "#A0522D", "#f9f9f9"]; //22 CORES
    document.body.style.background = cores[cor];
    cor++;
    if (cor == cores.length){
        cor = 0;
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

function alterarCSS(){
    const cssFile = document.getElementById("cssFile");
    if(cssFile.disabled){
        cssFile.disabled = false;
    } else{
        cssFile.disabled = true;
    }
}