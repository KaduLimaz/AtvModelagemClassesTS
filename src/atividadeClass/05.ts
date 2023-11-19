export class BombaCombustivel {
  private tipoCombustivel: string;
  private valorLitro: number;
  private quantidadeCombustivel: number;

  constructor(
    tipoCombustivel: string,
    valorLitro: number,
    quantidadeCombustivel: number
  ) {
    this.tipoCombustivel = tipoCombustivel;
    this.valorLitro = valorLitro;
    this.quantidadeCombustivel = quantidadeCombustivel;
  }

  public abastecerPorValor(valor: number): number {
    let litros = valor / this.valorLitro;
    if (litros > this.quantidadeCombustivel) {
      litros = this.quantidadeCombustivel;
    }
    this.quantidadeCombustivel -= litros;
    return litros;
  }

  public abastecerPorLitro(quantidade: number): number {
    let valor = quantidade * this.valorLitro;
    if (quantidade > this.quantidadeCombustivel) {
      quantidade = this.quantidadeCombustivel;
    }
    this.quantidadeCombustivel -= quantidade;
    return valor;
  }

  public alterarValor(valor: number): void {
    this.valorLitro = valor;
  }

  public alterarCombustivel(tipoCombustivel: string): void {
    this.tipoCombustivel = tipoCombustivel;
  }

  public alterarQuantidadeCombustivel(quantidade: number): void {
    this.quantidadeCombustivel = quantidade;
  }

  public getTipoCombustivel(): string {
    return this.tipoCombustivel;
  }

  public getValorLitro(): number {
    return this.valorLitro;
  }

  public getQuantidadeCombustivel(): number {
    return this.quantidadeCombustivel;
  }
}
