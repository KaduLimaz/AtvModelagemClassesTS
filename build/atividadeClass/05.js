"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BombaCombustivel = void 0;
class BombaCombustivel {
    constructor(tipoCombustivel, valorLitro, quantidadeCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }
    abastecerPorValor(valor) {
        let litros = valor / this.valorLitro;
        if (litros > this.quantidadeCombustivel) {
            litros = this.quantidadeCombustivel;
        }
        this.quantidadeCombustivel -= litros;
        return litros;
    }
    abastecerPorLitro(quantidade) {
        let valor = quantidade * this.valorLitro;
        if (quantidade > this.quantidadeCombustivel) {
            quantidade = this.quantidadeCombustivel;
        }
        this.quantidadeCombustivel -= quantidade;
        return valor;
    }
    alterarValor(valor) {
        this.valorLitro = valor;
    }
    alterarCombustivel(tipoCombustivel) {
        this.tipoCombustivel = tipoCombustivel;
    }
    alterarQuantidadeCombustivel(quantidade) {
        this.quantidadeCombustivel = quantidade;
    }
    getTipoCombustivel() {
        return this.tipoCombustivel;
    }
    getValorLitro() {
        return this.valorLitro;
    }
    getQuantidadeCombustivel() {
        return this.quantidadeCombustivel;
    }
}
exports.BombaCombustivel = BombaCombustivel;
