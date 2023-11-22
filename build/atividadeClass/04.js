"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    constructor(historico = []) {
        this.historico = historico;
    }
    somar(n1, n2) {
        this.historico.push({ n1, n2, operador: "+", resultado: n1 + n2 });
        return n1 + n2;
    }
    multiplicar(n1, n2) {
        this.historico.push({ n1, n2, operador: "*", resultado: n1 * n2 });
        return n1 * n2;
    }
    dividir(n1, n2) {
        if (n2 === 0) {
            throw new Error("Nenhum número pode ser dividido por zero");
        }
        this.historico.push({ n1, n2, operador: "/", resultado: n1 / n2 });
        return n1 / n2;
    }
    diminuir(n1, n2) {
        this.historico.push({ n1, n2, operador: "-", resultado: n1 - n2 });
        return n1 - n2;
    }
    verHistorico() {
        console.log("Historico:");
        for (const { n1, n2, operador, resultado } of this.historico) {
            console.log(`${n1} ${operador} ${n2} = ${resultado}`);
        }
    }
}
exports.Calculadora = Calculadora;
