"use strict";
//string, number, boolean
var nome = "Junior";
var idade = 27;
var possuiHobbies = true;
//array
var hobbies = ["Games", "Futebol", 1];
//tuplas
var endereco = ["Av. principal", 22];
//enums
var Cor;
(function (Cor) {
    Cor["Cinza"] = "Cinza";
    Cor["Verde"] = "Verde";
    Cor["Azul"] = "Verde";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
