// Criar uma funcao que retorna uma promisse, e a ideia é simular o preparo do bolo
// Receber tempo de assamento
// Lógica que trata, se o tempo que foi passado é suficente pro bolo assar ou não
// Se sim, retorna a função do resolve -> informando que o bolo assou com sucesso
// Se não, retorna reject com bolo queimado ou cru
// finally, criatividade de voces.


function preparoBolo(ms) { 
let tempopreparo = 4000
    return new Promise(
        (resolve, reject) => { 
            setTimeout(() => { 
            
                if(tempopreparo = 4000  ) {
                    console.log
                    resolve(`bolo assou com sucesso no tempo de ${ms}ms`);
                } else {
                    console.log
                    reject(new Error('queimado ou cru'));
                }
         }, 
            ms); 
        });
}
preparoBolo(4000)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log('Finalizado'));


// Criar uma função que recebe um número aleatório, gerem o numero aleatorio
// quando chamar a funcao(usem metodos js)
// se o numero for maior que 5, retorna resolve, se não retorna reject
// usem o finally livremente.

/*function esperarTempo(ms) { 
    return new Promise(
        (resolve, reject) => { 
            setTimeout(() => { 
                console.log("antes")
                 resolve(`Esperou ${ms}ms`);
                console.log("depois") 
                // Para simular erro: 
                reject(new Error('Falhou'));
         }, 
            ms); 
        });
}
esperarTempo(2000)
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.error(erro))
    .finally(() => console.log('Finalizado'));
*/ 