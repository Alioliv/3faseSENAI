/*Exercício 4 — Inversão de Texto com Pilha
Atividades Estrutura de dados 3
Inverter uma string usando pilha.
Complexidade Esperada
Etapa Complexidade
Empilhar O(n)
Desempilhar O(n)
Total O(n)
*/

function inverterTexto(texto) {
    const pilha = []

    for (let letra of texto) pilha.push(letra)

    let output = ""

    while (pilha.length > 0) output += pilha.pop()

    return output
}

console.log(inverterTexto("Oláaaaa!"))


