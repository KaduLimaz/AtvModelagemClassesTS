import { log } from "console";

export class Bicicleta {
    constructor(
        public marca: string, public tipo:string
    ){}

    pedalar(){
        console.log(`${this.marca} ${this.tipo} esta pedalando`)
    }
}

class Ciclista {
    constructor(
        public nome:string, public bicicleta: Bicicleta
    ){}

    iniciarCorrida(){
        console.log(`${this.nome} corrida em ${this.bicicleta.marca}`)
    }
}