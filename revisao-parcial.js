// Variáveis
// Tipos de variáveis
// String, Number, Array, Objeto, Booleano
let nome = 'José';
let idade = 10;
let estados = [
    'AC','AL','AP','AM','BA','CE','ES','GO','MA'
];
let carro = {
    cambio: 'manual',
    marca: 'volkswagen',
    modelo: 'gol',
    anoFabricacao: 2010,
    documentoEmDia: false
}

// Condicionais
// Se / Senão
// if / else

// Operadores Lógicos
//     E - &&
//     OU - ||

// if (condicao) {
//     condicao foi satisfeita ingressa no bloco if
// } else {
//     condicao não foi satisfeita ingressa no bloco else
// }

// if (idade >= 10) {
//     if (nome.length > 3) {
//         console.log('cumpriu as condições');
//     }
// }

// if (idade >= 10 && nome.length > 3) {
//     console.log('cumpriu as condições');
// }

// if (carro.documentoEmDia) {
//     console.log('documento em dia');
// } else {
//     console.log('documento não está em dia');
// }


// Precisamos criar uma condição que valide se o documento do carro não está em dia
// if (!carro.documentoEmDia) {
//     console.log('documento não está em dia');
// }


// Arrays e Loops
// For "tradicional"
// Shorthand - Sintaxe curta 
// indice++ - indice = indice + 1
// variável acumuladora
// for (critério de início; critério de parada; criteŕio de incremento/decremento) {
// }

for (let indice = 0; indice < estados.length; indice++) {
    const estado = estados[indice];
    console.log(estado);
}

// 'AC','AL','AP','AM','BA','CE','ES','GO','MA'
// For...of 
for (const estado of estados) {
    console.log(estado);
}

// For                       |  For...of
// Pode causar loop Infinito | Não causa loop Infinito
// precisa incrementar/decrementar | Não precisamos trabalhar com os índices
// podemos parametrizar o início do loop | percorre todo o array


