export class contador {
  constructor(private valor: number) {
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
