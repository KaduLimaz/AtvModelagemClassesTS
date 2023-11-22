export class contador {
  constructor(private valor: number = 0) {
    
  }

  zerar() {
    this.valor = 0;
    
  }

  incrementar() {
    this.valor++;
   
  }

   valorAtual() {
    console.log(this.valor)
  }
}
