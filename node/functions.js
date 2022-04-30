/*function sum(a,b){
    return a+b;
}*/

/*const sum = (a,b) => {
    return a+b;
}*/

//exports.sum = (a,b) => a+b;
//exports.pets = [`michi`,`firulay`,`cenizas`];
/*module.exports = {
    sum
}*/

//Eejrcicio1
/*function  calcular(edad){

    var edad = prompt("Cual es tu edad: ");
  

    if (edad > 18){
       write("Es mayor de edad: ");
    
    }else{
        write("Es menor de edad: ");
    }
     


}*/

function operaciones(op) {

        var op = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    }


    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

}

//Ejercicio3
//exports.comida = [`Casamiento`,`Platano frito`,`Frijol licuado`,`Pupusas`,`Riguas`]: