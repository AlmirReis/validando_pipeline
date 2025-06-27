/*
Crie uma função chamada formatarFilmes que:

1 - Deixe o titulo em maiúsculas
2 - Deixe o diretor com apenas a primeira letra maiúscula
3 - Mantenha o ano como está
4 - Use map() dentro da função
5 - Mostre com console.table()
*/

// Lista de filmes
const listaFilmes = [
    { titulo: "esqueceram de mim", diretor: "thamaz", ano: "2000" },
    { titulo: "star wars", diretor: "michael", ano: "1960" },
    { titulo: "natal em familia", diretor: "sebastian", ano: "2018" },
];

// Função - Deixar 1ª letra maiúscula
function primeiraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

// Função - Deixar tudo em maiúscula
function tudoMaiuscula(texto) {
    return texto.toUpperCase();
}

// Função para formatar a lista de filmes
function formatarFilmes(lista) {
    return lista.map(filme => ({
        titulo: primeiraMaiuscula(filme.titulo),  // Usando a função primeiraMaiuscula
        diretor: tudoMaiuscula(filme.diretor),    // Usando a função tudoMaiuscula
        ano: filme.ano
    }));
}

// Lista formatada
const filmesFormatados = formatarFilmes(listaFilmes);  //chamando a função formatarFilmes(), passando como argumento a lista original de filmes: listaFilmes.

// Mostrar na tabela
console.table(filmesFormatados);
