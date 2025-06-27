/**
 Crie uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
 */

// Lista mista
const dadosMistos = [1, 'cinco', 6, 'sete', 8, 'nove'];

// Apenas visualização com forEach
console.log('--- Números encontrados ---');
dadosMistos.forEach(item => {
  if (typeof item === 'number') {
    console.log(item);
  }
});
console.log('----------------------------');

// Exemplo de aluno - salvando em nova lista
const numerosFiltrados = [];

dadosMistos.forEach(item => {
  if (typeof item === 'number') {
    numerosFiltrados.push(item);
  }
});

console.log(`Números filtrados: ${numerosFiltrados.join(', ')}`);


function filtrarNumeros(lista) {
  const resultado = [];
  lista.forEach(item => {
    if (typeof item === 'number') {
      resultado.push(item);
    }
  });
  return resultado;
}

// Chamando a função
const resultadoFinal = filtrarNumeros([1, 'cinco', 6, 'sete', 8, 'nove']);
console.log(`Resultado da função: ${resultadoFinal.join(', ')}`);
