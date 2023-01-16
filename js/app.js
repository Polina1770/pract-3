'use strict';
//Задача 1
function buttonClick() {
    let elem = document.getElementById('elem');
    elem.innerHTML = 'Ку-Ку! <b>А я жирный!<b>';
}
//Задача 2
function button2Click() {
    let elem2 = document.getElementById('elem2');
    elem2.innerHTML = '<h3>Абзац превратился в h3!<h3>';
}

//Задача 3
function button3Click() {
    let elem3 = document.getElementById('elem3');
    elem3.innerHTML = '<h3>При нажатии на кнопку абзац станет h3, о текст останется<h3>';
}

//Задача 4
function button4Click() {
    let num1 = Number( document.getElementById("one").value );
    let num2 = Number( document.getElementById("two").value );
    rezult.innerHTML = num1 + num2;
 }

 //Задача 5
 function button5Click() {
    let elem5 = document.getElementsByTagName('p');
    for (var i = 0; i < elem5.length; i++) {
        elem5[i].innerHTML = i+1;
    }
}



