/**
 * Contar vogais no texto
 * 
 * Dado um texto com letras minúsculas e espaços,
 * retornar o número total de vogais (a, e, i, o, u).
 * O texto de entrada conterá apenas letras minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
 */


const exemplos = [
    'Ana',                  
    'Elefante',            
    'coraçãO',              
    'pássarO',             
    'guitarrA',   
    'Pêssego',          
    'língua portuguesA',    
    ' ',                    
    ''                     
  ];
  
  // Função para contar vogais simples, sem contar acentos
  function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
  
    for (const char of texto) {
      if (vogais.includes(char)) contador++;
    }
  
    return contador;
  }
  
  // Testando todos os exemplos
  exemplos.forEach((exemplo) => {
    console.log(`"${exemplo}": ${contarVogais(exemplo)} vogal(is)`);
  });
  