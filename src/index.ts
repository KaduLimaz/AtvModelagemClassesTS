//1

import { contador } from "./atividadeClass/01";


// const contador1 = new contador(5)

// contador1.incrementar()
// contador1.zerar()

// contador1.incrementar()
// console.log(contador1.valorAtual)

//2

import {ModelBola} from "./atividadeClass/02"

// const bola = new ModelBola("branca",25,"couro")

// bola.trocarCor("verde")
// console.log(bola)
// console.log(bola.mostarCor())

//3 

import {ContaCorrente} from "./atividadeClass/03"

const contaNova = new ContaCorrente(1125,"Kadu")

contaNova.depositoConta(500)
// contaNova.depositoConta(500)
contaNova.alterarNomeConta("Carlos Eduardo")
contaNova.saqueConta(600)

console.log(contaNova)