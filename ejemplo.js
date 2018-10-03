var nombre = "Juan";
var saludo = "!Hola ";

alert(saludo + nombre + "!");

/* -------------------------------*/
var num1 = 0;
var num2 = 1;
var suma = num1 + num2;
alert(suma);

/*--------------------------------*/
var nombre = prompt("Dime tu nombre");
var saludo = "�Hola " + nombre + "!";
alert(saludo);

/*-------------------------------*/

var num1 = parseInt(prompt("Dime un numero"));
var num2 = parseInt(prompt("Dime un numero"));
var suma = num1 + num2;
alert(suma);

/*-----------------------------------------*/

alert("Piensa un numero del 0 al 5");
alert("Contesta 1 para si y 0 para no");

var pre1 = parseInt(prompt("¿Tu numero es mayor o igual a 4?"));
if (pre1 == 1) {

    var pre2 = parseInt(prompt("¿Tu numero es mayor o igual a 6?"));
    if (pre2 == 1) {

        var pre3 = parseInt(prompt("¿Tu numero es mayor o igual a 7?"));
        if (pre3 == 1) {

            alert("TU NOMERO ES 7!!");
        } else {

            alert("TU NOMERO ES 6!!");
        }
    } else {

        var pre4 = parseInt(prompt("¿Tu numero es mayor o igual a 5?"));
        if (pre4 == 1) {

            alert("TU NOMERO ES 5!!");
        } else {

            alert("TU NOMERO ES 4!!");
        }
    }
} else {

    var pre5 = parseInt(prompt("¿Tu numero es mayor o igual a 2?"));
    if (pre5 == 1) {

        var pre6 = parseInt(prompt("¿Tu numero es mayor o igual a 3?"));
        if (pre6 == 1) {

            alert("TU NOMERO ES 3!!");
        } else {

            alert("TU NOMERO ES 2!!");
        }
    } else {

        var pre7 = parseInt(prompt("¿Tu numero es mayor o igual a 1?"));
        if (pre7 == 1) {

            alert("TU NOMERO ES 1!!");
        } else {

            alert("TU NOMERO ES 0!!");
        }
    }
}


/*--------------------------------------------------- */
setTimeout(function () {
    setText("label2", "Contesta 1 para si y 0 para no");
}, 2000);
setTimeout(function () {
    setText("label2", "Piensa un numero del 0 al 7");
}, 1000);

setTimeout(function () {
    var pre1 = parseInt(prompt("¿Tu numero es mayor o igual a 4?"));
    if (pre1 == 1) {
        var pre2 = parseInt(prompt("¿Tu numero es mayor o igual a 6?"));
        if (pre2 == 1) {
            var pre3 = parseInt(prompt("¿Tu numero es mayor o igual a 7?"));
            if (pre3 == 1) {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 7!!");
                }, 1000);
            } else {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 6!!");
                }, 1000);
            }
        } else {
            var pre4 = parseInt(prompt("¿Tu numero es mayor o igual a 5?"));
            if (pre4 == 1) {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 5!!");
                }, 1000);
            } else {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 4!!");
                }, 1000);
            }
        }
    } else {
        var pre5 = parseInt(prompt("¿Tu numero es mayor o igual a 2?"));
        if (pre5 == 1) {
            var pre6 = parseInt(prompt("¿Tu numero es mayor o igual a 3?"));
            if (pre6 == 1) {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 3!!");
                }, 1000);
            } else {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 2!!");
                }, 1000);
            }
        } else {
            var pre7 = parseInt(prompt("¿Tu numero es mayor o igual a 1?"));
            if (pre7 == 1) {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 1!!");
                }, 1000);
            } else {
                setTimeout(function () {
                    setText("label2", "TU NOMERO ES 0!!");
                }, 1000);
            }
        }
    }
}, 4000);
