const pessoa = ['João', 30, 'engenheiro'];

// Desestruturação do array
const [nome, idade, profissao] = pessoa;

console.log(nome); // Saída: João
console.log(idade); // Saída: 30
console.log(profissao); // Saída: engenheiro


let carro = {
    potencia: 120,
    motor: 'turbo',
    cambio: 'manual',
    anoFabricacao: 2020
}

const { cambio, anoFabricacao } = carro
console.log(cambio) // Saída: manual
console.log(anoFabricacao) // Saída: 2020

console.log(pessoa[1]);