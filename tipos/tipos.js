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
//funções
// tipo void não retorna nada
function retornaMeuNome() {
    return nome;
}
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(20, 20));
//tipo função
var calculo;
calculo = multiplicar;
//objetos
var usuarios = {
    nome: "Junior",
    idade: 27
};
//Desafio
var funcionario = {
    supervisores: ["Junior", "Joice", "Duarte"],
    batePonto: function (horas) {
        if (horas <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
var funcionario2 = {
    supervisores: ["Junior", "Joice", "Duarte"],
    batePonto: function (horas) {
        if (horas <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
//Union types - dois tipos
var nota = 10;
//Tipo never - erro,laço infinito...
function falha(msg) {
    throw new Error(msg);
}
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: "Junior",
    contaBancaria: contaBancaria,
    contatos: ["97016-3734", "2235-6908"]
};
