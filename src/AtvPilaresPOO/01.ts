abstract class Ingresso {
  constructor(public valor: number) {}

  imprimeValor() {
    console.log(`Valor do ingreço: R$${this.valor}`);
  }
}

export class AreaNormal extends Ingresso {
  constructor(public valor: number) {
    super(valor);
  }
}

export class AreaVip extends Ingresso {
  constructor(valor: number, public valorVip: number) {
    super(valor);
  }

  imprimeValor(): void {
    const vip = (this.valor += this.valorVip);
    console.log(`Valor do ingreço Vip: R$${vip}`);
  }
}

export class Camarote extends Ingresso {
  constructor( valor: number, public valorCamarote: number) {
    super(valor);
  }
  imprimeValor(): void {
    const camarote = (this.valor += this.valorCamarote);
    console.log(`Valor do ingreço Camarote: R$${camarote}`);
  }
}
