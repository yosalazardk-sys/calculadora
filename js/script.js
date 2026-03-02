let pantalla = document.getElementById("pantalla");

function agregar(valor){
    pantalla.value += valor;
}

function limpiar(){
    pantalla.value = "";
}

function borrar(){
    pantalla.value = pantalla.value.slice(0, -1)
}

function calcular(){
    try {
        let expresion = pantalla.value;

        expresion = expresion.replace(/(\d+)%/g,"$1/100");
        pantalla.value = eval(expresion);
        
    } catch (error) {
        pantalla.value = "Error";
    }
}