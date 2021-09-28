const dobrar = (numeroA, numeroB) => numeroA*numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(2, 2, (numeroA, numeroB) => numeroA*numeroB))