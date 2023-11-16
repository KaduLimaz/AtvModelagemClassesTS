export class ModelBola {
  constructor(
    public cor: string,
    public circuferencia: number,
    public material: string
  ) {}

  trocarCor(cor: string): void {
    this.cor = cor;
  }

  mostarCor() {
    return this.cor;
  }
}
