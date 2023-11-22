abstract class Animal {
    protected pelagem: string;
    protected tamanho: number;
    protected barulho: string;
  
    constructor(pelagem: string, tamanho: number, barulho: string) {
      this.barulho = barulho;
      this.pelagem = pelagem;
      this.tamanho = tamanho;
    }
  
    andar() {
      console.log("andou");
    }
  
    deitar() {
      console.log("deitou");
    }
  }
  
  class Cachorro extends Animal {
    latir() {
      console.log(this.barulho);
    }
  }
  
  class Gato extends Animal {
    miado() {
      console.log("miau");
    }
  }
  
  class Cavalo extends Animal {
    relinchar() {
      console.log("ihohon");
    }
  }
  
  const cachorro = new Cachorro("malhado", 0.8, "auau");
  cachorro.latir();