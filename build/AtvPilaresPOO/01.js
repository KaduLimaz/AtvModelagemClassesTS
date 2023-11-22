"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camarote = exports.AreaVip = exports.AreaNormal = void 0;
class Ingresso {
    constructor(valor) {
        this.valor = valor;
    }
    imprimeValor() {
        console.log(`Valor do ingreço: R$${this.valor}`);
    }
}
class AreaNormal extends Ingresso {
    constructor(valor) {
        super(valor);
        this.valor = valor;
    }
}
exports.AreaNormal = AreaNormal;
class AreaVip extends Ingresso {
    constructor(valor, valorVip) {
        super(valor);
        this.valor = valor;
        this.valorVip = valorVip;
    }
    imprimeValor() {
        const vip = (this.valor += this.valorVip);
        console.log(`Valor do ingreço Normal: R$${this.valor}`);
        console.log(`Valor do ingreço VIP: R$${vip}`);
    }
}
exports.AreaVip = AreaVip;
class Camarote extends Ingresso {
    constructor(valor, valorCamarote) {
        super(valor);
        this.valor = valor;
        this.valorCamarote = valorCamarote;
    }
    imprimeValor() {
        const camarote = (this.valor += this.valorCamarote);
        console.log(`Valor do ingreço Normal: R$${this.valor}`);
        return `Valor do camorote: R$${camarote}`;
    }
}
exports.Camarote = Camarote;
