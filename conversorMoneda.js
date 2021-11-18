"use strict";
exports.__esModule = true;
exports.conversor = void 0;
var conversor = /** @class */ (function () {
    function conversor() {
    }
    conversor.prototype.convertir = function (tipoMonedaIngresado, importeIngresado, tipoMonedaResultado) {
        if (tipoMonedaIngresado === "ARS" && tipoMonedaResultado === "USD") {
            this.importeResultado = importeIngresado / 100;
            return this.importeResultado;
        }
        if (tipoMonedaIngresado === "USD" && tipoMonedaResultado === "ARS") {
            this.importeResultado = importeIngresado * 100;
            return this.importeResultado;
        }
        return -1;
    };
    return conversor;
}());
exports.conversor = conversor;
var pruebaConversor = new conversor();
console.log("La conversion es la siguiente: $" + pruebaConversor.convertir("ARS", 190, "USD"));
console.log("La conversion es la siguiente: $" + pruebaConversor.convertir("USD", 10, "ARS"));
