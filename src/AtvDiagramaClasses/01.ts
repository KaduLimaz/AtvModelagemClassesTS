class Item {
  constructor(
    public valor: number,
    public nome: string,
    public descricao: string
  ) {}
}

class Pedido {
  constructor(public itens: Item[] = [], public valorTotal: number = 0) {}

  adicionarItem(itens: Item) {
    this.itens.push(itens);
    this.calcularValorTotal();
  }

  private calcularValorTotal() {
    this.itens.forEach((itens) => (this.valorTotal += itens.valor));
  }
}

const pedido = new Pedido();
pedido.adicionarItem(new Item(100, "arroz", "branco"));
pedido.adicionarItem(new Item(200, "feijao", "preto"));
pedido.adicionarItem(new Item(300, "coca", "refri"));

console.log(pedido);
