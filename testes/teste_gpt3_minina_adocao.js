/*
Crie um script que verifique se um dog pode ser adotado com base na idade mínima definida, por exemplo, 2 anos.

 * 
 * 
 * 
 */

// idade minina para adoção

const idadeMinima = 2;

// Função que verifica se o cachorro pode ser adotado

function verificaSePodeSerAdotado(nome, idade, porte) {
    let motivo;

    if (idade >=idadeMinima) {
        motivo = 'Sim, pela idade.';
    } else if (porte === 'P') {
        motivo = 'Sim, pelo porte.'; 
    } else {
        motivo = 'Não, ainda é muito jovem.';
    }

    // Exibir resultado formatada

    console.log(`Nome: ${nome}`);
    console.log(`Idade: ${idade}`);
    console.log(`Porte: ${porte}`);
    console.log(`Pode ser adotado?: ${motivo}`);
    console.log('----------------------');

}

//Testes com diferentes situações

verificaSePodeSerAdotado('Dog 1', 1, 'M');
verificaSePodeSerAdotado('Dog 2', 2, 'M');
verificaSePodeSerAdotado('Dog 3', 2, 'P');
verificaSePodeSerAdotado('Dog 4', 1, 'P');
verificaSePodeSerAdotado('Dog 5', 0, 'P');