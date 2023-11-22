"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contador = void 0;
class contador {
    constructor(valor) {
        this.valor = valor;
        if (valor) {
            this.valor = valor;
        }
    }
    zerar() {
        this.valor = 0;
    }
    incrementar() {
        this.valor++;
    }
    get valorAtual() {
        return this.valor;
    }
}
exports.contador = contador;
