export class ContaCorrente {
  constructor(
    private numeroConta: number,
    private nomeCorrentista: string,
    private saldo = 0
  ) {}

  alterarNomeConta(nome: string) {
    this.nomeCorrentista = nome;
  }

  depositoConta(valor: number) {
    this.saldo += valor;
  }

  saqueConta(valor: number) {
    if (valor > this.saldo) {
      // console.log("Conta negativada, saque negado")
      throw new Error("Saldo insuficiente");
    }
    return (this.saldo -= valor);
  }
}
