/*class Queue {

    constructor() {
        this.array = new Array()
    }

    enqueue(value) {
        if (value.isEldery) {
            let contador = 0
            while (contador < this.array.length && this.array[contador].isEldery) contador++
            
            this.array.splice(contador, 0, value)
        }
        else {
            this.array.push(value)
        }
    }

    dequeue() {
        if (this.tamanho === 0) return "Fila vazia"
        const removido = this.array[this.inicio]
        this.array[this.inicio] = undefined
        this.inicio = this.inicio + 1
        this.tamanho = this.tamanho - 1
        return removido;
    }

    

    mostrarTamanho() {
        return this.array.length
    }
    mostrarFila() {
        return this.array
    }

}

const fila = new Queue();

fila.enqueue({nome:"Ronald", isEldery:false})
fila.enqueue({nome:"Felipe", isEldery:false})
fila.enqueue({nome:"Fred", isEldery:false})

fila.enqueue({nome:"Sebastião", isEldery:true})
fila.enqueue({nome:"Jertrude", isEldery:true})
fila.enqueue({nome:"Terezinha", isEldery:true})

console.table(fila.mostrarFila())*/


// Atividade2. PILHAS (Stack – LIFO)
/*Exercício 3 — Validador de Parênteses
Enunciado
Verifique se uma expressão possui parênteses balanceados:
((a+b)*c)
Discussão Guiada
Quando empilha?
Quando desempilha?
Como detecta erro?
Complexidade Esperada
Operação Complexidade
Percorrer string O(n)
push/pop O(1)
Complexidade total: O(n)*/


function validarBalanceamento(expressao) {
    const pilha = [];
    let topoPilhas = -1; // começar em -1 para indicar que a pilha está vazia, e o topo é o índice do último elemento adicionado. Quando a pilha estiver vazia, topoPilhas será -1.
    const pares = { 
        '(': ')', 
        '[': ']',
        '{': '}'
    };

    const quemAbre = new Set(["(", "[", "{"])

    for (const caractere of expressao) {
        if (quemAbre.has (caractere)){
           // pilha.push(caractere) 
            topoPilhas++
            console.log(pilha)
        }
        else if (caractere in pares) {
            if (pilha.length === 0) return false    
           // const topo = pilha.pop()
            pilha[topoPilhas] = -1 // "remover" o elemento do topo da pilha, marcando-o como -1 (ou qualquer valor que indique que foi removido)
            const topo = pilha[topoPilhas]
                topoPilhas--
            if (topo !== pares[caractere]) return false
         }
    }
    return pilha.length === 0;
    
}

console.log(validarBalanceamento("((a+b)*c)"))  

//console.log(validarBalanceamento("{[(a + b) * c]}")) 

