// Criar uma funcao que retorna uma promisse, e a ideia é simular o preparo do bolo
// Receber tempo de assamento
// Lógica que trata, se o tempo que foi passado é suficente pro bolo assar ou não
// Se sim, retorna a função do resolve -> informando que o bolo assou com sucesso
// Se não, retorna reject com bolo queimado ou cru
// finally, criatividade de voces.

function preparoBolo(ms) { 
    const tempoIdeal = 4000;

    return new Promise((resolve, reject) => { 
        
        setTimeout(() => { 
            
            if (ms === tempoIdeal) {
                resolve(` assou com sucesso no tempo de ${ms}ms`);
            
            } else if (ms < tempoIdeal) {
                reject(new Error(' Bolo ficou cru'));
            
            } else {
                reject(new Error(' Bolo queimou'));
            }

        }, ms); 
    });
}

preparoBolo(4000)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro.message))
    .finally(() => console.log(' Processo finalizado!'));


// Criar uma função que recebe um número aleatório, gerem o numero aleatorio
// quando chamar a funcao(usem metodos js)
// se o numero for maior que 5, retorna resolve, se não retorna reject
// usem o finally livremente.

function verificarNumero() {

    return new Promise((resolve, reject) => {

        const numeroAleatorio = Math.floor(Math.random() * 10); 
        // Gera número de 0 a 9

        console.log(`Número gerado: ${numeroAleatorio}`);

        if (numeroAleatorio > 5) {
            resolve(` Número ${numeroAleatorio} é maior que 5`);
        } else {
            reject(new Error(` Número ${numeroAleatorio} é menor ou igual a 5`));
        }

    });

}

verificarNumero()
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro.message))
    .finally(() => console.log(" Processo finalizado!"));