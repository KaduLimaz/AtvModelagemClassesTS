abstract class FormatoDeElemento {
  desenhar(): void {}
  redimensionar(): void {}
}

class Circulo extends FormatoDeElemento {
  constructor(public raio: number) {
    super();
  }

  desenhar(): void {
    console.log("Desenhando um círculo com raio " + this.raio);
  }

  redimensionar(): void {
    console.log("Redimensionando o circulo");
  }
}

class Retangulo extends FormatoDeElemento {
  constructor(public comprimento: number, public altura: number) {
    super();
  }

  desenhar(): void {
    console.log(
      "Desenhando um retângulo com comprimento " +
        this.comprimento +
        " e altura " +
        this.altura
    );
  }

  redimensionar(): void {
    console.log("Redimensionando o retângulo");
  }
}

const desenho = new Circulo(50);
const desenho2 = new Retangulo(50,60)

desenho2.desenhar()
desenho2.redimensionar()
desenho.desenhar();
desenho.redimensionar()
