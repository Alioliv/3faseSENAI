/*
Exercício 5 — Implementar Lista Encadeada Simples
Criar estrutura Node:
valor
next
Operações:
inserir no início
inserir no final
remover por valor
Complexidade Esperada
Operação Complexidade
Inserir início O(1)
Inserir final (sem tail) O(n)
Remover O(n)
Buscar O(n)*/

class ListaEcadeada {
    constructor() {
        this.porteira = null
    }

    inserirInicio(value) {
        const nodo = new Node(value)
        nodo.next = this.porteira
        this.porteira = nodo
    }
    mostrar() {
        const output = []
        nodo.next = this.porteira
        this.porteira = nodo
        while (atual) {
            output.push(atual.value)
            atual = atual.next
        }
        return output   
    }
}

const Listaencadeada = new ListaEcadeada()
