"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function Circunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.Circunferencia = Circunferencia;
    function Retangulo(base, altura) {
        return base * altura;
    }
    Areas.Retangulo = Retangulo;
})(Areas || (Areas = {}));
