"use strict";
//string, number, boolean
let nome = "Junior";
let idade = 27;
let possuiHobbies = true;
//array
let hobbies = ["Games", "Futebol", 1];
//tuplas
let endereco = ["Av. principal", 22];
//enums
var Cor;
(function (Cor) {
    Cor["Cinza"] = "Cinza";
    Cor["Verde"] = "Verde";
    Cor["Azul"] = "Verde";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
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
let calculo;
calculo = multiplicar;
//objetos
let usuarios = {
    nome: "Junior",
    idade: 27
};
//Desafio
let funcionario = {
    supervisores: ["Junior", "Joice", "Duarte"],
    batePonto(horas) {
        if (horas <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
let funcionario2 = {
    supervisores: ["Junior", "Joice", "Duarte"],
    batePonto(horas) {
        if (horas <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do horário";
        }
    }
};
//Union types - dois tipos
let nota = 10;
//Tipo never - erro,laço infinito...
function falha(msg) {
    throw new Error(msg);
}
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: "Junior",
    contaBancaria: contaBancaria,
    contatos: ["97016-3734", "2235-6908"]
};
