/*  Montar a estrutura
Pense no objetivo: O que a funcão irá fazer?
Gerar uma etiqueta com informações de um cachorro

Passo 1 - Criar estrutura da função
          1.1 - Criar funcão + nome da função + parâmetros (dados que ela precisa)
          Ex.: function gerarEtiqueta (nome, idade, peso, raca, adotado)

Passo 2 - Tratar os dados (lógica da função)
          2.1 - Fazer as transformações ou cálculos necessários
          Ex.:  const nomeMaiusculo = nome.toUpperCase
Passo 3




*/


function gerarEtiqueta(nome, idade, peso, raca, adotado) {
    // Formatações
    const nomeMaiusculo = nome.toUpperCase();
    const racaFormatada = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase();
    const statusAdocao = adotado ? "Adotado" : "Disponível para adoção";
  
    // Monta a etiqueta      - //utilizar a crase quando utiliza muitas variávei e textos cumpridos
    const etiqueta = `                     
    -------------------------------
    🐶 IDENTIFICAÇÃO DO CACHORRO 🐾
    Nome  : ${nomeMaiusculo}
    Peso  : ${peso} kg
    Raça  : ${racaFormatada}
    -------------------------------
    `;
  
    return etiqueta;                      // retorna o valor da função
  }
  
  // Exemplo de uso:
  const etiquetaDoDog = gerarEtiqueta("tobby", 3, 12.5, "vira-lata", false);
  console.log(etiquetaDoDog);
  