export class Carro {
    constructor(
        public consumoCombustivel: number,
        public qtdCombustivel: number = 0
    ){}

    andar(distancia:number){
        this.qtdCombustivel-= distancia / this.consumoCombustivel
    }

    obterGasolina():number {
        return this.qtdCombustivel
    }

    abastecerGasolina(quantidade:number){
        this.qtdCombustivel+= quantidade
    }
}