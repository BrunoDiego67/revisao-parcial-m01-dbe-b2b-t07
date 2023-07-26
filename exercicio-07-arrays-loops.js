const nomes = ["Ana", "Joana", "Carlos", "amanda"];
const nomesFiltrados = [];

// crie um novo array a partir do primeiro que contenha
// apenas os nomes que começam com a letra "A" ou "a"

// For "tradicional"
// for (let indice = 0; indice < nomes.length; indice++) {
//     const nome = nomes[indice];
//     const primeiraLetraDoNome = nome[0];
//     if (primeiraLetraDoNome == "A" || primeiraLetraDoNome == "a") {
//         nomesFiltrados.push(nome);
//     }
// }
// console.log(nomesFiltrados);

// For...of
for (const nome of nomes) {
    const primeiraLetraDoNome = nome[0];
    if (primeiraLetraDoNome == "A" || primeiraLetraDoNome == "a") {
        nomesFiltrados.push(nome);
    }
}
// console.log(nomesFiltrados);

const frutas = ["Banana", "Orange", "Apple", "Mango"];
const frutasEntries = frutas.entries();

for (let [indice, valor] of frutasEntries) {
    console.log(`índice: ${indice} - valor: ${valor}`);
}