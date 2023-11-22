"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
class ContaCorrente {
    constructor(numeroConta, nomeCorrentista, saldo = 0) {
        this.numeroConta = numeroConta;
        this.nomeCorrentista = nomeCorrentista;
        this.saldo = saldo;
    }
    alterarNomeConta(nome) {
        this.nomeCorrentista = nome;
    }
    depositoConta(valor) {
        this.saldo += valor;
    }
    saqueConta(valor) {
        if (valor > this.saldo) {
            // console.log("Conta negativada, saque negado")
            throw new Error("Saldo insuficiente");
        }
        return (this.saldo -= valor);
    }
}
exports.ContaCorrente = ContaCorrente;
