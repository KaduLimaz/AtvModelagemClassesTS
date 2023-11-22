abstract class Imovel {
  constructor(public endereço: string, public preço: number) {}
}

export class NovoImovel extends Imovel {
  constructor(
    public endereço: string,
    public preço: number
  ) 
  {
    super(endereço, preço);
  }

  valorImovelNovo(valor: number): void {
    const valorNovo = (this.preço += valor);
    console.log(valorNovo);
  }
}

export class VelhoImovel extends Imovel {
  constructor(
    public endereço: string,
    public preço: number
  ) 
  {
    super(endereço, preço);
  }

  valorImovelVelho(valor: number): void {
    const descontoVelho = (this.preço -= valor);
    console.log(descontoVelho);
  }
}


// //abstract class Imovel {
//     constructor(protected endereco: string, protected preco: number) {}

//     abstract printInfo(): void;
//   }
  
//   class NovoImovel extends Imovel {
//     constructor(endereco: string, preco: number, adicionalPreco: number) {
//       super(endereco, preco + adicionalPreco);
//     }
  
//     printInfo(): void {
//       console.log("Imovel Novo");
//     }
//   }
  
//   class VelhoImovel extends Imovel {
//     constructor(endereco: string, preco: number, descPreco: number) {
//       super(endereco, preco - descPreco);
//     }
  
//     printInfo(): void {
//       console.log("Imovel velho");
//     }
//   }
  
//   const casa: Imovel = new NovoImovel("avenida 2", 50000, 45000);
//   casa.printInfo();
  
//   const casaV = new VelhoImovel("avenida 1", 25000, 5000);
//   casaV.printInfo();