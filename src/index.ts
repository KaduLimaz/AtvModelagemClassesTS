//1

import { contador } from "./atividadeClass/01";


// const contador1 = new contador()

// contador1.incrementar()
// contador1.zerar()
// contador1.incrementar()
// contador1.incrementar()
// contador1.valorAtual()
//2

import {ModelBola} from "./atividadeClass/02"

// const bola = new ModelBola("branca",25,"couro")

// bola.trocarCor("verde")
// console.log(bola)
// console.log(bola.mostarCor())

//3 

import {ContaCorrente} from "./atividadeClass/03"

// const contaNova = new ContaCorrente(1125,"Kadu")

// console.log(contaNova)
// contaNova.depositoConta(10)
// console.log(contaNova)
// contaNova.saqueConta(11)
// console.log(contaNova)
//4


import {Calculadora} from "./atividadeClass/04"

// const calculadora = new Calculadora()


// calculadora.multiplicar(10,20)
// calculadora.somar(5,5)
// calculadora.verHistorico()

//5

import {BombaCombustivel} from "./atividadeClass/05"

// const bomba = new BombaCombustivel("Gasolina", 6, 100);

// console.log(bomba.getTipoCombustivel());
// console.log(bomba.getValorLitro());
// console.log(bomba.getQuantidadeCombustivel());

// // Abastece o veículo com R$ 60,00
// const litros = bomba.abastecerPorValor(60);
// console.log(litros); // 10
// console.log(bomba.getQuantidadeCombustivel()); // 90

// // Abastece o veículo com 20 litros
// const valor = bomba.abastecerPorLitro(20);
// console.log(valor); // 120
// console.log(bomba.getQuantidadeCombustivel()); // 70

// // Altera o valor do litro para R$ 7,00
// bomba.alterarValor(7);
// console.log(bomba.getValorLitro()); // 7

// // Altera o tipo do combustível para "Etanol"
// bomba.alterarCombustivel("Etanol");
// console.log(bomba.getTipoCombustivel()); // Etanol

// // Altera a quantidade de combustível para 50 litros
// bomba.alterarQuantidadeCombustivel(50);
// console.log(bomba.getQuantidadeCombustivel()); // 50


//6

// import {Carro} from "./atividadeClass/06"

// const fusca = new Carro(15)
// fusca.abastecerGasolina(20)
// fusca.andar(100)

// console.log(fusca.obterGasolina())

// PILARES POO

//1 

// import {AreaNormal, AreaVip, Camarote} from "./AtvPilaresPOO/01"

// const ingressoNormal = new AreaNormal(50)

// ingressoNormal.imprimeValor()

// const ingressoVip = new AreaVip(50,100)

// ingressoVip.imprimeValor()

// const camarote = new Camarote(50,200)

// camarote.imprimeValor()

//2
// import {NovoImovel, VelhoImovel} from "./AtvPilaresPOO/02"

// const casa = new NovoImovel("Rua Porto Nacional",100000)
// casa.valorImovelNovo(50000)
// console.log(casa)

// const Casa2 = new VelhoImovel("Avenida 2 ", 75000)

// Casa2.valorImovelVelho(25000)


import { Bicicleta, Ciclista } from "./exemplos/exemplo";

const bike = new Bicicleta("nike","corrida")

bike.pedalar()
