// string
let nome: string = 'joao'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
// idade = 'ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
console.log(hobbies)

//tuplas
//tupla é um array que possui um formato determinado de valores
let endereco: [string, number, string] = ["Av Principal", 99, "Bloco A"]
console.log(endereco)

endereco = ["Rua Importante", 1269, "Bloco A"]
console.log(endereco)

// enums
// define valores pre definidos
enum Cor {
  Cinza, //0
  Verde = 100, //1
  Azul = 10, //2
  Laranja,
  Amarelo,
  Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log("carro", carro)
carro = { marca: 'BMW', ano: 2019 }
console.log("carro", carro)

// funçoes 
function retornaMeuNome(): string {
  return nome
}
console.log("retornaMeuNome -> retornaMeuNome", retornaMeuNome())

function digaOi(): void {
  console.log('Oia')
  // return minhaIdade
}
digaOi()

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}
// console.log(multiplicar(2, "bia"))
console.log(multiplicar(4, 9))

// tipo função
let calculo: (numberoA: number, numeroB: number) => number 
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 6))

// objetos 
let usuario: { nome: string, idade: number } = {
  nome: 'Joao',
  idade: 27
}
console.log("usuario", usuario)
  
// usuario = {}
  
usuario = {
  idade: 31,
  nome: 'Maria',
}
console.log("usuario", usuario)