"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(consumoCombustivel, qtdCombustivel = 0) {
        this.consumoCombustivel = consumoCombustivel;
        this.qtdCombustivel = qtdCombustivel;
    }
    andar(distancia) {
        this.qtdCombustivel -= distancia / this.consumoCombustivel;
    }
    obterGasolina() {
        return this.qtdCombustivel;
    }
    abastecerGasolina(quantidade) {
        this.qtdCombustivel += quantidade;
    }
}
exports.Carro = Carro;
