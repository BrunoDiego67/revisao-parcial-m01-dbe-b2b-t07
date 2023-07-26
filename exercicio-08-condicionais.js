// Menores de 12 anos
// Maiores de 65 anos
// Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura

// Para as pessoas que podem brincar na montanha russa,
// a tabela de preços é a seguinte:
// ACESSO NEGADO - caso não possa brincar na montanha russa
// 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// 20 reias, caso contrário

const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log('ACESSO NEGADO');
} else if (ehEstudante || idade < 18) {
    console.log('10 reais');
} else {
    console.log('20 reais');
}
