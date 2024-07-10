const entradaT = document.querySelector(".entradaTexto");
const salidaT = document.querySelector(".salidaTexto");
const matrizCon = [["e","enter"], ["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
const boton = document.querySelector("copiar");

function clipboard(){
    salidaT.select();
    navigator.clipboard.writeText(salidaT.value);
    salidaT.value = "";
    entradaT.value="";
    document.getElementById("btncopiar").style.display = "none"; 
    document.getElementById("munieco").style.display = "block";
    document.getElementById("h1titulo").style.display = "block";
    document.getElementById("parrafo").style.display = "block";
}   
    // alert("se copio perfectamente");

function btnEncriptar(){
    const textEncriptado = encriptar(entradaT.value);
    salidaT.value = textEncriptado;        
    document.getElementById("btncopiar").style.display = "block";
    document.getElementById("munieco").style.display = "none";
    document.getElementById("h1titulo").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
}
function btnDescriptar(){
    const textDescriptado = desencriptar(entradaT.value);
    salidaT.value = textDescriptado;
    document.getElementById("btncopiar").style.display = "block";
    document.getElementById("munieco").style.display = "none";
    document.getElementById("h1titulo").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
}

function encriptar(textAencriptar){    
    textAencriptar = textAencriptar.toLowerCase();
    for(let i=0;i<matrizCon.length;i++){
        if(textAencriptar.includes(matrizCon[i][0])){
            textAencriptar = textAencriptar.replaceAll(matrizCon[i][0],matrizCon[i][1]);            
        }
    }
    return textAencriptar;
}
function desencriptar(textDesencriptar){
    textDesencriptar = textDesencriptar.toLowerCase();
    for(let i=0;i<matrizCon.length;i++){
        if(textDesencriptar.includes(matrizCon[i][1])){
            textDesencriptar = textDesencriptar.replaceAll(matrizCon[i][1],matrizCon[i][0]);
        }
    }
    return textDesencriptar;
}
