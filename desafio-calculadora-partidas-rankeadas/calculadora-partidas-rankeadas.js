// Função que calcula o saldo de vitórias (vitórias - derrotas)
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função que determina o nível do herói com base no número de vitórias
function determinarNivel(vitorias) {
  let nivel = "";

  // Estrutura de decisão para classificar o nível
  if (vitorias < 10) nivel = "Ferro";
  else if (vitorias <= 20) nivel = "Bronze";
  else if (vitorias <= 50) nivel = "Prata";
  else if (vitorias <= 80) nivel = "Ouro";
  else if (vitorias <= 90) nivel = "Diamante";
  else if (vitorias <= 100) nivel = "Lendário";
  else nivel = "Imortal";

  return nivel;
}

// Exemplo de uso
let vitorias = 12;
let derrotas = 8;

// Calcula o saldo de vitórias
let saldoVitorias = calcularSaldo(vitorias, derrotas);

// Determina o nível com base nas vitórias
let nivelHeroi = determinarNivel(vitorias);

// Exibe a mensagem final
console.log(
  `O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivelHeroi}.`
);
