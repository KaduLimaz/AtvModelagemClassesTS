export class ModelBola {
  constructor(
    public cor: string,
    public circuferencia: number,
    public material: string
  ) {}

  trocarCor(newCor: string): void {
    this.cor = newCor;
  }

  mostarCor() {
    return this.cor;
  }
}
