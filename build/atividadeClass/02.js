"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBola = void 0;
class ModelBola {
    constructor(cor, circuferencia, material) {
        this.cor = cor;
        this.circuferencia = circuferencia;
        this.material = material;
    }
    trocarCor(cor) {
        this.cor = cor;
    }
    mostarCor() {
        return this.cor;
    }
}
exports.ModelBola = ModelBola;
