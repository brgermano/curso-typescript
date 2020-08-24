"use strict";
// string
var nome = 'joao';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
//boolean
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explicitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
//tuplas
//tupla é um array que possui um formato determinado de valores
var endereco = ["Av Principal", 99, "Bloco A"];
console.log(endereco);
endereco = ["Rua Importante", 1269, "Bloco A"];
console.log(endereco);
// enums
// define valores pre definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log("carro", carro);
carro = { marca: 'BMW', ano: 2019 };
console.log("carro", carro);
// funçoes 
function retornaMeuNome() {
    return nome;
}
console.log("retornaMeuNome -> retornaMeuNome", retornaMeuNome());
function digaOi() {
    console.log('Oia');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, "bia"))
console.log(multiplicar(4, 9));
// tipo função
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos 
var usuario = {
    nome: 'Joao',
    idade: 27
};
console.log("usuario", usuario);
// usuario = {}
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log("usuario", usuario);
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
var funcionario2 = {
    supervisores: ['Bias', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
